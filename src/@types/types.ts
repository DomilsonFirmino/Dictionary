export interface dapiResponseErrorType {
    title:      string;
    message:    string;
    resolution: string;
}

export interface dapiResponseType {
    word:       string;
    phonetic:   string | null;
    phonetics:  Phonetic[];
    meanings:   Meaning[];
    license:    License;
    sourceUrls: string[];
}

export interface License {
    name: string;
    url:  string;
}

export interface Meaning {
    partOfSpeech: string;
    definitions:  Definition[];
    synonyms:     string[];
    antonyms:     string[];
}

export interface Definition {
    definition: string;
    synonyms:   string[];
    antonyms:   string[];
    example?:   string;
}

export interface Phonetic {
    text:       string;
    audio:      string;
    sourceUrl?: string;
    license?:   License;
}

export interface WordsContextType {
    favWords: dapiResponseType[];
    setFavWords: React.Dispatch<React.SetStateAction<dapiResponseType[]>>;
}

export interface WordsSearchedContextType {
    searchedWords: dapiResponseType[];
    setSearchedWords: React.Dispatch<React.SetStateAction<dapiResponseType[]>>;
}