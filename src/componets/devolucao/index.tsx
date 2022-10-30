import { useState } from "react";
import { ConteinerCadastro, Button, Input, ConteinerFormulario, ConteinerButton  } from "./style";
import { RepeatOnce } from "phosphor-react"

export function Cadastrodevolução() {

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
            <th>Dia</th>
            <th>Data de Entrega</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cassio</td>
            <td>8ª</td>
            <td>Dia</td>
            <td>Data de Entrega</td>
          </tr>
        </tbody>
      </table>
      <Button onClick={cadastroPage}>Cadastrar Devolução <RepeatOnce size={20} /> </Button>
      {cadastro === "cadastro" && (
      <ConteinerFormulario>
        <Input type="text" placeholder="Nome do Aluno"  />
        <Input type="text" placeholder="Série" />
        <Input type="text" placeholder="Dia" />
        <Input type="text" placeholder="Data da entrega" />
       
       <ConteinerButton>
        <Button>Salvar</Button>
        <Button onClick={() => setCadastro("")}>Fechar Cadastro</Button>
        </ConteinerButton>

      </ConteinerFormulario>
     )}
    </ConteinerCadastro>
  )
}
