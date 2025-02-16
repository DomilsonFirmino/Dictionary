import { ReactNode, useEffect, useState } from "react"
import { dapiResponseType } from "../@types/types";
import { WordsSearchedContext } from "./WordSearchedContext";
import { retrieveSessionStorage } from "../utils/sessionStorage";

export default function WordsContextProvider({children}:{children: ReactNode}) {
    const [searchedWords, setSearchedWords] = useState<dapiResponseType[]>(()=>retrieveSessionStorage('searchedWords'))

    useEffect(()=>{
        sessionStorage.setItem('searchedWords', JSON.stringify(searchedWords))
    },[searchedWords])

    return (
        <WordsSearchedContext.Provider value={{searchedWords, setSearchedWords}}>
            {children}
        </WordsSearchedContext.Provider>
    )
}

