import { Link } from "react-router";

export default function Word({word, pronun, isLink=false}:{word:string,pronun:string, isLink?:boolean}) {
  return (
    <div>
        { isLink ? <Link to={word} className="font-bold text-6xl hover:text-green-800 cursor-pointer transition-all">{word}</Link> : <p className="font-bold text-6xl">{word}</p>}
        <p className="mt-1 text-3xl text-green-500">{pronun}</p> 
    </div>
  )
}
