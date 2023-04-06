import styled from 'styled-components'

export const Input = styled.input`
  padding: 8px 15px;
  border-radius: 3px;
  outline: none;
  border: 1px solid black;
  transition: border 250ms ease;

  &:focus {
    border: 1px solid #3498db;
  }
`
