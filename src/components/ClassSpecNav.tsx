"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Props = {
  classSpecs: Record<string, string[]>;
  classLabels: Record<string, string>;
  specLabels: Record<string, string>;
  activeClass?: string;
  activeSpec?: string;
};

export default function ClassSpecNav({
  classSpecs,
  classLabels,
  specLabels,
  activeClass,
  activeSpec,
}: Props) {
  const initialOpen = useMemo(
    () => new Set(activeClass ? [activeClass] : []),
    [activeClass]
  );
  const [open, setOpen] = useState<Set<string>>(initialOpen);

  useEffect(() => {
    // Keep active class open when route changes
    if (activeClass && !open.has(activeClass)) {
      setOpen(new Set([activeClass]));
    }
  }, [activeClass]);

  const toggle = (klass: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(klass)) next.delete(klass);
      else next.add(klass);
      return next;
    });
  };

  const toTitle = (text: string) =>
    text
      .split("-")
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
      .join(" ");

  return (
    <>
      <div className="mb-3 text-sm uppercase tracking-wide text-zinc-300/80">
        Navigate Builds
      </div>
      <nav aria-label="Class and spec navigation">
        {Object.entries(classSpecs).map(([klass, specs]) => {
          const isOpen = open.has(klass);
          const classLabel = classLabels[klass] ?? toTitle(klass);
          return (
            <div key={klass} className="mb-4">
              <button
                type="button"
                onClick={() => toggle(klass)}
                aria-expanded={isOpen}
                className={
                  `w-full text-left text-sm font-semibold  rounded px-1 py-1 transition-colors inline-flex items-center gap-1 h-100%` +
                  (isOpen
                    ? "text-white bg-zinc-700/50"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-700/40")
                }
              >
                <span className="inline-block w-3 text-center">
                  {isOpen ? "▾" : "▸"}
                </span>
                <span>{classLabel}</span>
              </button>
              {isOpen && (
                <ul className="space-y-1 mt-2 pl-3">
                  {specs.map((spec) => {
                    const href = `/${klass}/${spec}`;
                    const isActive =
                      activeClass === klass && activeSpec === spec;
                    return (
                      <li key={`${klass}-${spec}`}>
                        <Link
                          href={href}
                          aria-current={isActive ? "page" : undefined}
                          className={
                            `block rounded-md px-2 py-1 text-sm transition-colors ` +
                            (isActive
                              ? "bg-zinc-700/60 text-amber-300 font-semibold "
                              : "text-zinc-200 hover:bg-zinc-700/40 hover:text-white")
                          }
                        >
                          {specLabels[spec] ?? toTitle(spec)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
