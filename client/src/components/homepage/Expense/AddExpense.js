import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";

const AddExpense = () => {
    const { addExpense } = useContext(AppContext);

    const [name, setName] = useState("");
    const [type, setType] = useState("default");
    const [cost, setCost] = useState("");

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
            // _id: 15,
            _id: "61ec5e722442eb5d40e5e3ec",
            name: name,
            type: type,
            amount: cost,
            // isDeleted: false,
        };
        addExpense(expense);
        // dispatch({
        //     type: "ADD_EXPENSE",
        //     payload: expense,
        // });

        setName("");
        setType("default");
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
                    />
                </div>
                <div className="col-sm">
                    <label for="type">Type</label>
                    <select
                        required="required"
                        className="form-control"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="Defult" hidden>
                            Select One
                        </option>
                        <option value="Grocery">Grocery</option>
                        <option value="Clothing">Clothing</option>
                        <option value="House">House</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>
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
                    />
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
