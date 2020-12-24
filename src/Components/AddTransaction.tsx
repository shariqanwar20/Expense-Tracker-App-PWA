import React, { useContext, useState } from 'react'
import { transactionContext } from '../Services/GlobalContext';
import { contextType } from '../Types/expenseTypes';

export const AddTransaction = (props: { amountCalc: (arg0: number) => void; }) => {
    const [description, setDescription] = useState("");
    const [id, setId] = useState(0);
    const [amount, setAmount] = useState(0);
    const transContext = useContext<contextType>(transactionContext);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (transContext.addTransaction)
        {
            setId(id + 1);
            transContext.addTransaction({id: id, description: description, amount: amount});
            props.amountCalc(amount);
        }
    }
    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Description</label>
                <input type="text" required placeholder="Detail Of Transaction" onChange={(e) => setDescription(e.target.value)}/>
                <label htmlFor="number">Transaction Amount</label>
                <input type="number" required placeholder="Dollar Value Of Transaction" onChange={(e) => setAmount(Number(e.target.value))}/>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
