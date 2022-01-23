import "./homepage.css";
import Budget from "./Expense/Budget";
import Remaining from "./Expense/Remaining";
import Spent from "./Expense/Spent";
import ExpenseList from "./Expense/ExpenseList";
import AddExpense from "./Expense/AddExpense";
import Summary from "./Expense/Summary";

const Homepage = ({ setLoginUser, value }) => {
    const logOut = () => {
        setLoginUser({});
    };

    return (
        <div className="container">
            <div className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-2 h1">{value.name}</span>
                <button className="my-2 my-sm-0 btn btn-outline-danger" onClick={logOut}>
                    Logout
                </button>
            </div>
            <h1 className="mt-3">My Budget Planner</h1>
            <div className="row mt-3">
                <div className="col-sm">
                    <Budget _id={value._id} />
                </div>
                <div className="col-sm">
                    <Remaining />
                </div>
                <div className="col-sm">
                    <Spent />
                </div>
            </div>
            <h3 className="mt-3">Expense History</h3>
            <div className="row mt-3">
                <div className="col-sm">
                    <ExpenseList _id={value._id} />
                </div>
            </div>
            <h3 className="mt-3">Add Expense</h3>
            <div className="row mt-3">
                <div className="col-sm">
                    <AddExpense _id={value._id} />
                </div>
            </div>
            <h3 className="mt-3">Add Expense</h3>
            <Summary />
        </div>
    );
};

export default Homepage;
