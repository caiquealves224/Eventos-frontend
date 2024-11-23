import { eventos } from "@/core";

export default function PaginaEventos() {
    return (
        <div className="flex flex-col gap-5">
            {eventos.map(evento => (
                <span key={evento.id}>{evento.nome}</span>
            ))}
        </div>
    )
}