import React, {useState} from "react"

export default function useVisible(){
    const [visible, setVisible] = useState<"Tabela" | "Formulario">("Tabela")
    
    const exibirTabela = ()=> setVisible("Tabela")
    const exiberFormulario = ()=> setVisible("Formulario")

    return {
        FormularioVisivel: visible === "Formulario",
        TabelaVisivel: visible === "Tabela",
        exibirTabela,
        exiberFormulario
    }
}