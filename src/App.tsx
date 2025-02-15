import { useEffect, useState } from "react"
import InputComponent from "./components/form/InputComponent"
import Form from "./components/form/Form"
import FoundWord from "./components/word/FoundWord"
import NotFoundWord from "./components/word/NotFoundWord"
import { useQuery } from "@tanstack/react-query"
import { dapiResponseType } from "./@types/types"
import { fetchWord } from "./api/FreeDiCtionaryAPI"
import { IoSearch } from "react-icons/io5";

function App() {
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

          <button type="submit" className="rounded-full aspect-square px-3 bg-green-400">
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

export default App
