import React from 'react'

export const IncomeExpense = (props: { income: React.ReactNode; expense: React.ReactNode }) => {
    return (
        <div>
            <div className="inc-exp-container">
                <div className="money plus">
                    <h4>INCOME</h4>
                    <h4>{props.income}</h4>
                </div>
                <div className="money minus">
                    <h4>EXPENSE</h4>
                    <h4>{Math.abs(Number(props.expense))}</h4>
                </div>
            </div>
        </div>
    )
}
