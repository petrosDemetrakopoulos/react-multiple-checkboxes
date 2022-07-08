import React, { ChangeEventHandler } from 'react'
import styled from 'styled-components'

const CheckBox = styled.input`
  margin: 6px 10px 5.8px 3px;
  border-radius: 2px;
  border: solid 1px #c6c4d2;
  width: 5%;
  float: left;
  background: ${(porps) => (porps.checked ? '#482474' : '#fbfcff')};
`
const Container = styled.div`
  margin-bottom: 0px !important;
  margin-top: 2px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`
const Description = styled.p`
  padding-bottom: 1px;
  margin-top: 4px;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
`

const ListItem: React.FC<{
  text: string
  handleOnChange: ChangeEventHandler
  selected: boolean
}> = ({ text, handleOnChange, selected }) => {
  return (
      <Container>
        <CheckBox
          type="checkbox"
          checked={selected}
          onChange={handleOnChange} 
        ></CheckBox>
        <Description className="column" style={{width: '33%', float:'left'}}>
          {text}
        </Description>
      </Container>
  )
}

export default ListItem
