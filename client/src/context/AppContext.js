import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        default:
            return state;
    }
};

const initialState = {
    budget: 6000,
    expenses: [
        { _id: 12, type: "shopping", amount: 40 },
        { _id: 14, type: "car service", amount: 50 },
        { _id: 13, type: "holiday", amount: 400 },
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
