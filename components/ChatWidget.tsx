"use client";

import React, { useState } from 'react';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'Hello! I am BiteFinder AI. Ask me anything about restaurants, cuisines, or pricing!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMessage })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { sender: 'ai', text: data.response || 'System processing context completed.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'ai', text: 'Sorry, connection to AI engine lost. Please try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all focus:outline-none text-2xl cursor-pointer"
      >
        {isOpen ? '❌' : '🤖'}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 h-[450px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 text-white font-bold tracking-wide">
            BiteFinder AI Engine
            <span className="block text-[10px] font-normal text-orange-100">RAG Context Enabled</span>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-gray-50 text-sm text-gray-800">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] p-3 rounded-xl shadow-sm ${msg.sender === 'user' ? 'bg-orange-500 text-white' : 'bg-white text-gray-800 border border-gray-100'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-left text-xs text-gray-400 font-mono animate-pulse">AI is compiling query vectors...</div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about menu matrix, things..."
              className="flex-grow border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-orange-500"
            />
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-orange-600 cursor-pointer">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}