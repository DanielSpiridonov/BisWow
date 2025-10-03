"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { specOverview } from "@/lib/types";
import Link from "next/link";

export default function Home() {
  const [selected, setSelected] = useState<{ label: string; image?: any }>({
    label: "Choose a side",
    image: undefined,
  });
  const [characterClass, setCharacterClass] = useState("");
  const [subSelected, setSubSelected] = useState<string>("Choose an option");
  const [specs, setSpecs] = useState<specOverview[]>([]);

  const SpecsGrid = () => (
    <div className="flex flex-col items-center gap-8">
      {/* Back button */}
      <button
        onClick={() => {}}
        className="px-4 py-2 bg-purple-700 text-white rounded-xl shadow-lg hover:bg-purple-600 transition"
      >
        ← Back
      </button>

      {/* Specs grid */}
      <div className="flex flex-row gap-6 flex-wrap justify-center">
        {specs.length > 0 ? (
          specs.map((spec) => (
            <div
              key={spec.buildSpec}
              className="bg-[#262626] drop-shadow-2xl w-60 h-60 rounded-2xl flex flex-col items-center justify-center text-white text-lg p-4"
            >
              <img
                src={spec.imageURL}
                alt={""}
                width={64}
                height={64}
                className="mb-2"
              />
              <div>{spec.displayName}</div>
              <a
                href={spec.buildURL}
                className="text-purple-400 text-sm mt-2 underline"
              >
                View Build
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-400">
            No specs available for {characterClass}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="font-sans items-center justify-items-center min-h-screen gap-16 ">
      {/* <header className="pb-6 bg-[#262626] lg:pb-0 drop-shadow-2xl">
        <div className="px-4 mx-auto w-screen sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <img
              className="w-auto h-20 lg:h-22 mt-4"
              src={sitelogo}
              alt="Logo"
            />
          </nav>
        </div>
      </header> */}

      {/* Show main selection screen if no class is chosen */}
      {!characterClass && (
        <main className="flex flex-col items-center sm:items-center mt-34 w-2xl">
          <img
            className="w-auto h-20 lg:h-40 mt-4"
            src="/images/logolight.png"
            alt="Logo"
          />
          <nav className="flex items-center justify-start gap-3 bg-[#262626] rounded-2xl w-3/3 border-purple-700 border-1 p-3 text-white">
            <div className="flex items-center justify-center bg-[#242424] rounded-2xl w-14 h-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              3.3.5
            </div>
            <img
              className="w-auto h-20 lg:h-5"
              src="/images/arrow-right.png"
              alt="Arrow"
            />

            {/* Faction dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center cursor-pointer gap-2">
                {selected.image && (
                  <img
                    className="w-auto h-8"
                    src={selected.image}
                    alt={selected.label}
                  />
                )}
                {selected.label}
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-[#262626] border-purple-700 border-1 cursor-pointer">
                <DropdownMenuItem
                  className="hover:bg-[#d0cccc52] text-white cursor-pointer"
                  onSelect={() =>
                    setSelected({ label: "Choose a side", image: undefined })
                  }
                >
                  Choose a side
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-[#d0cccc52] text-white flex items-center gap-2"
                  onSelect={() =>
                    setSelected({
                      label: "Alliance",
                      image: "/images/alliance.png",
                    })
                  }
                >
                  <img
                    className="w-auto h-8 cursor-pointer"
                    src="/images/alliance.png"
                    alt="Alliance"
                  />
                  Alliance
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-[#d0cccc52] text-white flex items-center gap-2"
                  onSelect={() =>
                    setSelected({ label: "Horde", image: "/images/horde.png" })
                  }
                >
                  <img
                    className="w-auto h-8 cursor-pointer"
                    src="/images/horde.png"
                    alt="Horde"
                  />
                  Horde
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Race/Class dropdowns */}
            {(selected.label === "Alliance" || selected.label === "Horde") && (
              <DropdownMenu>
                <img
                  className="w-auto h-20 lg:h-5"
                  src="/images/arrow-right.png"
                  alt="Arrow"
                />
                <DropdownMenuTrigger className="px-2 rounded-md bg-[#262626] flex items-center gap-2">
                  {subSelected}
                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-[#262626] border-purple-700 border-1">
                  {selected.label === "Alliance" && (
                    <>
                      <Link href={"/mage"}>
                        <DropdownMenuItem
                          className="hover:bg-[#d0cccc52] text-white cursor-pointer"
                          onSelect={() => {}}
                        >
                          Mage
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem
                        className="hover:bg-[#d0cccc52] text-white cursor-pointer"
                        onSelect={() => {
                          setSubSelected("Night Elf");
                          setCharacterClass("Night-Elf");
                        }}
                      >
                        Night Elf
                      </DropdownMenuItem>
                    </>
                  )}

                  {selected.label === "Horde" && (
                    <>
                      <DropdownMenuItem
                        className="hover:bg-[#d0cccc52] text-white cursor-pointer"
                        onSelect={() => {
                          setSubSelected("Orc");
                          setCharacterClass("Orc");
                        }}
                      >
                        Orc
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="hover:bg-[#d0cccc52] text-white cursor-pointer"
                        onSelect={() => {
                          setSubSelected("Tauren");
                          setCharacterClass("Tauren");
                        }}
                      >
                        Tauren
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>
        </main>
      )}

      {/* Show specs screen if class is chosen */}
      {characterClass && (
        <div className="text-white flex flex-col items-center mt-20">
          <SpecsGrid />
        </div>
      )}
    </div>
  );
}
