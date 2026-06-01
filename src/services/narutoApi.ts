/* import { writeFile } from "fs/promises"; */
import { CharacterCardProps, CharacterDetailCardProps } from "@/types/naruto";

// Fetch para traer todos los personajes
export const getNarutoCharacters = async (/* page:number = 10 */) => {
    try {
        const response = await fetch(
            `https://dattebayo-api.onrender.com/characters`
        );

        if (!response.ok) {
            throw new Error("Error al traer los personajes");
        }

        const data = await response.json();

        //codigo para crear un archivo json con toda la data de la api
        /* await writeFile(
            "narutoCharacters.json",
            JSON.stringify(data, null, 2)
        ); */

        /* console.log(data); */
        /* console.log(JSON.stringify(data, null, 2)); */

        return data;

    } catch (error) {
        console.error(error);
        return [];
    }
};

// Fetch para traer personajes por id
export const getNarutoCharacterById = async (id: number): Promise<CharacterCardProps | null> => {
    try {
        const response = await fetch(
            `https://dattebayo-api.onrender.com/characters/${id}`
        );

        if (!response.ok) {
            throw new Error("Error al traer el personaje");
        }

        const data = await response.json();
        /* console.log(data); */

        const character = {
            id: data.id,
            name: data.name,

            images: data.images,

            clan: data.personal?.clan,

            /* affiliation: data.personal?.affiliation, */

            natureType: data.natureType,

            family: {
                father: data.family?.father,
                mother: data.family?.mother,
                wife: data.family?.wife,
                godfather: data.family?.godfather,
            },
        };

        /* console.log(character); */

        return character;

    } catch (error) {
        console.error(error);
        return null;
    }
};

// Fetch para traer toda la data del personaje por id y utiliarlo en el detalle de cada personaje
export const getNarutoCharacterDetailById = async (id: number): Promise<CharacterCardProps | null> => {
    try {
        const response = await fetch(
            `https://dattebayo-api.onrender.com/characters/${id}`
        );

        if (!response.ok) {
            throw new Error("Error al traer el detalle del personaje");
        }

        const data = await response.json();
        /* console.log(data); */

        const character: CharacterDetailCardProps = {
            id: data.id,
            name: data.name,
            images: data.images,
            debut: data.debut,
            personal: data.personal,
            family: data.family,
            jutsu: data.jutsu,
            natureType: data.natureType,
            rank: data.rank,
            tools: data.tools,
            voiceActors: data.voiceActors,
        };

        /* console.log(character); */

        return character;

    } catch (error) {
        console.error(error);
        return null;
    }
};