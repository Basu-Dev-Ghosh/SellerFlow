"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
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
      position: "top" as const,
    },
    title: {
      display: true,

      text: "Sale chart ",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Realme 10 pro",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Asus Vivobook 15",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Oppo f18",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 62, 100, 0.5)",
    },
    {
      label: "Samsung Galaxy ",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 12, 255, 0.5)",
    },
  ],
};

export default function Analytics() {
  return (
    <div className="flex flex-col px-4 md:px-16 py-4 md:py-16 w-[66%] md:w-full">
      <div className="grid grid-rows-4 grid-flow-col gap-4 mt-10">
        <div className="md:row-span-4 bg-blue-300 md:h-52 flex flex-col justify-center items-center py-8 w-3/4">
          <p className=" text-xs text-gray-700">Top Selling Product</p>
          <p className="text-3xl text-gray-900 mt-2 text-center">
            Realme 10 pro
          </p>
        </div>
        <div className="flex w-3/4 md:w-full">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
}
