"use client";

import { useState } from "react";
import AiAssistantLauncher from "@/features/aiAssistant/components/AiAssistantLauncher";
import AiAssistantPanel from "@/features/aiAssistant/components/AiAssistantPanel";

export default function AiAssistantRoot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AiAssistantLauncher isOpen={isOpen} onOpen={() => setIsOpen(true)} />
      <AiAssistantPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
