import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router";
import { useWordsContext } from "../../customHooks/useWordsContext";

export default function Fav() {
    const {favWords} = useWordsContext()
    console.log(favWords)
    return (
        <div className="body">
                    
            <div className="mb-4">
                <Link to="/">
                    <IoArrowBackCircle size={32} color="green" />
                </Link>
            </div>
            <h1 className="font-bold text-5xl text-green-400 text-center">Favorited Words</h1>
        </div>
    )
}
