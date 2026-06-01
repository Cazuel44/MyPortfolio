/* import {Navbar} from "../../components/layout/Navbar"; */
import { CharacterCard } from "@/components/cards/NarutoCard";
import { getNarutoCharacters, getNarutoCharacterById } from "@/services/narutoApi";
import { iconicCharacters } from "./data/iconicCharacters";
import NarutoCarrousel from "@/components/narutoCarrousel/NarutoCarrousel";
import { CharacterCardProps } from "@/types/naruto";
import { ContentCard } from "@/components/cards/ContentCard";
import { Section } from "@/components/section/Section";

const AboutMePage = async () => {
    /* const characters = await getNarutoCharacters(); */ // utility/debug/helper
    /* const character = await getNarutoCharacterById(1344); */

    const characters = await Promise.all(
        iconicCharacters.map((character) =>
            getNarutoCharacterById(character.id)
        )
    );
    const validCharacters = characters.filter((c): c is CharacterCardProps => c !== null);

    return (
        <main className="min-h-screen">

            {/* ABOUT SECTION */}
            <Section title="Sobre mí">

                <ContentCard>

                    <p className="text-zinc-300 text-lg leading-8">
                        ¡Hola! Soy Rodrigo, desarrollador web en constante aprendizaje y apasionado por la tecnología.
                        Mi formación comenzó con un programa intensivo Full Stack orientado al desarrollo de soluciones E-commerce,
                        donde trabajé con tecnologías como HTML, CSS, JavaScript, React, Node.js, Express y MongoDB.
                        Durante este proceso también tuve la oportunidad de desarrollar aplicaciones web y explorar el desarrollo móvil con React Native.
                        Actualmente estoy enfocado en tecnologías modernas como Next.js y TypeScript, profundizando en conceptos de arquitectura,
                        escalabilidad, buenas prácticas y desarrollo de interfaces modernas.
                    </p>

                </ContentCard>

            </Section>

            {/* INTERESTS SECTION */}
            <Section title="Intereses y Pasatiempos">

                <ContentCard className="w-full">

                    <div className="flex flex-col lg:flex-row gap-8 items-center">

                        <div className="flex-1">

                            <p className="text-zinc-300 text-lg leading-8">
                                Fuera del desarrollo web, disfruto mantenerme activo haciendo ejercicio
                                mientras escucho música, aprender cosas nuevas mediante proyectos
                                personales y compartir tiempo con mis amigos. También me gusta ver
                                contenido de humor como Hablando Huevadas y series animadas como Naruto,
                                dos de los contenidos que más he disfrutado a lo largo de los años. Más abajo puedes encontrar más detalle sobre mis intereses.
                            </p>

                            <ul className="flex flex-wrap gap-4 mt-6 text-zinc-300">
                                <li>🏋️ Entrenamiento físico</li>
                                <li>🍜 Naruto y cultura anime</li>
                                <li>💻 Proyectos personales</li>
                                <li>😂 Hablando Huevadas</li>
                            </ul>
                        </div>

                        <div className="flex-1 max-w-sm">
                            <img
                                src="/images/narutogamer.jpg"
                                alt="Naruto Gamer"
                                className="w-full rounded-2xl object-cover"
                            />
                        </div>

                    </div>

                </ContentCard>

            </Section>


            {/* SERIES SECTION */}
            <Section title="Serie favorita">

                <ContentCard>

                    <div className="rounded-2xl overflow-hidden mb-10 border border-orange-500/10">

                        <img
                            src="/images/narutoWallpaper.jpg"
                            alt="Naruto Wallpaper"
                            className="w-full h-[400px] object-cover"
                        />

                    </div>

                    <p className="text-zinc-300 text-lg leading-8">
                        Una de mis series favoritas es Naruto. Más allá de la acción y los combates,
                        es una historia que transmite valores como la perseverancia, la disciplina, la superación personal y la importancia del compañerismo.
                        Muchas de las enseñanzas presentes en la serie reflejan principios que intento aplicar tanto en mi vida personal como en mi desarrollo profesional.
                        Por esa razón, gran parte de la identidad visual de este portfolio está inspirada en el universo de Naruto, como una forma de rendir homenaje a una obra que me ha acompañado durante años.
                    </p>

                </ContentCard>

            </Section>


            <Section title="Personajes Icónicos">

                <NarutoCarrousel characters={validCharacters} />

            </Section>

            <Section title="Contenido para el desestrés">

                <div className="flex flex-col lg:flex-row gap-6">

                    <ContentCard className="flex-1 flex items-center justify-center">

                        <p className="text-zinc-300 text-lg leading-8">
                            Uno de los contenidos que disfruto mucho son los videos de
                            Hablando Huevadas. Me hacen reír bastante y son una buena forma
                            de desconectar después de estudiar, programar o entrenar.

                            Aunque mi portfolio está enfocado en el desarrollo web,
                            también quise compartir algunas cosas que forman parte de mis
                            intereses personales y que disfruto en mi tiempo libre.
                        </p>

                    </ContentCard>

                    <ContentCard className="flex-1">

                        {/* Video */}
                        <iframe
                            className="w-full h-[315px] rounded-lg"
                            src="https://www.youtube.com/embed/BEyWHGwQjvc"
                            title="Hablando Huevadas"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />

                        <a href="https://www.youtube.com/@HablandoHuevadasOficial/featured"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-orange-400 hover:text-orange-300 transition-colors"
                        >
                            Ver más en YouTube
                        </a>

                    </ContentCard>

                </div>

            </Section>

            <Section title="Adicionalmente...">

                <ContentCard>
                    <p className="text-zinc-300 text-lg leading-8">
                        Además de los proyectos que forman parte de este portfolio, he participado en distintas iniciativas personales y colaborativas que me han permitido trabajar con tecnologías tanto de frontend como de backend.
                        Durante estas experiencias tuve la oportunidad de desarrollar funcionalidades utilizando Node.js,
                        Express y bases de datos relacionales, participando en la creación de operaciones CRUD,
                        consultas a bases de datos y tareas relacionadas con la estructura de aplicaciones web.
                        No todos estos proyectos llegaron a una versión pública o fueron publicados en mis repositorios,


                    </p>

                    <p className="text-zinc-300 text-lg leading-8 mt-6">
                        pero cada uno de ellos representó una oportunidad para enfrentar problemas reales,
                        comprender nuevas herramientas y fortalecer mi capacidad de aprendizaje.
                        Actualmente utilizo herramientas de inteligencia artificial como apoyo para investigar tecnologías,
                        analizar implementaciones, comprender documentación y validar soluciones.
                        Mi enfoque es utilizar estas herramientas de forma responsable,
                        procurando entender los conceptos detrás de cada implementación y manteniendo buenas prácticas de desarrollo.
                        Gracias a ello puedo acelerar mi proceso de aprendizaje,
                        explorar nuevas tecnologías y desarrollar soluciones más completas mientras continúo fortaleciendo mis conocimientos técnicos.
                    </p>
                </ContentCard>

            </Section>

        </main>
    );
};

export default AboutMePage;