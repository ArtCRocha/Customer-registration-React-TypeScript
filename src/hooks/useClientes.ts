import React, { useEffect, useState } from 'react'
import Cliente from "../core/Cliente"
import ClienteRepositorio from '../core/ClienteRepositorio'
import ColecaoClientes from '../backend/db/ColecaoClientes'
import useVisible from './useVisible'

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoClientes()

  const { FormularioVisivel,
  TabelaVisivel,
  exibirTabela,
  exiberFormulario
} = useVisible()

  const [cliente, setCliente] = useState<Cliente>(Cliente.clienteVazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(()=>{
    obterTodos
  }, [])

  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function exibirCliente(cliente: Cliente){
    setCliente(cliente)
    exiberFormulario()
  }

  async function excluirCliente(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente(){
      setCliente(Cliente.clienteVazio())
      exiberFormulario()
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  return {
    exibirCliente,
    excluirCliente,
    novoCliente,
    salvarCliente,
    obterTodos,
    exibirTabela,
    cliente,
    clientes,
    TabelaVisivel,
    FormularioVisivel
  }
}