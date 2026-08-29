import { chat, toServerSentEventsResponse } from "@tanstack/ai";
import { openRouterText } from "@tanstack/ai-openrouter";
import {
  getCustomerVehicleCatalogTool,
  getDashboardMetricsTool,
  getSalesByRegionTool,
} from "@/features/aiAssistant/lib/dataTools";

const availableTools = [
  getDashboardMetricsTool,
  getSalesByRegionTool,
  getCustomerVehicleCatalogTool,
];

export async function POST(request) {
  try {
    const body = await request.json();
    const incomingMessages = Array.isArray(body?.messages) ? body.messages : [];
    const lastMessage = incomingMessages[incomingMessages.length - 1];
    const userPrompt =
      typeof lastMessage?.content === "string"
        ? lastMessage.content
        : typeof body?.input === "string"
          ? body.input
          : "";

    const systemPrompt =
      body?.systemPrompt ||
      `You are BestCar AI, a helpful car rental assistant.

Use the available tool calls to answer using the app's live mock datasets from the dashboard and customer storefront.
Available tools:
- getDashboardMetrics: dashboard KPIs, top vehicles, transactions, notifications
- getSalesByRegion: regional sales performance by week/month/year
- getCustomerVehicleCatalog: customer car listings and booking catalog

Answer concisely and use the data provided by the tools when relevant. If the user asks for a recommendation, cite the relevant data and keep the reply short and practical.`;

    if (!process.env.OPENROUTER_API_KEY && !process.env.GEMINI_API_KEY) {
      const fallbackMessage = `I’m ready to help, but the OpenRouter API key is not configured yet. Add OPENROUTER_API_KEY to use the live BestCar data tools and generate answers from the dashboard and storefront mock data.`;

      const fallbackStream = async function* () {
        yield {
          type: "RUN_STARTED",
          threadId: "bestcar-demo-thread",
          runId: "bestcar-demo-run-error",
        };
        yield {
          type: "TEXT_MESSAGE_START",
          messageId: "bestcar-demo-message",
          role: "assistant",
        };
        yield {
          type: "TEXT_MESSAGE_CONTENT",
          messageId: "bestcar-demo-message",
          delta: fallbackMessage,
        };
        yield {
          type: "RUN_FINISHED",
          threadId: "bestcar-demo-thread",
          runId: "bestcar-demo-run-error",
          result: fallbackMessage,
        };
      };

      return toServerSentEventsResponse(fallbackStream());
    }

    const stream = chat({
      adapter: openRouterText("deepseek/deepseek-v3.2"),
      messages: incomingMessages,
      systemPrompts: [systemPrompt],
      tools: availableTools,
    });

    return toServerSentEventsResponse(stream);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Something went wrong.";

    const fallbackStream = async function* () {
      yield {
        type: "RUN_STARTED",
        threadId: "bestcar-demo-thread",
        runId: "bestcar-demo-run-error",
      };
      yield {
        type: "TEXT_MESSAGE_START",
        messageId: "bestcar-demo-message",
        role: "assistant",
      };
      yield {
        type: "TEXT_MESSAGE_CONTENT",
        messageId: "bestcar-demo-message",
        delta: `I hit an error while preparing your answer. ${message}`,
      };
      yield {
        type: "RUN_FINISHED",
        threadId: "bestcar-demo-thread",
        runId: "bestcar-demo-run-error",
        result: `I hit an error while preparing your answer. ${message}`,
      };
    };

    return toServerSentEventsResponse(fallbackStream());
  }
}
