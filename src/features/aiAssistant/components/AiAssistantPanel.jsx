"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useChat, fetchServerSentEvents } from "@tanstack/ai-react";

const starterMessages = [
    {
        id: "welcome-1",
        role: "assistant",
        content: "Hi! I’m BestCar AI. I can help with vehicle recommendations, booking info, support questions, and sales follow-up.",
    },
    {
        id: "welcome-2",
        role: "assistant",
        content: "Try asking: “Which car is best for a family trip?” or “What is the cheapest option for 3 days?”",
    },
];

const formatMessageText = (text) => {
    if (!text) return "";

    return text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .replace(/\*(.*?)\*/g, "$1")
        .replace(/`(.*?)`/g, "$1")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
};

export default function AiAssistantPanel({ isOpen, onClose }) {
    const [input, setInput] = useState("");
    const panelRef = useRef(null);

    const systemPrompt = useMemo(
        () => `
You are BestCar AI, a helpful car rental assistant for a premium car rental website.
Use a friendly, concise tone and answer based on the app's mock data tools when relevant.

Business context:
- Website: BestCar
- Customers can rent cars, compare options, and start bookings.
- Most popular categories: Large Car, Small Car, Exclusive Car.
- Common use cases: family travel, business travel, city driving, luxury rides.
- Use the available data tools when the user asks about dashboard metrics, regional sales, or vehicle inventory.
- If you do not know a specific fact, say so clearly and suggest the next step.

Available tool names:
- getDashboardMetrics
- getSalesByRegion
- getCustomerVehicleCatalog

Keep responses short, practical, and useful for car rental customers and staff.
    `.trim(),
        [],
    );

    const { messages, sendMessage, isLoading, error, stop } = useChat({
        connection: fetchServerSentEvents("/api/chat"),
        body: {
            systemPrompt,
        },
    });

    useEffect(() => {
        if (!isOpen || !panelRef.current) return;

        panelRef.current.scrollTo({
            top: panelRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [isOpen, messages, isLoading]);

    const visibleMessages = messages.length > 0 ? messages : starterMessages;

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmed = input.trim();

        if (!trimmed || isLoading) {
            return;
        }

        sendMessage(trimmed);
        setInput("");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2rem)] max-w-[360px] overflow-hidden rounded-[20px] border border-[#E6EAED] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] animate-fadeIn">
            <div className="flex items-center justify-between border-b border-[#E6EAED] bg-[#0F172A] px-4 py-3 text-white">
                <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FE9F43]/15 text-[#FE9F43]">
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18h6" />
                            <path d="M10 22h4" />
                            <path d="M12 3a4 4 0 0 1 3.6 6.2A3.8 3.8 0 0 1 18 12.7V14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1.3a3.8 3.8 0 0 1 2.4-3.5A4 4 0 0 1 12 3Z" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-sm font-bold">BestCar AI</div>
                        <div className="text-[10px] text-slate-300">Always here to help</div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                    aria-label="Close AI assistant"
                >
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                </button>
            </div>

            <div ref={panelRef} className="flex max-h-[420px] min-h-[300px] flex-col gap-3 overflow-y-auto bg-[#F8FAFC] p-3">
                {visibleMessages.map((message) => {
                    const isAssistant = message.role === "assistant";
                    const text = (() => {
                        if (typeof message.content === "string") return formatMessageText(message.content);
                        if (Array.isArray(message.content)) {
                            return formatMessageText(
                                message.content
                                    .map((part) => {
                                        if (typeof part === "string") return part;
                                        if (part && typeof part === "object") {
                                            if (part.type === "text") return part.text || part.content || "";
                                            if (part.type === "reasoning") return part.text || part.summary || "";
                                            if (part.content && typeof part.content === "string") return part.content;
                                        }
                                        return "";
                                    })
                                    .join(" ")
                            );
                        }
                        if (Array.isArray(message.parts)) {
                            return formatMessageText(
                                message.parts
                                    .map((part) => {
                                        if (part?.type === "text") return part.content || "";
                                        if (part?.type === "reasoning") return part.text || part.summary || "";
                                        return "";
                                    })
                                    .join(" ")
                            );
                        }
                        return "";
                    })();

                    return (
                        <div
                            key={message.id || `${message.role}-${Math.random()}`}
                            className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}
                        >
                            <div
                                className={`max-w-[85%] rounded-[18px] px-3.5 py-2.5 text-sm leading-6 shadow-sm ${isAssistant
                                        ? "bg-white text-[#212B36] ring-1 ring-slate-200"
                                        : "bg-[#FE9F43] text-white"
                                    } whitespace-pre-wrap break-words`}
                            >
                                {text || "..."}
                            </div>
                        </div>
                    );
                })}

                {isLoading && (
                    <div className="flex justify-start">
                        <div className="rounded-2xl bg-white px-3 py-2 text-sm text-slate-500 ring-1 ring-slate-200">
                            <span className="inline-flex items-center gap-1">
                                <span className="h-2 w-2 animate-bounce rounded-full bg-[#FE9F43] [animation-delay:-0.2s]" />
                                <span className="h-2 w-2 animate-bounce rounded-full bg-[#FE9F43] [animation-delay:-0.1s]" />
                                <span className="h-2 w-2 animate-bounce rounded-full bg-[#FE9F43]" />
                            </span>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                        {error.message || "The assistant could not respond right now."}
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="border-t border-[#E6EAED] bg-white p-3">
                <div className="flex items-end gap-2 rounded-2xl border border-[#E6EAED] bg-[#F8FAFC] p-2">
                    <textarea
                        rows={1}
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        placeholder="Ask BestCar AI..."
                        className="max-h-24 min-h-[40px] flex-1 resize-none border-0 bg-transparent px-2 py-1.5 text-sm text-[#212B36] placeholder:text-slate-400 focus:outline-none"
                        onKeyDown={(event) => {
                            if (event.key === "Enter" && !event.shiftKey) {
                                event.preventDefault();
                                handleSubmit(event);
                            }
                        }}
                    />

                    {isLoading ? (
                        <button
                            type="button"
                            onClick={stop}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-700 transition hover:bg-slate-300"
                            aria-label="Stop response"
                        >
                            ■
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={!input.trim()}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FE9F43] text-white transition hover:bg-[#E05E12] disabled:cursor-not-allowed disabled:opacity-40"
                            aria-label="Send message"
                        >
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                                <path d="m13 5 7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
