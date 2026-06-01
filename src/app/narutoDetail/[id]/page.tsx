import { getNarutoCharacterDetailById } from "@/services/narutoApi";
/* import {Navbar} from "@/components/layout/Navbar"; */
import {NarutoCharacterDetail} from "@/components/cards/NarutoCharacterDetail";
import { iconicCharacters } from "../../aboutMe/data/iconicCharacters";

type Props = {
    params: {
        id: string;
    };
};

const NarutoDetailPage = async ({ params }: Props) => {
    const { id } = await params;
    const character = await getNarutoCharacterDetailById(Number(id));

    if (!character) {
        return <p>Personaje no encontrado</p>;
    }
    const characterMetadata = iconicCharacters.find(
        item => item.id === character.id
    )

    return (
        <main className="min-h-screen">
            {/* <Navbar /> */}
            <section className="px-10 py-10">
                <NarutoCharacterDetail {...character} gif={characterMetadata?.gif} />

            </section>
        </main>
    );
};

export default NarutoDetailPage;