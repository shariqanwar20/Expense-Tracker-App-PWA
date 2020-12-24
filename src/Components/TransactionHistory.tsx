import React, { useContext } from 'react'
import { transactionContext } from '../Services/GlobalContext'

export const TransactionHistory = (props: { amountCalc: (arg0: number) => void; }) => {
    const transContext = useContext(transactionContext);

    const handleRemove = (id: number) => {
        if (transContext.removeTransaction)
        {
            let ind = -1;
            for (let i = 0; i < transContext.transactions.length; i++)
            {
                if (transContext.transactions[i].id === id)
                {
                    ind = i;
                }
            }
            props.amountCalc(transContext.transactions[ind].amount);
            transContext.removeTransaction(id);
        }
    }
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transContext.transactions.map((transObj) => {
                    return(
                        <li className={transObj.amount < 0 ? "minus" : "plus"} key={transObj.id} >
                            {transObj.description}
                            <span>
                                {transObj.amount}
                            </span>
                            <button className="delete-btn" onClick={() => handleRemove(transObj.id)}>
                                X
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
