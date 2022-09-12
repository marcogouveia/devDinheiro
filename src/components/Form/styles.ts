import styled from "styled-components";

export const Container = styled.div`

    background-color: #FFF;
    border-radius: 15px;
    border: 1px solid #000;
    box-shadow: 0 0 5px #ccc;

    width: 90%;
    max-width: 1440px;
    margin: 40px auto;

    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 10px;


    @media (max-width: 750px) {
        display: grid;
    }

`

export const InputContent = styled.div`

    display: flex;
    flex-direction: column;

`

export const Label = styled.label`
`

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #242D40;

   
`
export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-left: 20px;
        accent-color: #242D40;
        margin-top: 0;
        margin-right: 5px;
    }
`

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #FFF;
    background-color: #242D40;
    transition: all 0.3s ease-in-out;

    font-size: 18px;

    &:hover{
        background-color: green;
    }



`
