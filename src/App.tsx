import React, { useState, useEffect } from 'react';

import { Form } from './components/Form';
import { Grid } from './components/Grid';
import { Header } from './components/Header';
import { Resume } from './components/Resume';

function App() {

  const data = localStorage.getItem("transactions");
  const [transactionList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    const amountExpense = transactionList
      .filter((item: any) => item.expense)
      .map((transactions: any) => Number(transactions.amount))

    const amountIncome = transactionList
      .filter((item: any) => !item.expense)
      .map((transactions: any) => Number(transactions.amount))


    const expense = amountExpense.reduce((acc: number, cur: number) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc: number, cur: number) => acc + cur, 0).toFixed(2);

    const total = Number(Math.abs(income - expense).toFixed(2));

    setIncome(income);
    setExpense(expense);
    setTotal(total);

  }, [transactionList])


  const handleAdd = (transaction: any) => {
    const newArrayTransactions = [...transactionList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  }

  return (

    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionsList={transactionList} setTransactionsList={setTransactionsList} />
    </>
  )
}

export default App
