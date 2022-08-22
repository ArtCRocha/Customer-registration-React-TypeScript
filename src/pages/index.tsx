import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Tabela from "../components/Tabela"
import Formulario from '../components/formulario'
import Botao from "../components/Botao"
import useClientes from '../hooks/useClientes'


export default function Home() {

  const { excluirCliente, salvarCliente, exibirCliente, novoCliente, exibirTabela, cliente, clientes, TabelaVisivel} = useClientes();

  return (
    <div className={`
       flex h-screen justify-center items-center bg-gradient-to-r from-purple-500  to-purple-800 
    `}>
      <Layout title="Clientes">
           {TabelaVisivel ?
           
          (
            <>
              <div className="flex justify-center m-2">
            <Botao cor="green" className="p-4" onCLick={novoCliente}>Novo Cliente</Botao>
            </div>

          <Tabela clientes={clientes} clienteSelecionado={exibirCliente} clienteExcluído={excluirCliente} />
            </>
          ) : (
            <Formulario cliente={cliente} cancelar={exibirTabela} clienteMudou={salvarCliente}/>
          )}
        
      </Layout>
    </div>
  )
}
