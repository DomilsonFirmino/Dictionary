import { createContext } from "react"
import { WordsContextType } from "../@types/types"

export const WordsContext = createContext<WordsContextType | null>(null)