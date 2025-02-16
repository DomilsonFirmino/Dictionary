
export default function Onyms({onyms,title}:{onyms:string[],title: string}) {
  return (
    <div className="synonyms flex items-center gap-4 flex-wrap mt-8">
        <p>{title}:</p>
        {onyms.map((onym, index)=>{
            return (
                <div key={index} className="flex flex-wrap gap-2">
                    <p className="bg-green-400 p-2 text-white font-bold">{onym}</p>
                </div>
            )
        })}
    </div>
  )
}
