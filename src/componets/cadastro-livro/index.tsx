import { useState } from "react";
import { ConteinerCadastro, Button, ConteinerButton ,ConteinerFormulario, Input } from "./style";
import { Books } from "phosphor-react"


export function CadastroLivro() {

  const  [cadastro, setCadastro] = useState("")

  function cadastroPage(){
    setCadastro("cadastro")
  }

  return (
    <ConteinerCadastro>
      <table>
        <thead>
          <tr>
            <th>Nome do Livro</th>
            <th>Código do Livro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cassio</td>
            <td>8ª</td>
          </tr>
        </tbody>
      </table>
      <Button onClick={cadastroPage}>Cadastrar Livro <Books size={20} /> </Button>
      {cadastro === "cadastro" && (
      <ConteinerFormulario>
        <Input type="text" placeholder="Nome do Livro"  />
        <Input type="text" placeholder="Código do Livro" />
       
       <ConteinerButton>
        <Button>Salvar</Button>
        <Button onClick={() => setCadastro("")}>Fechar Cadastro</Button>
        </ConteinerButton>

      </ConteinerFormulario>
     )}
    </ConteinerCadastro>
  )
}
