import { useState } from "react";
import { ConteinerCadastro, Button, ConteinerFormulario, ConteinerButton, Input  } from "./style";
import { UserPlus } from "phosphor-react"
export function CadastroAluno() {

  const  [cadastro, setCadastro] = useState("")

  function cadastroPage(){
    setCadastro("cadastro")
  }

  return (
    <ConteinerCadastro>
      <table>
        <thead>
          <tr>
            <th>Nome do Aluno </th>
            <th>Série </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cassio</td>
            <td>8ª</td>
          </tr>
        </tbody>
      </table>
      <Button onClick={cadastroPage} >Cadastrar Aluno <UserPlus size={20} /></Button>
     {cadastro === "cadastro" && (
      <ConteinerFormulario>
        <Input type="text" placeholder="Nome do Aluno:"  />
        <Input type="text" placeholder="Série do aluno:"  />
       
       <ConteinerButton>
        <Button>Salvar</Button>
        <Button onClick={() => setCadastro("")}>Fechar Cadastro</Button>
        </ConteinerButton>

      </ConteinerFormulario>
     )}
    </ConteinerCadastro>
  )
}
