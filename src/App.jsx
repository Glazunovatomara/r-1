import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Language", "Speakers (in milliard)"],
  ["Английский", 1.452],
  ["Китайский (мандаринский диалект)", 1.118],
  ["Хинди", 0.602],
  ["Испанский", 0.534],
  ["Арабский", 0.372],
  ["Французский", 0.300],
  ["Бенгальский", 0.265],
  ["Русский", 0.258],
];

export const options = {
  legend: "none",
  pieSliceText: "label",
  title: "Самые популярные языки в мире в 2024 году",
  pieStartAngle: 100,
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
    />
  );
}

export default App;