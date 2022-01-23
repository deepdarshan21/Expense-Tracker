import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += Number(item.amount));
        // if (!item.isDeleted) {
        //     total += Number(item.amount);
        // }
        // return total;
    }, 0);

    const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

    return (
        <div className={`alert ${alertType}`}>
            <span className="highlight">Remaining:</span>
            <span> ₹{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
