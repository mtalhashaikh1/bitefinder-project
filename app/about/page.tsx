import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-screen-md mx-auto p-4 md:p-8 pt-24">
      {/* Structural Header */}
      <div className="mb-8 border-b border-gray-200 pb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Project Specification Overview
        </h1>
        <p className="mt-2 text-sm text-gray-500 font-mono">
          BiteFinder AI • Software Engineering & Process Optimization Framework
        </p>
      </div>

      {/* Information Cards Array */}
      <div className="space-y-6 text-sm text-gray-600">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-base font-bold text-orange-600 mb-2">🎯 Project Mission</h3>
          <p className="leading-relaxed">
            To architect an intelligent, highly localized restaurant indexing utility utilizing advanced vector embedding coordinates and semantic retrieval parameters to optimize culinary discovery.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-base font-bold text-orange-600 mb-2">🛠️ Technical Matrix Compliancy</h3>
          <ul className="list-disc pl-5 space-y-2 mt-2 font-mono text-xs">
            <li>Next.js 14+ (Dynamic Server Routing Architecture)</li>
            <li>TypeScript (Compilation Layout Structural Safety)</li>
            <li>Tailwind CSS Tokens (Responsive Interface Fluidity)</li>
            <li>Spec-Kit Plus Workflow Protocol Systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
}