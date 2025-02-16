import { dapiResponseType } from "../@types/types";

export function retrieveSessionStorage(key: string): dapiResponseType[]{
    const stored = sessionStorage.getItem(key);
    if(stored)
        return (JSON.parse(stored))
    return []
}