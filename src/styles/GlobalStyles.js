import { createGlobalStyle } from 'styled-components'
import BG from '../assets/BG.png'

const GlobalStyles = createGlobalStyle`
body{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    color: #333;
    background: url('${BG}');
}

ul, li{
    list-style: style none;
    padding: 0;
    margin: 0;
}
`

export default GlobalStyles