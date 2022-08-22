interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onCLick?: () => void
}

export default function Botao(props: BotaoProps){

    const cor = props.cor ?? 'gray'

    return (
        <button className={`
           bg-gradient-to-r from-${cor}-400 to-${cor}-700
           px-4 py-2 rounded-md
           text-white
           ${props.className}
        `}
            onClick={props.onCLick}
        >
            {props.children}
        </button>
    )
}