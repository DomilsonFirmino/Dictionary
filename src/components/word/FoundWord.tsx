import { dapiResponseType } from "../../@types/types";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { useWordsContext } from "../../customHooks/useWordsContext";
import { handleClick, handleFav, isFavorited } from "../../utils/func";



export default function FoundWord({data}:{data:dapiResponseType}) {

    
    const {favWords,setFavWords} = useWordsContext()

    return (
        <div>
            <div className="mt-8 flex justify-between items-center">
                <div>
                    <p className="font-bold text-6xl">{data.word}</p>
                    <p className="mt-1 text-3xl text-green-500">{data.phonetic ? data.phonetic : data.phonetics[1].text}</p> 
                </div>
                <div className="flex gap-4">
                    <button onClick={()=>handleFav(favWords, data, setFavWords)} type="button" className="aspect-square rounded-full bg-green-400 text-white p-2 cursor-pointer hover:bg-green-600 transition-all">
                        {isFavorited(favWords, data) ? <FaRegStar size={18}/> : <FaStar size={18} color="yellow" /> }
                    </button>
                    <button type="button" onClick={()=>handleClick(data)} className="aspect-square rounded-full bg-green-400 text-white p-2 cursor-pointer hover:bg-green-600 transition-all">
                        <IoVolumeMediumOutline size={24} />
                    </button>
                </div>
            </div>

            {data.meanings.map((meaning, index)=>{
                return (
                    <div key={index} >
                        <div className="flex items-center gap-4 mt-8">
                            <p className="font-bold text-xl uppercase">{meaning.partOfSpeech}</p>
                            <div className="h-[1px] my-auto bg-green-400 flex-1">
                            </div>
                        </div>

                        <div className="definitionsExamples">

                            <p className="font-bold mt-4">{meaning.definitions.length > 1 ? "Definitions": "Definition"}</p>
                            {meaning.definitions.map((definition, index)=>{
                                return(
                                    <div key={index} className="mt-4">
                                        <div >
                                            <li className="ml-4">{definition.definition}</li>
                                        </div>

                                        {
                                            definition.example && 
                                            <div className="pl-4">
                                                <p>
                                                    <span className="font-semibold mt-4 text-green-600">Example: </span>
                                                    {definition.example}
                                                </p>
                                            </div>
                                        }
                                        <div> 
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {
                            meaning.synonyms.length > 0 && 
                            <div className="synonyms flex items-center gap-4 flex-wrap mt-8">
                                <p>synonyms:</p>
                                {meaning.synonyms.map((synonym, index)=>{
                                    return (
                                        <div key={index} className="flex flex-wrap gap-2">
                                            <p className="bg-green-400 p-2 text-white font-bold">{synonym}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            
                        }
                        {
                            meaning.antonyms.length > 0 && 
                            <div className="synonyms flex items-center gap-4 flex-wrap mt-8">
                                <p>antonyms:</p>
                                {meaning.antonyms.map((antonym, index)=>{
                                    return (
                                        <div key={index} className="flex flex-wrap gap-2">
                                            <p className="bg-green-400 p-2 text-white font-bold">{antonym}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            
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
