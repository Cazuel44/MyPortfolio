
import { CharacterDetailCardProps, NarutoCharacterDetailProps } from "@/types/naruto";

export const NarutoCharacterDetail = ({
    name,
    images,
    personal,
    family,
    jutsu,
    natureType,
    rank,
    tools,
    debut,
    voiceActors,
    gif,
}: NarutoCharacterDetailProps) => {


    return (
        <div className="w-full space-y-8">

            {/* HERO: Imagen + Nombre */}
            <section className="flex flex-col md:flex-row gap-8 bg-zinc-900/50 border border-orange-500/10 backdrop-blur-md rounded-[32px] p-8 shadow-2xl shadow-orange-500/5">

                {images?.[0] && (
                    <div className="w-full md:w-1/3">
                        <div className="overflow-hidden rounded-2xl border border-zinc-800">
                            <img
                                src={images[0]}
                                alt={name}
                                className="w-full h-[400px] object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                )}

                <div className="flex flex-col md:flex-row items-center gap-12 w-full md:w-2/3">

                    {/* INFORMACION */}
                    <div className="w-full max-w-[520px]">

                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                            {name}
                        </h1>

                        {personal?.clan && (
                            <p className="text-zinc-300 leading-7">
                                <span className="font-bold text-orange-400">
                                    Clan:
                                </span>{" "}
                                {Array.isArray(personal.clan)
                                    ? personal.clan.join(", ")
                                    : personal.clan}
                            </p>
                        )}

                        {personal?.affiliation && (
                            <p className="text-zinc-300 leading-7">
                                <span className="font-bold text-orange-400">
                                    Affiliation:
                                </span>{" "}
                                {Array.isArray(personal.affiliation)
                                    ? personal.affiliation.join(", ")
                                    : personal.affiliation}
                            </p>
                        )}

                        {rank?.ninjaRank && (
                            <p className="text-zinc-300 leading-7">
                                <span className="font-bold text-orange-400">
                                    Rank:
                                </span>{" "}
                                {Object.values(rank.ninjaRank).join(", ")}
                            </p>
                        )}

                    </div>

                    {/* GIF */}
                    <div>
                        {gif && (
                            <div className="w-full md:max-w-[300px] flex-shrink-0">

                                <div className="mb-3">
                                    <p className="text-orange-400 text-sm font-semibold tracking-wide">
                                        Momento iconico
                                    </p>

                                    {/* <h3 className="text-white text-xl font-bold">
                                        jutsu: Shinra Tensei, destruccion de la aldea de la hoja
                                    </h3> */}
                                </div>

                                <div className="overflow-hidden rounded-2xl border border-orange-500/10 shadow-xl shadow-orange-500/5">
                                    <img
                                        src={gif}
                                        alt={`${name} iconic moment`}
                                        className="w-full h-[200px] object-cover object-center hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                            </div>
                        )}
                    </div>

                </div>

            </section>

            {/* INFO PERSONAL + DEBUT */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="bg-zinc-900/40 border border-orange-500/10 backdrop-blur-md rounded-2xl p-8 space-y-4">

                    <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
                        Personal Info
                    </h2>

                    {personal?.birthdate && (
                        <p className="text-zinc-300">
                            <span className="font-bold text-orange-400">Birthdate:</span> {personal.birthdate}
                        </p>
                    )}

                    {personal?.sex && (
                        <p className="text-zinc-300">
                            <span className="font-bold text-orange-400">Sex:</span> {personal.sex}
                        </p>
                    )}

                    {personal?.species && (
                        <p className="text-zinc-300">
                            <span className="font-bold text-orange-400">Species:</span> {personal.species}
                        </p>
                    )}

                    {personal?.age && (
                        <div>
                            <p className="font-bold text-orange-400 mb-2">Age:</p>
                            {Object.entries(personal.age).map(([era, age]) => (
                                <p key={era} className="ml-4 text-sm text-zinc-300 leading-7">
                                    {era}: {age}
                                </p>
                            ))}
                        </div>
                    )}

                    {personal?.height && (
                        <div>
                            <p className="font-bold text-orange-400 mb-2">Height:</p>
                            {Object.entries(personal.height).map(([era, height]) => (
                                <p key={era} className="ml-4 text-sm text-zinc-300 leading-7">
                                    {era}: {height}
                                </p>
                            ))}
                        </div>
                    )}

                </div>

                <div className="bg-zinc-900/40 border border-orange-500/10 backdrop-blur-md rounded-2xl p-8 space-y-4">

                    <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
                        Debut
                    </h2>

                    {debut?.anime && (
                        <p className="text-zinc-300">
                            <span className="font-bold text-orange-400">Anime:</span> {debut.anime}
                        </p>
                    )}

                    {debut?.manga && (
                        <p className="text-zinc-300">
                            <span className="font-bold text-orange-400">Manga:</span> {debut.manga}
                        </p>
                    )}

                    {debut?.movie && (
                        <p className="text-zinc-300">
                            <span className="font-bold text-orange-400">Movie:</span> {debut.movie}
                        </p>
                    )}

                    {debut?.game && (
                        <p className="text-zinc-300">
                            <span className="font-bold text-orange-400">Game:</span> {debut.game}
                        </p>
                    )}

                    {debut?.ova && (
                        <p className="text-zinc-300">
                            <span className="font-bold text-orange-400">OVA:</span> {debut.ova}
                        </p>
                    )}

                </div>

            </section>

            {/* JUTSU */}
            {jutsu && jutsu.length > 0 && (
                <section className="bg-zinc-900/40 border border-orange-500/10 backdrop-blur-md rounded-2xl p-8">

                    <h2 className="text-2xl font-bold tracking-tight text-white mb-6">
                        Jutsu
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {jutsu.map((j) => (
                            <span
                                key={j}
                                className="bg-orange-500/10 border border-orange-400/20 text-orange-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm"
                            >
                                {j}
                            </span>
                        ))}
                    </div>

                </section>
            )}

            {/* NATURE TYPE + TOOLS */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {natureType && natureType.length > 0 && (
                    <div className="bg-zinc-900/40 border border-orange-500/10 backdrop-blur-md rounded-2xl p-8">

                        <h2 className="text-2xl font-bold tracking-tight text-white mb-6">
                            Nature Type
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {natureType.map((nature) => (
                                <span
                                    key={nature}
                                    className="bg-orange-500/10 border border-orange-400/20 text-orange-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm"
                                >
                                    {nature}
                                </span>
                            ))}
                        </div>

                    </div>
                )}

                {tools && tools.length > 0 && (
                    <div className="bg-zinc-900/40 border border-orange-500/10 backdrop-blur-md rounded-2xl p-8">

                        <h2 className="text-2xl font-bold tracking-tight text-white mb-6">
                            Tools
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="bg-orange-500/10 border border-orange-400/20 text-orange-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>

                    </div>
                )}

            </section>

            {/* FAMILIA + VOICE ACTORS */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {family && Object.keys(family).length > 0 && (
                    <div className="bg-zinc-900/40 border border-orange-500/10 backdrop-blur-md rounded-2xl p-8 space-y-3">

                        <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
                            Family
                        </h2>

                        {Object.entries(family).map(([relation, member]) => (
                            <p key={relation} className="text-zinc-300 leading-7">
                                <span className="font-bold capitalize text-orange-400">
                                    {relation}:
                                </span>{" "}
                                {member}
                            </p>
                        ))}

                    </div>
                )}

                {voiceActors && (
                    <div className="bg-zinc-900/40 border border-orange-500/10 backdrop-blur-md rounded-2xl p-8 space-y-4">

                        <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
                            Voice Actors
                        </h2>

                        {voiceActors.japanese && (
                            <div>
                                <p className="font-bold text-orange-400 mb-2">
                                    Japanese:
                                </p>

                                {Array.isArray(voiceActors.japanese)
                                    ? voiceActors.japanese.map((actor) => (
                                        <p key={actor} className="ml-4 text-sm text-zinc-300 leading-7">
                                            {actor}
                                        </p>
                                    ))
                                    : <p className="ml-4 text-sm text-zinc-300 leading-7">{voiceActors.japanese}</p>
                                }
                            </div>
                        )}

                        {voiceActors.english && (
                            <div>
                                <p className="font-bold text-orange-400 mb-2">
                                    English:
                                </p>

                                {Array.isArray(voiceActors.english)
                                    ? voiceActors.english.map((actor) => (
                                        <p key={actor} className="ml-4 text-sm text-zinc-300 leading-7">
                                            {actor}
                                        </p>
                                    ))
                                    : <p className="ml-4 text-sm text-zinc-300 leading-7">{voiceActors.english}</p>
                                }
                            </div>
                        )}

                    </div>
                )}

            </section>

        </div>
    );
};

