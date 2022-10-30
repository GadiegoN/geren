import { useState } from "react";
import { CadastroAluno } from "../cadastro-aluno";
import { CadastroLivro } from "../cadastro-livro";
import { Cadastrodevolução } from "../devolucao";
import { Button, ConteinerButton, ConteinerMenu } from "./style";
import { User, BookOpen, ClockCounterClockwise  } from "phosphor-react"


export function Menu() {
  const [page, setPage] = useState("aluno")

  function livroPage(){
    setPage("livro")
  }

  function alunoPage(){
    setPage("aluno")
  }

  function devolucaoPage(){
    setPage("devolucao")
  }

  return (
    <ConteinerMenu>
        <ConteinerButton>
         <Button onClick={alunoPage}>Aluno <User size={20} /> </Button>
         <Button onClick={livroPage}>Livro  <BookOpen size={20} /> </Button>
         <Button onClick={devolucaoPage}>Devolução <ClockCounterClockwise size={20} /> </Button>

        </ConteinerButton>
      { page === "aluno" && (
        <CadastroAluno/>
      )}
      { page === "livro" && (
        <CadastroLivro/>
      )}
      { page === "devolucao" && (
        <Cadastrodevolução/>
      )}
    </ConteinerMenu>
  )
}
