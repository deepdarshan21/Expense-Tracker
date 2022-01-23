import { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { AppContext } from "../../../context/AppContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const Summary = () => {
    const { budget, expenses } = useContext(AppContext);

    const Grocery = expenses.reduce((total, item) => {
        // return (total += Number(item.amount));
        if (item.type === "Grocery") {
            total += Number(item.amount);
        }
        return total;
    }, 0);

    const Clothing = expenses.reduce((total, item) => {
        if (item.type === "Clothing") {
            total += Number(item.amount);
        }
        return total;
    }, 0);

    const House = expenses.reduce((total, item) => {
        if (item.type === "House") {
            total += Number(item.amount);
        }
        return total;
    }, 0);

    const Miscellaneous = expenses.reduce((total, item) => {
        if (item.type === "Miscellaneous") {
            total += Number(item.amount);
        }
        return total;
    }, 0);

    const Remaining =
        budget > Grocery + Clothing + House + Miscellaneous
            ? budget - Grocery - Clothing - House - Miscellaneous
            : 0;

    const data = {
        labels: ["Grocery", "Clothing", "House", "Miscellaneous", "Remaining"],
        datasets: [
            {
                label: "Expense",
                data: [Grocery, Clothing, House, Miscellaneous, Remaining],
                backgroundColor: ["Yellow", "Pink", "Orange", "Indigo", "Green"],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="pie-around">
            <div className="pie">
                <Pie
                    data={data}
                    options={{
                        responsive: true,
                    }}
                />
            </div>
        </div>
    );
};

export default Summary;
