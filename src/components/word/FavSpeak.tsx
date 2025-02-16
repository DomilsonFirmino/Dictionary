import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { handleFav, isFavorited, asAudio, handleClick } from "../../utils/func";
import { dapiResponseType } from "../../@types/types";

export default function FavSpeak({favWords, data, setFavWords}:{favWords: dapiResponseType[], data:dapiResponseType, setFavWords: React.Dispatch<React.SetStateAction<dapiResponseType[]>>}) {
  return (
    <div className="flex gap-4">
        <button onClick={()=>handleFav(favWords, data, setFavWords)} type="button" className="aspect-square rounded-full bg-green-400 text-white p-2 cursor-pointer hover:bg-green-600 transition-all">
            {isFavorited(favWords, data) ? <FaRegStar size={18}/> : <FaStar size={18} color="yellow" /> }
        </button>
        <button disabled={!asAudio(data)} type="button" onClick={()=>handleClick(data)} className="aspect-square rounded-full bg-green-400 text-white p-2 cursor-pointer hover:bg-green-600 transition-all disabled:pointer-events-none disabled:bg-gray-400">
            <IoVolumeMediumOutline size={24} />
        </button>
    </div>
  )
}
