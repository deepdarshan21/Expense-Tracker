import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../../../context/AppContext";

const ExpenseList = ({_id}) => {
    const { expenses, getExpenses } = useContext(AppContext);
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

    useEffect(() => {
        // console.log("Id: ", _id);
        // const ac = new AbortController();
        const id = {
            _id: _id,
        };
        getExpenses(id);
        // return () => ac.abort(); // Abort both fetches on unmount
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
