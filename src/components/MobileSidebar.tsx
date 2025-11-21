"use client";
import { useState, useEffect, useCallback } from "react";
import { X, Menu } from "lucide-react";
import ClassSpecNav from "@/components/ClassSpecNav";

interface MobileSidebarProps {
  classSpecs: Record<string, string[]>;
  classLabels: Record<string, string>;
  specLabels: Record<string, string>;
  activeClass: string;
  activeSpec: string;
  breakpoint?: number; // default 600
}

export default function MobileSidebar({
  classSpecs,
  classLabels,
  specLabels,
  activeClass,
  activeSpec,
  breakpoint = 600,
}: MobileSidebarProps) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const evaluateWidth = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= breakpoint);
    }
  }, [breakpoint]);

  useEffect(() => {
    evaluateWidth();
    window.addEventListener("resize", evaluateWidth);
    return () => window.removeEventListener("resize", evaluateWidth);
  }, [evaluateWidth]);

  // Close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!isMobile) {
    return null; // Desktop handled by normal sidebar
  }

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="fixed left-3 top-3 z-40 inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2 text-sm font-medium text-white shadow-md ring-1 ring-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
        <span>{open ? "Close" : "Menu"}</span>
      </button>
      {open && (
        <div className="fixed inset-0 z-30">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            className="absolute left-0 top-0 h-full w-[80%] max-w-[340px] overflow-y-auto rounded-r-2xl bg-[#262626] px-5 py-5 shadow-xl ring-1 ring-zinc-700 animate-slideIn"
            role="dialog"
            aria-label="Class & Spec navigation"
          >
            <ClassSpecNav
              classSpecs={classSpecs}
              classLabels={classLabels}
              specLabels={specLabels}
              activeClass={activeClass}
              activeSpec={activeSpec}
            />
          </div>
        </div>
      )}
    </>
  );
}

// Tailwind animation utility (if not globally defined you can add via class) but we'll rely on arbitrary keyframes if configured.
