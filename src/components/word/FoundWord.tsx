import { dapiResponseType } from "../../@types/types";
import { useWordsContext } from "../../customHooks/useWordsContext";
import Word from "./Word";
import FavSpeak from "./FavSpeak";
import Onyms from "./Onyms";
import Definitions from "./Definitions";



export default function FoundWord({data}:{data:dapiResponseType}) {

    
    const {favWords,setFavWords} = useWordsContext()

    return (
        <div>
            <div className="mt-8 flex justify-between items-center">
                <Word pronun={data.phonetic ? data.phonetic : data.phonetics[1]?.text} word={data.word}/>
                <FavSpeak favWords={favWords} data={data} setFavWords={setFavWords} />
            </div>

            {data.meanings.map((meaning, index)=>{
                return (
                    <div key={index}>
                        
                        <div className="flex items-center gap-4 mt-8">
                            <p className="font-bold text-xl uppercase">{meaning.partOfSpeech}</p>
                            <div className="h-[1px] my-auto bg-green-400 flex-1">
                            </div>
                        </div>

                        <Definitions definitions={meaning.definitions}/>

                        {
                            meaning.synonyms.length > 0 && 
                            <Onyms onyms={meaning.synonyms} title="Synonyms" />                            
                        }

                        {
                            meaning.antonyms.length > 0 && 
                            <Onyms onyms={meaning.antonyms} title="Antonyms" />                            
                        }

                    </div>
                )
            })}

            <div className="h-[1px] my-auto mt-4 bg-green-400 flex-1">
            </div>
            <p className="mt-4">Source: <a href={data.sourceUrls[0]} className="text-gray-400">{data.sourceUrls}</a></p>
        </div>
    )
}
