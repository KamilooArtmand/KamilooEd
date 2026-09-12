"use client";

import { useState } from "react";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // In a real app, route to search page: router.push(`/search?q=${query}`)
      alert(`در حال جستجو برای: ${query}`);
    }
  };

  return (
    <div className="relative flex items-center">
      <form 
        onSubmit={handleSearch}
        className={`transition-all duration-300 ease-in-out flex items-center overflow-hidden ${
          isOpen ? "w-64 opacity-100" : "w-0 opacity-0"
        }`}
      >
        <input 
          type="text" 
          placeholder="جستجو در دوره‌ها..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white/50 border border-gray-200/50 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-400 backdrop-blur-md"
        />
      </form>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100/50 transition-colors text-gray-600 mr-2 z-10 bg-transparent" 
        aria-label="جستجو"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
    </div>
  );
}
