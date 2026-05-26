import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-screen-md mx-auto p-4 md:p-8 pt-24">
      <div className="mb-8 border-b border-gray-200 pb-5 text-center max-w-xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact System Nexus</h1>
        <p className="mt-2 text-sm text-gray-600">Submit parameters or query streams directly to the project cluster dashboard.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">User Identity Name</label>
              <input type="text" placeholder="Enter identification parameters..." className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Routing Email</label>
              <input type="email" placeholder="identity@domain.com" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-orange-500" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Message Payload</label>
            <textarea rows={4} placeholder="Describe execution logs or custom inquiries..." className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-orange-500 resize-none"></textarea>
          </div>
          <button type="button" className="w-full sm:w-auto rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500">Dispatch Signal</button>
        </form>
      </div>
    </div>
  );
}