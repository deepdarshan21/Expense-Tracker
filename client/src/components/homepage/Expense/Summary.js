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
        // return (total += Number(item.amount));
        if (item.type === "Clothing") {
            total += Number(item.amount);
        }
        return total;
    }, 0);

    const House = expenses.reduce((total, item) => {
        // return (total += Number(item.amount));
        if (item.type === "House") {
            total += Number(item.amount);
        }
        return total;
    }, 0);


    const Remaining = budget - Grocery - Clothing - House;

    const data = {
        labels: ["Grocery", "Clothing", "House", "Remaining"],
        datasets: [
            {
                label: "Expense",
                data: [Grocery, Clothing, House, Remaining],
                backgroundColor: ["Yellow", "Pink", "Orange", "Green"],
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
                        // maintainAspectRatio: false,
                    }}
                />
            </div>
        </div>
    );
};

export default Summary;
