import { Link } from "react-router";
import { IoSearch } from "react-icons/io5"
import { FaRegStar } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="body grid justify-center h-full">
        <div className="text-center">
            <h1 className="font-bold text-5xl text-green-400">Wellcome</h1>
            <p className="w-[50ch] mt-4">
                this application is An online dictionary that allow users to search for words and get definitions, synonyms, and usage examples.
            </p>
            
            <div className="mt-8 text-center flex gap-4">
                <div className="w-fit m-auto bg-green-400 py-2 px-4 rounded-full hover:bg-green-600 cursor-pointer transition-all">
                    <Link to="Search" className="flex gap-2 justify-center items-center">
                        <span className="inline-block text-white font-medium text-lg">Search for a word</span>
                        <span className="inline-block">
                            <IoSearch size={20} color="white"/>
                        </span>
                    </Link>                    
                </div>
                <div className="w-fit m-auto bg-green-400 py-2 px-4 rounded-full hover:bg-green-600 cursor-pointer transition-all">
                    <Link to="Favs" className="flex gap-2 justify-center items-center">
                        <span className="inline-block text-white font-medium text-lg">Favorites words</span>
                        <span className="inline-block">
                            <FaRegStar size={20} color="white"/>
                        </span>
                    </Link>                    
                </div>
            </div>
        </div>
    </div>
  )
}
