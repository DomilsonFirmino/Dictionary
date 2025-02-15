import { dapiResponseType } from "../@types/types";

export function retrieveStorage(key: string): dapiResponseType[]{
    const stored = localStorage.getItem(key);
    if(stored)
        return (JSON.parse(stored))
    return []
}