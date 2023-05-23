
// Si es un objeto, mejor usar interface

import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./constants"

// TIPO DE ESTADO
export interface State {
    fromLanguage: FromLanguage,
    toLanguage: Language,
    fromText: string
    result: string
    loading: boolean,
}

// TIPO DE ACTION
export type Action =
    | { type: "INTERCHANGE_LANGUAGES" }
    | { type: "SET_FROM_LANGUAGE", payload: FromLanguage }
    | { type: "SET_TO_LANGUAGE", payload: Language }
    | { type: "SET_FROM_TEXT", payload: string }
    | { type: "SET_RESULT", payload: string }



//TIPO DE LENGUAJE

// es una de las keys que tenemos en el objeto SUPPORTED_LANGUAGES
export type Language = keyof typeof SUPPORTED_LANGUAGES

//TIPO DE AUTOLENGUAJE
export type AutoLanguage = typeof AUTO_LANGUAGE

//TIPO DE LENGUAJE EN  FromLanguage

export type FromLanguage = Language | AutoLanguage