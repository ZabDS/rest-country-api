import React from 'react'
import { Container,Image, Body, Title, Text, Meta, Data } from './styles/card'

export default function Card({children,...restProps}){
    return(
        <Container {...restProps}>{children}</Container>
    )
}

Card.Image = function CardImage({src,alt,...restProps}){
    return(
        <Image src={src} alt={alt} {...restProps}/>
    )
}

Card.Body = function CardBody({children,...restProps}){
    return(
        <Body {...restProps}>{children}</Body>
    )
}

Card.Title = function CardTitle({children,...restProps}){
    return(
        <Title {...restProps}>{children}</Title>
    )
}

Card.Text = function CardText({children,...restProps}){
    return(
        <Text {...restProps}>{children}</Text>
    )
}

Card.Meta = function CardMeta({children,data,...restProps}){
    return(
        <Meta{...restProps}>{children}<Card.Data>{data}</Card.Data></Meta>
    )
}

Card.Data = function CardData({children,...restProps}){
    return(
        <Data{...restProps}>{children}</Data>
    )
}