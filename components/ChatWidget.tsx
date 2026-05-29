"use client";

import React, { useState, useEffect } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! I am BiteFinder AI. Ask me about restaurants, cuisines, or pricing!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-bitefinder-chat', handleOpenChat);
    return () => window.removeEventListener('open-bitefinder-chat', handleOpenChat);
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMessage })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { sender: 'ai', text: data.response || 'No response from server.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'ai', text: 'Sorry, connection to AI engine lost.' }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    // Mobile par full viewport fixed, desktop par bottom-6 right-6 par fixed widget
    <div className="fixed inset-0 md:inset-auto md:bottom-6 md:right-6 md:w-96 md:h-[500px] z-[9999] font-sans bg-white md:bg-transparent flex flex-col">
      
      {/* Container: Mobile par pure 100%, Desktop par rounded layout */}
      <div className="flex flex-col w-full h-full bg-white md:border md:border-gray-200 md:rounded-2xl md:shadow-2xl overflow-hidden">
        
        {/* Header (Top Bar) */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 text-white font-bold flex justify-between items-center shrink-0">
          <div>
            BiteFinder AI Engine
            <span className="block text-[10px] font-normal text-orange-100">RAG Context Enabled</span>
          </div>
          {/* Close button ko thoda bada aur clear kiya mobile ke liye */}
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-white hover:text-gray-200 text-xl font-bold cursor-pointer p-1 border-none bg-transparent outline-none"
          >
            ✕
          </button>
        </div>
        
        {/* Messages Body (Scrolling Area) */}
        <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-gray-50 text-sm text-gray-800">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-xl shadow-sm ${msg.sender === 'user' ? 'bg-orange-500 text-white' : 'bg-white text-gray-800 border border-gray-100'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && <div className="text-left text-xs text-gray-400 animate-pulse">AI is thinking...</div>}
        </div>

        {/* Input Form Footer */}
        <form 
          onSubmit={handleSendMessage} 
          className="p-3 bg-white border-t border-gray-100 flex gap-2 shrink-0 pb-6 md:pb-3"
        >
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Pizza, Biryani..."
            className="flex-grow border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-orange-500"
          />
          <button 
            type="submit" 
            className="bg-orange-500 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-orange-600 cursor-pointer border-none outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}