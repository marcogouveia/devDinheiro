import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #FFF;
    border-radius: 15px;
    padding: 5px 15px;
    width: 28%;

    border: 1px solid #242D40;

    @media (max-width:750px){
        width: 30%;
        
        p{
            font-size: 12px;
        }

        span{
            font-size: 20px;
        }

        svg{
            display: none;
        }
    
    }

`

export const Header = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 20px;

    svg{
        color: #242D40;
        font-size: 30px;
    }

`
export const HeaderTitle = styled.h3`
    font-size: 24px;
    font-weight: 400;
`

export const Content = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 20px;

`

export const ContentMoeda = styled.span`
    font-size: 40px;
`

export const ContentTotal = styled.span`
    font-size: 40px;
`