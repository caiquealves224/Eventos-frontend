import { Evento } from "@/core"
import Informacao from "../shared/Informacao"

export interface InformacoesEventoProps {
    evento: Evento;
    className?: string;
}

export default function InformacoesEvento(props: InformacoesEventoProps) {
    const { evento } = props;
    return (
        <div>
            <div className={`flex flex-col gap-2 ${props.className ?? ""}`}>
                <Informacao label="Data:">
                    <span>
                        {new Date(evento.data!).toLocaleDateString()}
                        {" às "}
                        {new Date(evento.data!).toLocaleTimeString()}
                    </span>
                </Informacao>
            </div>
        </div>
    )
}