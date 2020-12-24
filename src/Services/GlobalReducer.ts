import { reducerActionType, transactionType } from "../Types/expenseTypes";

export const GlobalReducer = (state: transactionType[] , action: reducerActionType): transactionType[]=> {
    switch (action.command) {
        case "ADDTRANSACTION":
        {
            if (action.payload)
            {
                const newTransaction: transactionType = {
                    id: action.transactionId,
                    description: action.payload.description,
                    amount: action.payload.amount
                }
                return [...state, newTransaction];
            }
            else
                return state;
        }
        case "REMOVETRANSACTION":
        {
            let newState: transactionType[] = [];
            for (let i = 0; i < state.length; i++)
            {
                if (state[i].id !== action.transactionId)
                    newState.push(state[i]);
            }
            return newState;
        }   
        default:
            return state;
    }
}