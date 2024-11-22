import { Evento, Id, Senha } from "@/core";

const validarEvento = (evento: Evento) => evento;

export default function complementarEvento(eventoParcial: Partial<Evento>): Evento {
    const erros = validarEvento(eventoParcial);

    if(erros.length) {
        throw new Error(erros.join("\n"));
    }

    const evento: Evento = {
        ...eventoParcial,
        id: eventoParcial.id ?? Id.novo(),
        senha: eventoParcial.senha ?? Senha.criar(20),
        publicoEsperado: (eventoParcial.publicoEsperado ?? 1),
    } as Evento;

    return evento;
}