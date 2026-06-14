import { useEffect, useState } from "react";
import StatCard from "../components/dashboard/StatCard";
import IntelligenceMap from "../components/map/IntelligenceMap";
import { getDashboardStats } from "../services/dashboardService";

export default function Dashboard() {
  const [stats, setStats] = useState({
    activeConflicts: 0,
    threatIndex: 0,
    alerts: 0,
    forecastAccuracy: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error(
          "Failed to load dashboard stats:",
          error
        );
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-8">
      <div className="mb-10">
        <h1
          className="
          text-4xl
          font-bold
          text-white
          "
        >
          Global Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Operational overview of geopolitical
          activity, intelligence streams and
          predictive forecasts.
        </p>
      </div>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        "
      >
        <StatCard
          title="Active Conflicts"
          value={stats.activeConflicts}
          color="text-red-400"
        />

        <StatCard
          title="Threat Index"
          value={stats.threatIndex}
          color="text-cyan-300"
        />

        <StatCard
          title="Alerts"
          value={stats.alerts}
          color="text-yellow-400"
        />

        <StatCard
          title="Forecast Accuracy"
          value={`${stats.forecastAccuracy}%`}
          color="text-green-400"
        />
      </div>

            <div
        className="
        mt-8
        bg-[#1A1F30]
        border
        border-[#3C494E]
        rounded-xl
        p-6
        "
      >
        <h2
          className="
          text-lg
          font-semibold
          text-cyan-300
          mb-4
          "
        >
          Situation Overview
        </h2>

        <p className="text-slate-400">
          Monitor conflict zones, sanctions,
          military deployments, diplomatic
          developments and strategic risks
          across the globe in real time.
        </p>
      </div>

      <div
        className="
        mt-8
        bg-[#1A1F30]
        border
        border-[#3C494E]
        rounded-xl
        p-6
        "
      >
        <h2
          className="
          text-2xl
          font-semibold
          text-cyan-300
          mb-6
          "
        >
          Global Intelligence Map
        </h2>

        <IntelligenceMap />
      </div>
    </div>
  );
}