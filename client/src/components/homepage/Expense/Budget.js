import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdOutlineDoneAll } from "react-icons/md";

const Budget = () => {
    const { budget, updateBudget } = useContext(AppContext);
    const [ editBudget, setEditBudget ] = useState(budget);
    // setEditExpense(budget)
    const edit=()=>{
        // alert("Clicked")
        document.getElementsByClassName("show")[0].classList.add("hide");
        document.getElementsByClassName("edit")[0].classList.remove("hide");
    }

    const done = () => {
        // alert("Clicked")
        document.getElementsByClassName("edit")[0].classList.add("hide");
        document.getElementsByClassName("show")[0].classList.remove("hide");
        console.log("Deep",editBudget);
        updateBudget(editBudget)
    };

    return (
        <div className="budget-spend-remain">
            <div className="alert alert-secondary highlight-box">
                <span className="highlight">Budget:</span>
                <span className="show">
                    <span> ₹ {budget}</span>
                    <AiTwotoneEdit size="1.5em" onClick={edit} />
                </span>
                <span className="edit hide">
                    <input
                        type="text"
                        size="4"
                        value={editBudget}
                        onChange={(e) => setEditBudget(e.target.value)}
                    />
                    <MdOutlineDoneAll size="1.5em" onClick={done} />
                </span>
            </div>
        </div>
    );
};

export default Budget;
