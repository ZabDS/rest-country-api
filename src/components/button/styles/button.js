import styled from 'styled-components'

export const Container = styled.button`
    margin: 5px;
    padding: 4px 20px;
    max-width: 90px;

    background-color: ${props=>(props.theme.backgroundColor)};
    color: ${props=>(props.theme.textColor)};

    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 4px 2px rgba(0,0,0,0.2);
    outline: none;
    cursor: pointer;

    &:hover{
        box-shadow: 0 2px 4px 2px rgba(0,0,0,0.2);
    }
`