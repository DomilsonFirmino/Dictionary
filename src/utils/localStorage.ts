import { dapiResponseType } from "../@types/types";

export function retrieveStorage(key: string): dapiResponseType[]{
    const stored = localStorage.getItem(key);
    if(stored)
        return (JSON.parse(stored))
    return []
}

export function setStorage(key: string, favWord: dapiResponseType){
    const currentFavWords = retrieveStorage(key)

    /*check is favorite alread exists there*/
    const exists = currentFavWords.filter((element)=>element.word == favWord.word)
    if(exists.length == 0){
        currentFavWords.push(favWord)
        localStorage.setItem(key, JSON.stringify(currentFavWords))
    }
}

export function removeAllStorage(key: string){
    const stored = localStorage.getItem(key);
    if(stored){
        localStorage.removeItem(key)
    }
}

export function removeStorage(key: string, favWord: dapiResponseType){
    const currentFavWords = retrieveStorage(key)
    currentFavWords.filter((element)=>element.word != favWord.word)
    localStorage.setItem(key, JSON.stringify(currentFavWords))
}