import styled from "styled-components";

export const ConteinerCadastro = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  
    width: 50%;
    margin-left: 25%;

  th {
    width: 10px;
    height: 50px;
    border: 2px solid black;

  }
  td {
    width: 10px;
    height: 50px;
    text-align: center;
    border: 2px solid black;

  }

 
`
export const ConteinerFormulario = styled.div`
 
  margin-top: 4rem;
  display: flex;
  flex-direction: column;

`
export const ConteinerButton = styled.div`
 
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

`
export const Button = styled.button`
    background: transparent;
    color : white;
    width : 250px;
    height : 50px;
    :hover {
    background: black;
  }

`
export const Input = styled.input`

width: 80%;
height: 40px;
background: transparent;
color: white;
padding-left: 1rem;
::placeholder{
  color: white;
}
`
