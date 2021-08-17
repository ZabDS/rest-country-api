import React from 'react'
import { Container,Button,Label } from './styles/navbar'

export default function Navbar({children,...restProps}){
    return(
        <Container {...restProps}>{children}</Container>
    )
}

Navbar.Button = function ({children,...restProps}){
    return(
        <Button {...restProps}>{children}</Button>
    )    
}

Navbar.Label = function ({children,...restProps}){
    return(
        <Label {...restProps}>{children}</Label>
    )    
}
