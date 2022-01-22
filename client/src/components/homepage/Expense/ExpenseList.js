import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../../../context/AppContext";

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    // const expenses = [
    //     { id: 12, type: "shopping", amount: 40 },
    //     { id: 13, type: "holiday", amount: 400 },
    //     { id: 14, type: "car service", amount: 50 },
    // ];

    // const [expenses, setExpenses] = useState([]);

    // useEffect(() => {
    //     const fetchExpense = () => {
    //         axios
    //             .post("http://localhost:8080/api/user/fetchExpense", {
    //                 email: "deep@deep.com",
    //             })
    //             .then((res) => {
    //                 setExpenses(res.data.expense);
    //             });
    //     };
    //     fetchExpense();
    // }, []);

    return (
        <ul className="list-group">
            {expenses.map(({ _id, type, amount }) => (
                <ExpenseItem id={_id} name={type} cost={amount} />
            ))}
        </ul>
    );
};

export default ExpenseList;
