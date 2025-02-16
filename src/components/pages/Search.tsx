import { useQuery } from "@tanstack/react-query"
import { useState, useEffect } from "react"
import { dapiResponseType } from "../../@types/types"
import { fetchWord } from "../../api/FreeDiCtionaryAPI"
import InputComponent from "../form/InputComponent"
import FoundWord from "../word/FoundWord"
import NotFoundWord from "../word/NotFoundWord"
import Form from "../form/Form"
import { Link } from "react-router"

import { IoArrowBackCircle } from "react-icons/io5";
import { IoSearch } from "react-icons/io5"
import { useWordsSearchedContext } from "../../customHooks/useWordsSearchedContext"

import wordList from "../../api/wordsArray"

export default function Search() {
    const [query, setQuery] = useState("")
    const [start, setStart] = useState(false)
    const [previousResults, setPreviousResults] = useState<dapiResponseType | null>(null)
    const [previousError, setPreviousError] = useState<string | null>(null)
    const [suggestions, setSuggestions] = useState<string[]>([]);
  
    const {data,error,isError,isFetching, refetch} = useQuery<
    dapiResponseType[]>({
      queryKey: ["word",query],
      queryFn: ()=>fetchWord(query),
      enabled: false,
      retry:2,
      staleTime: 60*5000
    })

    const { searchedWords, setSearchedWords } = useWordsSearchedContext()
  
    useEffect(() => {
      if (data && !isError) {
        setPreviousResults(data[0]) // Atualiza os resultados apenas se a busca for bem-sucedida
        setPreviousError(null)   // Limpa o erro anterior quando a busca é bem-sucedida
      } else if (isError && error) {
        setPreviousResults(null)
        setPreviousError(error.message) // Mantém o erro anterior caso a busca falhe
      }
    }, [data, isError, error])

    useEffect(() => {
      if (data && !isError) {
        const exists = searchedWords.filter((element)=>element.word == data[0].word)

        if(exists.length == 0)
          setSearchedWords([...searchedWords, data[0]])
      }
    }, [data, isError, searchedWords, setSearchedWords])
  
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault()
  
      if(query.length<=0)
        return
      
      setStart(true)
      setSuggestions([]);
      const FoundWord = searchedWords.filter((word)=>word.word == query)
      if(FoundWord.length == 0)
        refetch()
      else{
        setPreviousResults(FoundWord[0])
        setPreviousError(null) 
      }
  
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
      const value = e.target.value;
      setQuery(value);
      if (value.length > 0) {
        const filteredSuggestions = wordList
          .filter((word: string) => word.toLowerCase().startsWith(value.toLowerCase()))
          // .slice(0, 5);
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    }

    
    const handleSelectSuggestion = (word: string) => {
      setQuery(word);
      setSuggestions([]);
    };
  
    return(
      <div className="body">
        <div className="mb-4">
            <Link to="/Dictionary">
                <IoArrowBackCircle size={32} color="green" />
            </Link>
        </div>
        
        <div>
  
          <Form handleSubmit={handleSubmit} styles="flex gap-4">
            
            <div className="relative flex gap-4 flex-1">
              <InputComponent
                name={"query"}
                id={"query"}
                state={query}
                placeholder={"word"}
                handleChange={handleChange}
                styles={"flex-1"}
              />
              {suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 top-12 h-[15rem] overflow-y-scroll bg-white border rounded mt-1">
                  {suggestions.map((word, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleSelectSuggestion(word)}
                    >
                      {word}
                    </li>
                  ))}
                </ul>
              )}
            </div>
  
            <button type="submit" className="rounded-full aspect-square px-3 bg-green-400 cursor-pointer hover:bg-green-600 transition-all">
              <IoSearch size={20} color="white"/>
            </button>
  
          </Form>
  
        </div>
  
        {start && isFetching && <div className="grid h-full">
          <p>Loading...</p>
        </div>}
  
        {start && !isFetching && previousResults && previousResults!=undefined && (
          <FoundWord data={previousResults} />
        )}
  
        {start && !isFetching && previousError && <NotFoundWord message={previousError} />}
  
      </div>
    )
}
