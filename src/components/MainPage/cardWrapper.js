import styled from 'styled-components'

export const CardWrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
    transition: 0.3s;
    margin-right:30px;
    margin-left:30px;
    & > div{
        justify-self:center;
    }
`