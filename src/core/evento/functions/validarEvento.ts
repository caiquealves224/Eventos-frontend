import { Evento } from "@/core";

export default function validarEvento(eventoParcial: Partial<Evento>): string[] {
    const erros: string[] = [];

    if(!eventoParcial.alias) {
        erros.push("Alias é obrigatória")
    }

    if(!eventoParcial.nome) {
        erros.push("Nome é obrigatorio");
    }

    if(!eventoParcial.descricao) {
        erros.push("Descrição é obrigatória")
    }

    if(!eventoParcial.data) {
        erros.push("Data é obrigatória")
    }

    if(!eventoParcial.local) {
        erros.push("Local é obrigatório")
    }

    if(!eventoParcial.publicoEsperado || eventoParcial.publicoEsperado < 1) {
        erros.push("Publico esperado é obrigatório")
    }

    return erros;
}