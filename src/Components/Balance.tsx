import React from 'react'

export const Balance = (props: { balance: React.ReactNode }) => {
    return (
        <div>
            <h3>Current Balance</h3>
            <h1>${props.balance}</h1>
        </div>
    )
}
