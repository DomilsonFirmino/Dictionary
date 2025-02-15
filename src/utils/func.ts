import { dapiResponseType } from "../@types/types";

export function isFavorited(favWords:dapiResponseType[],data: dapiResponseType){
    return (favWords.filter((element)=>element.word == data.word).length == 0)
}

export function handleFav(favWords:dapiResponseType[], data: dapiResponseType, setFavWords: React.Dispatch<React.SetStateAction<dapiResponseType[]>>){        
    /*check is favorite alread exists there*/
    const exists = favWords.filter((element)=>element.word == data.word)
    if(exists.length == 0){
        setFavWords([data,...favWords])
    }else{
        const removed = (favWords.filter((element)=>element.word != data.word))
        setFavWords(removed)
    }
}

export function handleClick(data: dapiResponseType) {
    const audio = data.phonetics.filter((sound)=>sound.audio!="")
    const audioElement = new window.Audio(audio[0].audio);
    audioElement.play();
}
