import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import ScatterChart from "../components/ScatterChart";
import { SteppedArea } from "../components/SteppedArea";

export default function Dashboard() {
  return (
    <div className="grid p-4 md:grid-cols-3 grid-cols-1 gap-4 mt-8">
      <BarChart />
      <PieChart />
      <SteppedArea />
      <ScatterChart />
      <LineChart />
    </div>
  );
}
