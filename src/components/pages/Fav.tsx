import { IoArrowBackCircle, IoVolumeMediumOutline } from "react-icons/io5";
import { Link } from "react-router";
import { useWordsContext } from "../../customHooks/useWordsContext";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { handleClick, handleFav, isFavorited } from "../../utils/func";

export default function Fav() {
    const {favWords, setFavWords} = useWordsContext()
    console.log(favWords)
    return (
        <div className="body">
                    
            <div className="mb-4">
                <Link to="/">
                    <IoArrowBackCircle size={32} color="green" />
                </Link>
            </div>
            <h1 className="font-bold text-5xl text-green-400 text-center">Favorited Words</h1>
            <div>
                {favWords.map((data, index)=>{
                    return (
                        <div key={index} className="mt-8 flex justify-between items-center">
                            <div>
                                <p className="font-bold text-4xl">{data.word}</p>
                                <p className="mt-1 text-xl text-green-500">{data.phonetic ? data.phonetic : data.phonetics[1].text}</p> 
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
                    )
                })}
            </div>
        </div>
    )
}
