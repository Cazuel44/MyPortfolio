"use client"

import { useState } from "react";
import { CharacterCardProps } from "@/types/naruto";
import Link from "next/link";

type Props = {
  characters: CharacterCardProps[];
};

const NarutoCarrousel = ({ characters }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getPrevIndex = () => (activeIndex - 1 + characters.length) % characters.length;
  const getNextIndex = () => (activeIndex + 1) % characters.length;

  const prev = characters[getPrevIndex()];
  const current = characters[activeIndex];
  const next = characters[getNextIndex()];

  return (
    <div className="relative w-full flex flex-col items-center gap-10 overflow-hidden rounded-[32px] border border-orange-500/10 bg-zinc-950/40 backdrop-blur-xl px-8 py-12">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-black/20 to-zinc-950/40 pointer-events-none" />

      {/* ORANGE AMBIENT LIGHT */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-center gap-10">

        {/* CARDS */}
        <div className="flex items-center justify-center gap-8 w-full">

          {/* Card Izquierda */}
          <div
            className="opacity-60 scale-90 hover:opacity-80 hover:scale-95 transition-all duration-500 cursor-pointer"
            onClick={() => setActiveIndex(getPrevIndex())}
          >
            <div className="bg-zinc-900/70 border border-orange-500/10 backdrop-blur-md rounded-2xl p-4 w-[250px]">

              {prev?.images?.[0] && (
                <div className="overflow-hidden rounded-xl border border-zinc-800 mb-3">
                  <img
                    src={prev.images[0]}
                    alt={prev.name}
                    className="w-full h-[200px] object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <h2 className="text-xl font-bold tracking-tight text-center text-zinc-200">
                {prev?.name}
              </h2>

            </div>
          </div>

          {/* Card Central */}
          <Link href={`/narutoDetail/${current?.id}`}>
            <div className="scale-110 transition-all duration-500 cursor-pointer hover:scale-115">

              <div className="bg-zinc-900/80 border border-orange-500/20 backdrop-blur-md rounded-2xl p-6 w-[300px] hover:border-orange-400/40 shadow-2xl shadow-orange-500/10 transition-all duration-500">

                {current?.images?.[0] && (
                  <div className="overflow-hidden rounded-xl border border-zinc-800 mb-4">
                    <img
                      src={current.images[0]}
                      alt={current.name}
                      className="w-full h-[250px] object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <h2 className="text-2xl font-bold tracking-tight text-center text-white">
                  {current?.name}
                </h2>

                {current?.clan && (
                  <p className="text-center mt-3 text-sm text-zinc-300 leading-6">
                    <span className="font-bold text-orange-400">
                      Clan:
                    </span>{" "}
                    {
                      Array.isArray(current.clan)
                        ? current.clan.join(", ")
                        : current.clan
                    }S
                  </p>
                )}

              </div>

            </div>
          </Link>

          {/* Card Derecha */}
          <div
            className="opacity-60 scale-90 hover:opacity-80 hover:scale-95 transition-all duration-500 cursor-pointer"
            onClick={() => setActiveIndex(getNextIndex())}
          >
            <div className="bg-zinc-900/70 border border-orange-500/10 backdrop-blur-md rounded-2xl p-4 w-[250px]">

              {next?.images?.[0] && (
                <div className="overflow-hidden rounded-xl border border-zinc-800 mb-3">
                  <img
                    src={next.images[0]}
                    alt={next.name}
                    className="w-full h-[200px] object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <h2 className="text-xl font-bold tracking-tight text-center text-zinc-200">
                {next?.name}
              </h2>

            </div>
          </div>

        </div>

        {/* FLECHAS */}
        <div className="flex gap-6">

          <button
            onClick={() => setActiveIndex(getPrevIndex())}
            className="bg-zinc-900/70 border border-orange-500/20 backdrop-blur-md text-orange-300 font-bold px-6 py-3 rounded-full hover:bg-orange-500/10 hover:border-orange-400/40 hover:text-orange-200 transition-all duration-300"
          >
            ◀
          </button>

          <button
            onClick={() => setActiveIndex(getNextIndex())}
            className="bg-zinc-900/70 border border-orange-500/20 backdrop-blur-md text-orange-300 font-bold px-6 py-3 rounded-full hover:bg-orange-500/10 hover:border-orange-400/40 hover:text-orange-200 transition-all duration-300"
          >
            ▶
          </button>

        </div>

        {/* INDICADORES */}
        <div className="flex gap-3">

          {characters.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                ? "bg-orange-400 scale-125 shadow-lg shadow-orange-500/40"
                : "bg-zinc-700 hover:bg-zinc-500"
                }`}
            />
          ))}

        </div>

      </div>

    </div>
  );
};

export default NarutoCarrousel;