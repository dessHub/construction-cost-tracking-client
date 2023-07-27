import { FC } from "react";
import { Bar } from 'react-chartjs-2';

const HorizontalBar = () => {
    const options = {
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
            colors: {
                enabled: true
            },
            legend: {
                position: 'right' as const,
            },
            title: {
                display: true,
                text: 'Cost Per Materials used',
            },
        },
    };
    const labels = ["one", "two", "three", "Four", "Five", "Six", "Sev"];
    const data = {
    labels: labels,
    datasets: [{
        axis: 'y',
        label: 'Amount in KES',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderWidth: 1
    }]
    };

    return  (
        <>
          <Bar  options={options} data={data} />
        </>
    )
}

export default HorizontalBar;