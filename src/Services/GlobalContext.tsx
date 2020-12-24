import React, { createContext, useReducer } from 'react'
import { contextType, transactionType } from '../Types/expenseTypes';
import { GlobalReducer } from './GlobalReducer';

let initialTransaction: contextType = {transactions: []};

export const transactionContext = createContext<contextType>(initialTransaction);

export const GlobalContext:React.FC<React.ReactNode> = ({ children }) => {
    let [state, dispatch] = useReducer(GlobalReducer, []);

    const addTransaction = (value: transactionType) => {
        dispatch({
            transactionId: value.id,
            command : "ADDTRANSACTION",
            payload : {
                "description" : value.description,
                "amount" : value.amount
            }
        })
    }
    const removeTransaction = (id: number) => {
        dispatch({
            command: "REMOVETRANSACTION",
            transactionId: id
        })
    }
    return (
        <transactionContext.Provider value={
            {
                transactions : state,
                addTransaction,
                removeTransaction
            } 
        }>
            {children}
        </transactionContext.Provider>
    )
}
