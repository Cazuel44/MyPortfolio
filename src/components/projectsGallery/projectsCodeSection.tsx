import { Project } from "@/types/projects";
import Image from "next/image";

type CodeSection = NonNullable<Project["codeSections"]>[number];

type Props = {
    section: CodeSection;
};

export const ProjectsCodeSection = ({ section }: Props) => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="space-y-1">
                <h3 className="text-xl font-semibold text-orange-400">
                    {section.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed">
                    {section.description}
                </p>
            </div>

            {/* Images */}
            <div className="space-y-5">
                {section.images.map((img, index) => (
                    <div
                        key={img}
                        className="rounded-2xl overflow-hidden bg-black/10 border border-white/5"
                    >
                        <div className="w-full flex justify-center p-2 sm:p-4">
                            <Image
                                src={img}
                                alt={`${section.title}-${index}`}
                                width={900}
                                height={500}
                                className=" w-full  max-w-[700px]  sm:max-w-[600px]  md:max-w-[550px]  lg:max-w-[500px] h-auto  object-contain  rounded-xl " />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};