import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    
    height:90vh; 
    & > button{        
        margin-left:70px;
    }
    @media (max-width: 570px) {
        flex-direction: row;  
        justify-content: right;    
    }
`

export const ContentWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;

    transition: 0.3s;
    margin-right:30px;
    margin-left:30px;
    flex-wrap: wrap;

    & > div{
        padding: 20px;
        max-width: 35vw;
    }

    @media (max-width: 570px) {
        & > div{
            padding: 20px;
            max-width: 70vw;
        }
    }
`
export const ImgWrapper = styled.div`
    max-width: 35vw;
    & > img{
        width: 100%;
    }
    @media (max-width: 570px) {
        max-width: 70vw;
    }
`

export const DataWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 35vw;

    @media (max-width: 570px) {
        display:flex;
        flex-direction: column;
        justify-content: right;

        max-width: 70vw;
    }
`

export const ButtonWrapper = styled.div`
    max-width: 35vw;
    margin-bottom:30px;
    @media (max-width: 570px) {
        max-width: 70vw;
        
    }
`