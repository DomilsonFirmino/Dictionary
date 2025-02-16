import { Definition } from "../../@types/types"

export default function Definitions({definitions}:{definitions: Definition[]}) {
  return (
    <div className="definitionsExamples">

        <p className="font-bold mt-4">{definitions.length > 1 ? "Definitions": "Definition"}</p>
        {definitions.map((definition, index)=>{
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
  )
}
