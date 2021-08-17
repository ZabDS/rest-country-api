import styled from 'styled-components'

export const DropdownWrapper = styled.div`
    font-family: 'Nunito Sans', sans-serif;
    color: ${props=>(props.theme.textColor)};
    font-weight: 400;
    font-size: 14px;    
    position:relative;
    margin-right: 20px;
    `

export const Mainmenubtn = styled.div `
    font-weight: 400;
    font-size: 14px;
    padding: 10px 20px;
    margin-bottom: 5px;
    width: 120px;

    color: ${props=>(props.theme.textColor)};
    background-color: ${props=>(props.theme.elementColor)};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.214);
    border:none;
    border-radius: 5px;
    outline:none;
    cursor: pointer;
`

export const MenuElementWrapper = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.214);
    border-radius: 5px;
    margin-top: 5px;  
    position: absolute;
    width: 160px;
`

export const MenuElement = styled.div`
    cursor:pointer;
    padding: 10px 20px;

    background-color: ${props=>(props.theme.elementColor)};
    &:hover{
        background-color: ${props=>(props.theme.backgroundColor)};
    };
`