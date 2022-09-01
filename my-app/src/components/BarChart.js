import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['2021-07-11', '2021-07-12','2021-07-13','2021-07-13','2021-07-14','2021-07-15','2021-07-16','2021-07-17'];

export const data = {
    labels,
    datasets: [
        {
            data: [53,42,88,14,77,68,43],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },

    ],
};

const BarChart = () => {
    return (
        <Bar options={options} data={data} />
    )

}
export default BarChart
