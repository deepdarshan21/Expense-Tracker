import { createContext, useReducer } from "react";
import axios from "axios";

const AppReducer = (state, action) => {
    switch (action.type) {
        case "GET_TRANSACTIONS":
            return {
                ...state,
                expenses: action.payload,
            };
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        // case "GET_ID":
        //     // console.log(st);
        //     return {
        //         ...state,
        //         _id: action.payload,
        //     };
        // case "DELETE_EXPENSE":
        //     const index = state.expenses.findIndex((expense) => expense._id === action.payload);
        //     console.log(state.expenses[index]);
        //     state.expenses[index].isDeleted = !state.expenses[index].isDeleted;
        //     return {
        //         ...state,
        //         // expenses: state.expenses.filter((expense) => expense._id !== action.payload),
        //         expenses: state.expenses,
        //     };
        default:
            return state;
    }
};

const initialState = {
    _id: 0,
    budget: 2,
    expenses: [],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    const addExpense = async (expense) => {
        await axios.post("http://localhost:8080/api/user/addExpense", expense);
        // console.log("run");
        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        });
    };

    const getExpenses = async (id) => {
        const res = await axios.post("http://localhost:8080/api/user/fetchExpense", id);
        dispatch({
            type: "GET_TRANSACTIONS",
            payload: res.data.expense,
        });
    };

    return (
        <AppContext.Provider
            value={{
                _id: state._id,
                budget: state.budget,
                expenses: state.expenses,
                // dispatch,
                addExpense,
                getExpenses,
                // dispatch
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
