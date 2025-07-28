"use client";

import React, { useState, useRef, useEffect } from "react";
import ResponsiveBottomNavbar from "@/components/ResponsiveBottomNavbar";
import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const CreatePage = () => {
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([
    { role: "assistant", content: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const userMessage: ChatCompletionMessageParam = { role: "user", content: input };
    // Prepare the new message list for the API call
    const newMessages = [
      ...messages.filter((m) => m.role === "user" || m.role === "assistant" || m.role === "system")
        .map((m) => ({
          role: m.role,
          content: typeof m.content === "string" ? m.content : JSON.stringify(m.content ?? ""),
        })),
      { role: "user", content: input },
    ];
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: newMessages,
      });
      const assistantReply = chatCompletion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantReply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: Unable to get response from OpenAI." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-[70px] flex flex-col bg-[#18171D]">
      <div className="flex-1 w-full max-w-2xl mx-auto px-2 py-4 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 rounded-lg bg-[#23222a] p-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl text-base whitespace-pre-line shadow-md ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-gray-200 text-gray-900 rounded-bl-sm"
                }`}
              >
                {typeof msg.content === "string"
                  ? msg.content
                  : Array.isArray(msg.content)
                  ? msg.content.map((part, i) =>
                      typeof part === "string"
                        ? part
                        : typeof part === "object" && "text" in part
                        ? (part as any).text
                        : JSON.stringify(part)
                    ).join("")
                  : msg.content != null
                  ? JSON.stringify(msg.content)
                  : ""}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form
          onSubmit={handleSend}
          className="flex items-center gap-2 mt-2 bg-[#23222a] p-2 rounded-xl border border-gray-700"
        >
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-lg bg-[#23222a] text-white outline-none border-none"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            disabled={loading}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            disabled={!input.trim() || loading}
          >
            {loading ? "..." : "Send"}
          </button>
        </form>
      </div>
      <ResponsiveBottomNavbar />
    </div>
  );
};

export default CreatePage;