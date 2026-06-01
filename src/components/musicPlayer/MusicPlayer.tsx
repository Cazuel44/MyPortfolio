"use client";

import { useRef, useState } from "react";

export const MusicPlayer = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);

    const handleMusic = async () => {
        if (!audioRef.current) return;

        try {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                await audioRef.current.play();
                setIsPlaying(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);

        setVolume(newVolume);

        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div className="flex items-center gap-2">

            <button
                onClick={handleMusic}
                className="
                flex items-center justify-center
                w-10 h-10
                rounded-full
                border border-orange-500/30
                bg-black/50
                text-orange-400
                backdrop-blur-sm
                hover:bg-orange-500/10
                hover:border-orange-400
                hover:shadow-[0_0_12px_rgba(251,146,60,0.4)]
                transition-all duration-300
                cursor-pointer
            "
            >
                {isPlaying ? "⏸️" : "▶️"}
            </button>

            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolume}
                className="w-16 h-1 accent-orange-500 cursor-pointer"
            />

            <audio ref={audioRef} loop>
                <source src="/audio/naruto-theme.mp3" type="audio/mpeg" />
            </audio>

        </div>
    );
};