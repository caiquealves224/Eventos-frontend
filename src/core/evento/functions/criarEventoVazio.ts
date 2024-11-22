import { Id } from "@/core";
import { Evento } from "../";

export default function criarEventoVazio(): Partial<Evento> {
    return {
        id: Id.novo(),
        nome: "",
        descricao: "",
        data: new Date(),
        publicoEsperado: 1,
        imagem: "",
        imagemBackground: "",
    }
}