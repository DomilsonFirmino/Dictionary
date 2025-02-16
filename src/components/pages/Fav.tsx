import {Link, Navigate, useParams } from "react-router";
import { useWordsContext } from "../../customHooks/useWordsContext";
import FavSpeak from "../word/FavSpeak";
import Word from "../word/Word";
import { IoArrowBackCircle } from "react-icons/io5";
import Definitions from "../word/Definitions";
import Onyms from "../word/Onyms";

export default function Fav() {
    const params = useParams();
    const {favWords, setFavWords} = useWordsContext()
    const word = favWords.filter((word)=>word.word==params.pid)
    console.log(word)

    if(word.length == 0)
        return <Navigate to={"/Dictionary/Favs"} replace/>
    return (
        <div className="body">
                                
            <div className="mb-4">
                <Link to="/Dictionary/Favs">
                    <IoArrowBackCircle size={32} color="green" />
                </Link>
            </div>

            <div className="mt-8 flex justify-between items-center">
                <Word pronun={word[0].phonetic ? word[0].phonetic : word[0].phonetics[1]?.text} word={word[0].word}/>
                <FavSpeak favWords={favWords} data={word[0]} setFavWords={setFavWords} />
            </div>
            {word[0].meanings.map((meaning, index)=>{
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
            <p className="mt-4">Source: <a href={word[0].sourceUrls[0]} className="text-gray-400">{word[0].sourceUrls}</a></p>
        </div>
    )
}
