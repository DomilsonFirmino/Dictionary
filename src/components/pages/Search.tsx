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

export default function Search() {
    const [query, setQuery] = useState("")
    const [start, setStart] = useState(false)
    const [previousResults, setPreviousResults] = useState<dapiResponseType | null>(null)
    const [previousError, setPreviousError] = useState<string | null>(null)
  
    const {data,error,isError,isFetching, refetch} = useQuery<
    dapiResponseType[]>({
      queryKey: ["word",query],
      queryFn: ()=>fetchWord(query),
      enabled: false
    })
  
    useEffect(() => {
      if (data && !isError) {
        setPreviousResults(data[0]) // Atualiza os resultados apenas se a busca for bem-sucedida
        setPreviousError(null)   // Limpa o erro anterior quando a busca é bem-sucedida
      } else if (isError && error) {
        setPreviousResults(null)
        setPreviousError(error.message) // Mantém o erro anterior caso a busca falhe
      }
    }, [data, isError, error])
  
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault()
  
      if(query.length<=0)
        return
      
      setStart(true)
      refetch()
  
    }
  
    return(
      <div className="body">
        
        <div className="mb-4">
            <Link to="/">
                <IoArrowBackCircle size={32} color="green" />
            </Link>
        </div>
        
        <div>
  
          <Form handleSubmit={handleSubmit} styles="flex gap-4">
            
            <InputComponent
              name={"query"}
              id={"query"}
              state={query}
              placeholder={"word"}
              handleChange={(e) => setQuery(e.target.value)}
              styles={"flex-1"}
            />
  
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
