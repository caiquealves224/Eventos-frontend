export default class Alias {
    static formatar(value: string): string {
        return value.replace(/ /g, "-").toLowerCase()
    }
}