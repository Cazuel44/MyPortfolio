"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
    images: string[];
    title: string;
};

export const ProjectGallery = ({ images, title }: Props) => {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div className="space-y-4">
            {/* Imagen principal */}
            <div className="w-full max-h-[500px] overflow-hidden rounded-xl bg-black/5 flex items-center justify-center">
                <Image
                    src={images[currentImage]}
                    alt={title}
                    width={1200}
                    height={675}
                    className="w-auto max-h-[500px] object-contain"
                />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                    <button
                        key={image}
                        onClick={() => setCurrentImage(index)}
                        className="shrink-0"
                    >
                        <Image
                            src={image}
                            alt={`${title}-${index}`}
                            width={120}
                            height={80}
                            className={`
                                w-[100px] h-[70px] object-cover rounded-lg border-2 transition
                                ${currentImage === index
                                    ? "border-orange-500"
                                    : "border-transparent"
                                }
                            `}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};