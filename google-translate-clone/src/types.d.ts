
// Si es un objeto, mejor usar interface
export interface State {
    fromLanguage: string,
    toLanguage: string,
    fromText: string
    result: string
    loading: boolean,
}