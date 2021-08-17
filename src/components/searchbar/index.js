import React from 'react'
import { Container,Input,MenuWrapper,Menu,MenuElements,InputIconWrapper } from './styles/searchbar'

export default function Searchbar({children,...restProps}){
    return(
        <Container {...restProps}>{children}</Container>
    )
}

Searchbar.Input = function ({children,...restProps}){
    return(
        <Input {...restProps}>{children}</Input>
    )    
}

Searchbar.IconInput = function ({children,...restProps}){
    return(
        <InputIconWrapper>
            <i className="fas fa-search"></i>
            <Input {...restProps}>{children}</Input>
        </InputIconWrapper>
    )
}

Searchbar.MenuWrapper = function ({children,...restProps}){
    return(
        <MenuWrapper {...restProps}>{children}</MenuWrapper>
    )    
}

Searchbar.Menu = function ({children,...restProps}){
    return(
        <Menu {...restProps}>{children}</Menu>
    )    
}

Searchbar.MenuElements = function ({children,...restProps}){
    return(
        <MenuElements {...restProps}>{children}</MenuElements>
    )    
}