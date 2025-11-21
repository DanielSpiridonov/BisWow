"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Menu as MenuIcon } from "lucide-react";

interface BuildNavDropdownProps {
  classSpecs: Record<string, string[]>;
  classLabels: Record<string, string>;
  specLabels: Record<string, string>;
  activeClass: string;
  activeSpec: string;
}

export default function BuildNavDropdown({
  classSpecs,
  classLabels,
  specLabels,
  activeClass,
  activeSpec,
}: BuildNavDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Navigate builds"
          className="inline-flex items-center gap-2 rounded-lg bg-[#262626] border border-[#3a3a3a] px-3 py-2 text-sm font-medium text-white shadow-md hover:bg-[#333] transition"
        >
          <MenuIcon className="size-4" />
          <span className="truncate max-w-[160px]">
            {`${classLabels[activeClass] || activeClass} – ${
              specLabels[activeSpec] || activeSpec
            }`}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={8}
        className="bg-[#262626] border border-[#3a3a3a] text-white max-h-[60vh] w-[280px]"
      >
        <DropdownMenuLabel>Navigate Builds</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.entries(classSpecs).map(([cls, specs]) => (
          <DropdownMenuSub key={cls}>
            <DropdownMenuSubTrigger className="text-white focus:bg-purple-700 focus:text-white">
              <span className="truncate">{classLabels[cls] || cls}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="bg-[#262626] border border-[#3a3a3a] text-white">
              {specs.map((spec) => (
                <DropdownMenuItem
                  key={spec}
                  asChild
                  className="focus:bg-purple-700 focus:text-white"
                  data-active={cls === activeClass && spec === activeSpec}
                >
                  <Link
                    href={`/${cls}/${spec}`}
                    className="flex w-full items-center justify-between"
                  >
                    <span>{specLabels[spec] || spec}</span>
                    {cls === activeClass && spec === activeSpec && (
                      <span className="ml-2 text-xs text-amber-300">
                        Current
                      </span>
                    )}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
