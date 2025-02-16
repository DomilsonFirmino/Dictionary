import { createContext } from "react"
import { WordsSearchedContextType } from "../@types/types"

export const WordsSearchedContext = createContext<WordsSearchedContextType | null>(null)