export type contextType = {
    transactions: transactionType[], 
    addTransaction?: (value: {id: number, description: string, amount: number}) => void,
    removeTransaction?: (id: number) => void;
};
export type reducerActionType = {
    transactionId: number,
    command: string, 
    payload?: {description: string, amount: number}
};

export type transactionType = {
    id: number,
    description: string, 
    amount: number
};