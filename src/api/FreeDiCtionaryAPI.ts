export async function fetchWords(word:string){
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if(!res.ok)
        return {error: "404", value: res.json()}
    const data  = await res.json()
    return data;
};

export async function fetchWord(word:string){
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    if(!res.ok && res.status != 404)
        throw new Error(res.statusText)
    if(res.status == 404)
        throw new Error("Word was not found")
    return res.json()
};

