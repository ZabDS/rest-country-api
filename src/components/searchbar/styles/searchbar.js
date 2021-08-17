import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'Nunito Sans', sans-serif;
    transition: 0.3s;
    color: ${props=>(props.theme.textColor)};
    
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing:border-box;
    margin: 20px 30px;

    @media (max-width: 570px) {
        flex-direction: column;
    }
    `

export const Input = styled.input`
    font-weight: 400;
    font-size: 14px;
    padding: 10px 50px;
    color: ${props=>(props.theme.textColor)};
    background-color: ${props=>(props.theme.elementColor)};
    /* margin-left:25px; */
    border:none;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.214);
    width:35vw;
    // max-height: 20px;
    outline:none;

    @media (max-width: 570px) {
        width:50vw;
    }

`

export const InputIconWrapper = styled.div`
    width:800px;
    position: relative;
    right:-1;
    & > i{
        position: absolute;
        left:15px;
        top: 11px;
    }

    @media (max-width: 570px) {
        margin-bottom: 20px;
    }
`

export const MenuWrapper = styled.div`
    font-weight:600;
    font-size:20px;
`
export const Menu = styled.div`
    font-weight:600;
    font-size:20px;
`

export const MenuElements = styled.div`
    font-weight:600;
    font-size:20px;
`