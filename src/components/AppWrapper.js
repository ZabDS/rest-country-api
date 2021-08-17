import styled from "styled-components";

export default styled.div`
    margin:0;
    background-color: ${props=>(props.theme.backgroundColor)};
    color: ${props=>(props.theme.textColor)};
    font-family: 'Nunito Sans', sans-serif;
`