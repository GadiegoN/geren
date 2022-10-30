import styled from "styled-components";

export const ConteinerMenu = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap : 2rem;
  width: 80%;
  margin-left: 10%;
 
`
export const ConteinerButton = styled.div`
  margin-top: 4rem;
  display: flex;
  gap : 2rem;
  width: 100%;
  justify-content: center;
 
`

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  color : white;
  width : 150px;
  height : 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap : 1rem;
  :hover {
    background: black;
  }
`