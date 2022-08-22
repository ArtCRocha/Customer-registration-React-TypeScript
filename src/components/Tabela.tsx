import Cliente from "../core/Cliente"
import { iconDelete, iconEdit } from "./Icons";

interface TabelaProps{
    clientes : Cliente[];
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluído?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps){

    const exibirAções = props.clienteSelecionado || props.clienteExcluído

    function renderizarCabecalho(){
        return (
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
                {exibirAções ? <th>Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i)=>{
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-300' : 'bg-purple-200'} text-center`}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                    {exibirAções ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente){
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={()=> props.clienteSelecionado?.(cliente)} className={`
                    p-2 m-2
                    text-green-500
                    hover:bg-gray-100
                    rounded-full
                `}>{iconEdit}</button>
                ) : false}

                {props.clienteExcluído ? (
                    <button onClick={()=> props.clienteExcluído?.(cliente)} className={`
                    p-2 m-2
                    text-red-500
                    hover:bg-gray-100
                    rounded-full
                `}>{iconDelete}</button>
                ) : false}
                
                
            </td>
        )
    }


    return (
        <table className="w-full rounded-xl">
            <thead className={`
            text-gray-200
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
            {renderizarCabecalho()}
            </thead>
            <tbody>
            {renderizarDados()}
            </tbody>
        </table>
    )
}