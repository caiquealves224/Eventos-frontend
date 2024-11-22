import Convidado from "../model/Convidado";

export default function validarConvidado(convidadoParcial: Partial<Convidado>): string[]  {
    const erros: string[] = [];

    if(!convidadoParcial.nome) {
        erros.push("nome é obrigatório")
    }

    if(!convidadoParcial.email) {
        erros.push("email é obrigatorio");
    }

    return erros;
}