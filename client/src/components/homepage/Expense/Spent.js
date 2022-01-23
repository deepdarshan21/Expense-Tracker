import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

const Spent = () => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += Number(item.amount));
        // if (!item.isDeleted) {
        //     total += Number(item.amount);
        // }
        // return total;
    }, 0);

    return (
        <div className="alert alert-primary">
            {/* {console.log(totalExpenses)} */}
            <span className="highlight">Spent:</span>
            <span> ₹{totalExpenses}</span>
        </div>
    );
};

export default Spent;
