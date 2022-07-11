import { ELang } from "./types";
import { messagesEn } from "./messagesEn";
import { messagesRu } from "./messagesRu";

export const getMessages = (lang: ELang) => {
    switch (lang) {
        case ELang.EN:
            return messagesEn;
        // case ELang.RU:
        //     return messagesRu;
        default:
            return messagesEn;
    }
}