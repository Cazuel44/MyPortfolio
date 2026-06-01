import Link from "next/link";
import { MusicPlayer } from "@/components/musicPlayer/MusicPlayer";

export const Navbar = () => {
    return (
        <nav className="w-full px-8 py-5 border-b border-orange-500/10 backdrop-blur-md bg-black/40 sticky top-0 z-50">

            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <h1 className="text-2xl font-bold tracking-tight">
                    <span className="text-white">
                        My
                    </span>{" "}
                    <span className="text-orange-400">
                        Portfolio
                    </span>
                </h1>

                <div className="flex items-center gap-8">

                    <ul className="flex gap-8 text-sm text-zinc-300">

                        <li>
                            <Link
                                href="/"
                                className="cursor-pointer hover:text-orange-400 transition-all duration-300"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/aboutMe"
                                className="cursor-pointer hover:text-orange-400 transition-all duration-300"
                            >
                                About me
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/skills"
                                className="cursor-pointer hover:text-orange-400 transition-all duration-300"
                            >
                                Skills
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                className="cursor-pointer hover:text-orange-400 transition-all duration-300"
                            >
                                Contact
                            </Link>
                        </li>

                    </ul>

                    <MusicPlayer />

                </div>

            </div>

        </nav>
    );
};