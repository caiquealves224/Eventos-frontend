import { eventos } from "@/core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function PaginaEventos() {
    return (
        <div className="grid grid-cols-3 gap-5">
            {eventos.map(evento => (
                <div key={evento.id} className="
                    flex-col flex-col w-full overflow-hidden
                    bg-zinc-800 rounded-lg
                ">

                    <div className="
                        relative w-full h-44
                    ">
                        <Image 
                            src={evento.imagem}
                            fill
                            alt={evento.nome}
                            className="object-cover"
                        />
                    </div>

                    <div className="flex-1 flex flex-col items-center p-7 gap-5">
                        <span className="text-lg font-balck">{evento.nome}</span>
                        <p className="flex-1 text-sm text-zinc-400 text-center">{evento.descricao}</p>

                        <QRCode
                            value={JSON.stringify({id: evento.id, senha: evento.senha})}
                            className="w-44 h-44"
                        />

                        <div className="flex gap-5">
                            <Link className="flex-1 botao vermelho" href={`/evento/admin/${evento.id}/${evento.senha}`}>Admin</Link>
                            <Link className="flex-1 botao verde" href={`/convite//${evento.alias}`}>Convite</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}