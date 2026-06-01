import Link from "next/link";
import { CharacterCardProps } from "@/types/naruto";

export const CharacterCard = ({
    id,
    name,
    images,
    clan,
    natureType,
    family,
}: CharacterCardProps) => {

    return (
        <Link href={`/narutoDetail/${id}`}>
            <div className="bg-zinc-900/50 border border-orange-500/10 backdrop-blur-md rounded-2xl p-6 w-[350px] hover:border-orange-400/30 hover:-translate-y-1 hover:bg-zinc-900/70 transition-all duration-300 cursor-pointer">

                {images?.[0] && (
                    <div className="mb-5 overflow-hidden rounded-xl border border-zinc-800">
                        <img
                            src={images[0]}
                            alt={name}
                            className="w-full h-[250px] object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                )}

                <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
                    {name}
                </h2>

                {clan && (
                    <p className="mb-2 text-zinc-300 leading-7">
                        <span className="font-bold text-orange-400">
                            Clan:
                        </span>{" "}
                        {clan}
                    </p>
                )}

                {family?.godfather && (
                    <p className="mb-4 text-zinc-300 leading-7">
                        <span className="font-bold text-orange-400">
                            Godfather:
                        </span>{" "}
                        {family.godfather}
                    </p>
                )}

                {natureType && natureType.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-5">

                        {natureType.map((nature) => (
                            <span
                                key={nature}
                                className="bg-orange-500/10 border border-orange-400/20 text-orange-300 px-3 py-1 rounded-full text-sm backdrop-blur-sm"
                            >
                                {nature}
                            </span>
                        ))}

                    </div>
                )}

            </div>
        </Link>

    );
};