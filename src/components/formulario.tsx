import React, { useState } from "react"
import Entrada from "./Entrada"
import Cliente from "../core/Cliente"
import Botoa from "./Botao"

interface FormularioProps{
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelar?: () => void
}


export default function Formulario(props: FormularioProps){

    const id = props.cliente?.id

    const [nome, setNome] = useState(props.cliente?.nome ?? "")
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id? (
                <Entrada somenteLeitura texto="Código" valor={id}/>
            ) : false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome}/>
            <Entrada texto="Idade" valor={idade} tipo="number" valorMudou={setIdade}/>
            <div className="flex justify-end m-7">
            <Botoa cor="blue" className="p-4 mr-4" onCLick={()=> props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                {id? "Alterar" : "Salvar"}
            </Botoa>
            <Botoa cor='gray' className="p-4" onCLick={props.cancelar}>
                Cancelar
            </Botoa>
            </div>
        </div>
    )
}