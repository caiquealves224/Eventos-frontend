import { Convidado } from "@/core";
import validarConvidado from "./validarConvidado";

export default function processarConvidado(convidadoParcial: Partial<Convidado>): Convidado {
    const erros = validarConvidado(convidadoParcial);

    if(erros.length > 0) {
        throw new Error(erros.join("\n"));
    }

    const qtdeAcompanhantes = convidadoParcial.qtdeAcompanhantes ?? 0;
    const temAcompanhantes = convidadoParcial.qtdeAcompanhantes
        && convidadoParcial.confirmado 
        && qtdeAcompanhantes > 0 ;

    const convidadoAtualizado = {
        ...convidadoParcial,
        possuiAcompanhantes: temAcompanhantes,
        qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
    } as Convidado

    return convidadoAtualizado;
}