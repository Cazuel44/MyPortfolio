
// se deben tipar solo los datos que se quieren mostrar en la app, no es necesario tipar toda la info que trae la api
//no se utilizara traer todos los personajes, solo especificos que se buscaran por id en el json creado a partir del fetch

export type IconicCharacter = {
    id: number;
    label: string;
    gif?: string; // campo opcional para el gif
};

export type IconicCharactersArray = IconicCharacter[];

export type CharacterCardProps = {
    id: number;

    name: string;

    images?: string[];

    clan?: string | string[];

    /* affiliation?: string[]; */

    natureType?: string[];

    family?: {
        father?: string;
        mother?: string;
        wife?: string;
        godfather?: string;
    };
};

export type CharacterDetailCardProps = {
    id: number;
    name: string;
    images?: string[];

    debut?: {
        manga?: string;
        anime?: string;
        novel?: string;
        movie?: string;
        game?: string;
        ova?: string;
        appearsIn?: string;
    };

    personal?: {
        birthdate?: string;
        sex?: string;
        species?: string;
        age?: { [key: string]: string };
        height?: { [key: string]: string };
        kekkeiGenkai?: string;
        classification?: string;
        affiliation?: string | string[];
        team?: string | string[];
        clan?: string | string[];
        titles?: string[];
    };

    family?: {
        [key: string]: string; // campos impredecibles
    };

    jutsu?: string[];
    natureType?: string[];

    rank?: {
        ninjaRank?: { [key: string]: string };
    };

    tools?: string[];

    voiceActors?: {
        japanese?: string | string[]; // ← string O array
        english?: string | string[];  // ← string O array
    };

};

// se crea un tipado combinado para añadir metadata en conjunto con la data que viene de la API
export type NarutoCharacterDetailProps =
    CharacterDetailCardProps & {
        gif?: string;
    };