import { useContext } from "react"
import { WordsContext } from "../contexts/WordContext"

export const useWordsContext = () =>{
    const context = useContext(WordsContext)
    if(!context)
        throw new Error("Something wrong here, define the context")
    return context
}
