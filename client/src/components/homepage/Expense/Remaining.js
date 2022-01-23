import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += Number(item.amount));
    }, 0);

    const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

    return (
        <div className="budget-spend-remain">
            <div className={`alert ${alertType} highlight-box`}>
                <span className="highlight">Remaining:</span>
                <span> ₹{budget - totalExpenses}</span>
            </div>
        </div>
    );
};

export default Remaining;
