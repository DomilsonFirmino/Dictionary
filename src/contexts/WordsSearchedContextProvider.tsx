import { ReactNode, useEffect, useState } from "react"
import { dapiResponseType } from "../@types/types";
import { retrieveStorage } from "../utils/localStorage";
import { WordsSearchedContext } from "./WordSearchedContext";

export default function WordsContextProvider({children}:{children: ReactNode}) {
    const [searchedWords, setSearchedWords] = useState<dapiResponseType[]>(()=>retrieveStorage('searchedWords'))

    useEffect(()=>{
        localStorage.setItem('searchedWords', JSON.stringify(searchedWords))
    },[searchedWords])

    return (
        <WordsSearchedContext.Provider value={{searchedWords, setSearchedWords}}>
            {children}
        </WordsSearchedContext.Provider>
    )
}

