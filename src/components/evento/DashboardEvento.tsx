import { Evento } from "@/core"
import InformacoesEvento from "./InformacoesEvento"

export interface DashboardEventoProps {
    evento: Evento
}

export default function DashboardEvento(props: DashboardEventoProps) {
    return (
        <div>
            <div>
                <InformacoesEvento evento={props.evento} className="
                flex-1"/>
            </div>
        </div>
    )
}