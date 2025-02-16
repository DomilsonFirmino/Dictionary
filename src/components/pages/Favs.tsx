import { IoArrowBackCircle} from "react-icons/io5";
import { Link } from "react-router";
import { useWordsContext } from "../../customHooks/useWordsContext";
import FavSpeak from "../word/FavSpeak";
import Word from "../word/Word";

export default function Fav() {
    const {favWords, setFavWords} = useWordsContext() 
    return (
        <div className="body">
                    
            <div className="mb-4">
                <Link to="/Dictionary">
                    <IoArrowBackCircle size={32} color="green" />
                </Link>
            </div>
            <h1 className="font-bold text-5xl text-green-400 text-center">Favorited Words</h1>
            <div>
                {favWords.map((data, index)=>{
                    return (
                        <div key={index} className="mt-8 flex justify-between items-center">
                           <Word isLink={true} pronun={data.phonetic ? data.phonetic : data.phonetics[1]?.text} word={data.word}/>
                           <FavSpeak favWords={favWords} data={data} setFavWords={setFavWords} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
