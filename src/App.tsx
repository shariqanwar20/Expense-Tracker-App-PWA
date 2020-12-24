import React, { useState } from 'react';
import './App.css';
import { AddTransaction } from './Components/AddTransaction';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { IncomeExpense } from './Components/IncomeExpense';
import { TransactionHistory } from './Components/TransactionHistory';
import { GlobalContext } from './Services/GlobalContext';

function App() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const AmountCalc = (value: number) => {
    if (value > 0)
      setIncome(income + value);
    else
      setExpense(expense + value);
    setBalance(balance + value);
  }
  const RemoveCalc = (value: number) => {
    if (value > 0)
      setIncome(income - value);
    else
      setExpense(expense - value);
    setBalance(balance - value);
  }

  return (
    <GlobalContext>
      <Header />
      <div className="container">
        <Balance balance={balance}/>
        <IncomeExpense income={income} expense={expense}/>
        <TransactionHistory amountCalc = {RemoveCalc}/>
        <AddTransaction amountCalc = {AmountCalc}/>
      </div>
    </GlobalContext>
  );
}

export default App;
