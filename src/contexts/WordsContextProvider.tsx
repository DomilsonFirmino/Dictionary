import { ReactNode, useEffect, useState } from "react"
import { dapiResponseType } from "../@types/types";
import { retrieveStorage } from "../utils/localStorage";
import { WordsContext } from "./WordContext";

export default function WordsContextProvider({children}:{children: ReactNode}) {
    const [favWords, setFavWords] = useState<dapiResponseType[]>(()=>retrieveStorage('words'))

    useEffect(()=>{
        localStorage.setItem('words', JSON.stringify(favWords))
    },[favWords])

    return (
        <WordsContext.Provider value={{favWords, setFavWords}}>
            {children}
        </WordsContext.Provider>
    )
}

