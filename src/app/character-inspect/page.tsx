"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CharacterSearchPage() {
  const router = useRouter();
  const [name, setName] = useState("");

  const go = (raw: string) => {
    const n = raw.trim();
    if (!n) return;
    // Encode to safely support spaces/special characters
    router.push(`/character-inspect/${encodeURIComponent(n)}`);
  };

  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl bg-[#262626] p-6 text-white shadow-xl">
        <h1 className="mb-4 text-2xl font-bold">Inspect a Character</h1>
        <p className="mb-6 text-sm text-gray-300">
          Type a character name and press Enter to view their gear and profile.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            go(name);
          }}
          className="flex gap-3"
        >
          <input
            type="text"
            placeholder="e.g. Arthas"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-xl border border-neutral-700 bg-[#1f1f1f] px-4 py-3 text-white outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white hover:bg-purple-500 focus:ring-2 focus:ring-purple-400"
          >
            Inspect
          </button>
        </form>
        <div className="mt-4 text-xs text-gray-400">
          Tip: You can also go directly to /character-inspect/[name]
        </div>
      </div>
    </div>
  );
}
