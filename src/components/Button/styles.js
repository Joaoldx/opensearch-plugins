import styled from 'styled-components'

export const Button = styled.button`
  padding: 8px 15px;
  color: #fff;
  font-weight: bold;
  border-radius: 7px;
  background-color: #3498db;
  width: fit-content;
  align-self: ${(props) => (props.alignEnd ? 'end' : 'auto')};

  &:hover {
    cursor: pointer;
  }
`
