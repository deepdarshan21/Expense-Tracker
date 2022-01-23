import { useContext, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../../../context/AppContext";

const ExpenseList = ({ _id }) => {
    const { expenses, getExpenses } = useContext(AppContext);

    useEffect(() => {
        const id = {
            _id: _id,
        };
        getExpenses(id);
    }, [_id, getExpenses]);

    return (
        <ul className="list-group">
            {expenses.map(({ name, type, amount }) => (
                <ExpenseItem name={name} type={type} cost={amount} />
            ))}
        </ul>
    );
};

export default ExpenseList;
