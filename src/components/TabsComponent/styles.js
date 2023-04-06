import styled from 'styled-components'
import { Tab, Tabs, TabList } from 'react-tabs'

export const TabsStyled = styled(Tabs)`
  -webkit-tap-highlight-color: transparent;
`

export const TabListStyled = styled(TabList)`
  border-bottom: 1px solid #aaa;
  margin: 0 0 10px;
  padding: 0;
`

export const TabStyled = styled(Tab)`
  display: inline-block;
  border: 1px solid black;
  border-bottom: none;
  bottom: -1px;
  position: relative;
  list-style: none;
  padding: 6px 12px;
  margin: 0 2px;
  cursor: pointer;
  font-size: 18px;
  transition: background 250ms ease-in-out;

  &:hover {
    background: #d5dbdb;
  }

  &:nth-child(1) {
    margin-left: 15px;
  }

  &::selected {
    background: #fff;
    border-color: #aaa;
    color: black;
    border-radius: 5px 5px 0 0;
  }

  &::disabled {
    color: GrayText;
    cursor: default;
  }

  &:focus {
    outline: none;

    &:after {
      content: '';
      position: absolute;
      height: 5px;
      left: -4px;
      right: -4px;
      bottom: -5px;
      background: #fff;
    }
  }
`
