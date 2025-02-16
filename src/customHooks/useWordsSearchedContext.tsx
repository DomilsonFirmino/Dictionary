import { useContext } from "react"
import { WordsSearchedContext } from "../contexts/WordSearchedContext"

export const useWordsSearchedContext = () =>{
    const context = useContext(WordsSearchedContext)
    if(!context)
        throw new Error("Something wrong here, define the context")
    return context
}
