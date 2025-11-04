"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    WH?: any;
    $WowheadPower?: any;
    $dbTooltips?: { refreshLinks?: () => void };
    $CoTTooltip?: { refreshLinks?: () => void };
  }
}

/**
 * Re-initializes external tooltip libraries (Wowhead/Cavern of Time/WowClassicDB)
 * after client-side route changes in the Next.js App Router.
 */
export default function TooltipRefresher() {
  const pathname = usePathname();

  useEffect(() => {
    const refresh = () => {
      const w = window as Window & typeof globalThis & { [k: string]: any };
      // Wowhead/Cavern of Time (power.js exposes WH and sometimes $WowheadPower)
      try {
        w.WH?.Tooltip?.refreshLinks?.();
      } catch {}
      try {
        w.WH?.updateLinks?.();
      } catch {}
      try {
        w.$WowheadPower?.refreshLinks?.();
      } catch {}
      // WowClassicDB
      try {
        w.$dbTooltips?.refreshLinks?.();
      } catch {}
      // Cavern of Time
      try {
        w.$CoTTooltip?.refreshLinks?.();
      } catch {}
    };

    // Run after the new route’s DOM has rendered
    const id = setTimeout(() => {
      // Run twice to catch any late-rendered HTML from streaming/SSR
      refresh();
      requestAnimationFrame(refresh);
    }, 0);
    return () => clearTimeout(id);
  }, [pathname]);

  return null;
}
