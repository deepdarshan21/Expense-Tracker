import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";

const AddExpense = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState("");
    const [cost, setCost] = useState();

    const add = async (e) => {
        e.preventDefault();
        // axios
        //     .post("http://localhost:8080/api/user/addExpense", {
        //         email: "deep@deep.com",
        //         type: name,
        //         amount: cost,
        //     })
        //     .then((res) => {
        //         alert(res.data.message);
        //     });

        const expense = {
            _id: 13,
            type: name,
            amount: cost,
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        });

        setName("");
        setCost("");
    };

    return (
        <form>
            <div className="row">
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input
                        required="required"
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div className="col-sm">
                    <label for="cost">Cost</label>
                    <input
                        required="required"
                        type="number"
                        className="form-control"
                        id="cost"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <button type="submit" className="btn btn-primary mt-3" onClick={add}>
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpense;
