
interface EntradaProps{
    tipo?: "text" | "number"
    texto: string
    valor: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    return (
        <div className="flex flex-col">
            <label>
                {props.texto}
            </label>
            <input
            className={` mt-5 mb-5 
            border border-purple-500 rounded-lg
            p-2 focus:outline-none
            `}
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={(e) => props.valorMudou(e.target.value)}
            />
        </div>
    )
}