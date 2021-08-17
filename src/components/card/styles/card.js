import styled from 'styled-components'

export const Container = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    font-family: 'Nunito Sans', sans-serif;
    transition: 0.3s;
    margin: 10px;
    max-width: 250px;
    border-radius: 10px;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    & > a{
        text-decoration:none;
        color: ${props=>(props.theme.textColor)};
    }
`
export const Image = styled.img`
    width:100%;
    border-radius: 10px 10px 0 0;
`
export const Body = styled.div`
    min-height:1px;
    padding:20px;
    text-align:left;
`
export const Title = styled.div`
    font-size:18px;
    font-weight:800;
    margin-bottom: 18px
`
export const Text = styled.div`
    font-size:14px;
    margin-bottom: 20px;
`
export const Meta = styled.div`
    font-weight:600;
    margin: 5px 0;
`
export const Data = styled.span`
    color:grey;
    font-weight:400;
`