import styled from 'styled-components'

export const Container = styled.div`
    position:sticky;    
    top:0;
    z-index:1;
    margin: 0px;
    transition: 0.1s;

    font-family: 'Nunito Sans', sans-serif;
    background-color: ${props=>(props.theme.elementColor)};
    color: ${props=>(props.theme.textColor)};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.514);
    padding:10px 50px;
    
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Button = styled.div`
    font-weight: 300;
    font-size: 18px;
    cursor: pointer;
`

export const Label = styled.div`
    font-weight:600;
    font-size:20px;
`