import React, { useEffect, useState } from 'react';
import './App.css';
import { AddTransaction } from './Components/AddTransaction';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { IncomeExpense } from './Components/IncomeExpense';
import { TransactionHistory } from './Components/TransactionHistory';
import { GlobalContext } from './Services/GlobalContext';
import firebase from "./Services/firebase";

function App() {
  //useEffect is used so that permission is asked once and token is also logged once
  useEffect(() => {
    const messaging = firebase.messaging();
    Notification.requestPermission().then((permission) => {
      console.log("permission", permission);
      if (permission === "granted")
      {
        messaging.getToken().then((token) => {
          console.log("Token: ");
          console.log(token);  
        })
        .catch((err) => {
          console.log("Error", err);
        })
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
      
    })
  }, [])

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
