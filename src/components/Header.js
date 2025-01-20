import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'

const HeaderContainer = styled.header`
display:flex;
justify-content: space-between;
align-items: center;
background-color: #0047ba;
padding: 10px 20px;
color: #fff;
font-weight:bold;
`

function Header(){
    return(
        <HeaderContainer>
       <h1>Meu Logotipo</h1>
       <NavBar></NavBar>
      </HeaderContainer>
    )
}

export default Header