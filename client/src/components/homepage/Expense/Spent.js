import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

const Spent = () => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += Number(item.amount));
    }, 0);

    return (
        <div className="budget-spend-remain">
            <div className="alert alert-primary highlight-box">
                <span className="highlight">Spent:</span>
                <span> ₹{totalExpenses}</span>
            </div>
        </div>
    );
};

export default Spent;
