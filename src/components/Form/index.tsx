import React, { useState } from "react"
import { Grid } from "../Grid";
import * as Com from "./styles"

interface AddProps {
    handleAdd: (transaction: object) => void,
    transactionsList: Array<object>,
    setTransactionsList: any,
}

export const Form = (props: AddProps) => {

    const [descricao, setDescricao] = useState("")
    const [amount, setAmount] = useState("")
    const [isExpense, setExpense] = useState(false)

    const generateID = () => {
        Math.round(Math.random() * 1000);
    }


    const handleSave = () => {

        console.log(`Descrição ${descricao} - Valor: ${amount} - Tipo: ${isExpense}`);

        const valor: Number = parseInt(amount);

        if (!descricao || !amount) {
            alert("Preencha corretamente os dados!")
            return;
        } else if (valor < 1) {
            alert("Informe o valor corretamente!")
            return;
        }


        const transaction = {
            id: generateID(),
            descricao: descricao,
            amount: amount,
            expense: isExpense,
        }

        props.handleAdd(transaction);

        setDescricao("");
        setAmount("");

    }

    return (
        <>
            <Com.Container>
                <Com.InputContent>
                    <Com.Label>Descrição</Com.Label>
                    <Com.Input value={descricao} type="text" placeholder="Descrição do Gasto" onChange={(e) => { setDescricao(e.target.value) }} />
                </Com.InputContent>

                <Com.InputContent>
                    <Com.Label>Valor</Com.Label>
                    <Com.Input value={amount} type="number" placeholder="Valor" onChange={(e) => { setAmount(e.target.value) }} />
                </Com.InputContent>

                <Com.RadioGroup>
                    <Com.Input type="radio" id="typeIncome" defaultChecked name="group1" onChange={() => { setExpense(!isExpense) }} />
                    <Com.Label htmlFor="typeIncome">Entrada</Com.Label>
                    <Com.Input type="radio" id="typeExpense" name="group1" onChange={() => { setExpense(!isExpense) }} />
                    <Com.Label htmlFor="typeExpense">Gasto</Com.Label>
                </Com.RadioGroup>



                <Com.Button onClick={handleSave} >Adicionar </Com.Button>
            </Com.Container>

            
        </>
    )
}