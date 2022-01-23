// import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
// import { AppContext } from "../../../context/AppContext";

const ExpenseItem = ({ name, type, cost }) => {
    // const { dispatch } = useContext(AppContext);
    // const [toDelete, setDelete] = useState(isDeleted ? "delete" : "");

    // const handleDeleteExpense = () => {
    //     dispatch({
    //         type: "DELETE_EXPENSE",
    //         payload: id,
    //     });
    // isDeleted ? setDelete("") : setDelete("delete");
    // };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>{name}</div>
            <div className="badge bg-info badge-pill ">{type}</div>
            <div>
                <span className="badge bg-primary badge-pill mr-3">₹ {cost}</span>
                <TiDelete size="1.5em"></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;
