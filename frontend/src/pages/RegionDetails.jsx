import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function RegionDetails() {
  const { id } = useParams();

  const [region, setRegion] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchRegion();
  }, []);

  const fetchRegion = async () => {
    try {
      const response =
        await api.get(`/regions/${id}`);

      setRegion(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-white">
        Loading intelligence...
      </div>
    );
  }

  if (!region) {
    return (
      <div className="p-8 text-red-400">
        Region not found
      </div>
    );
  }

  return (
    <div className="p-8 text-white">

      {/* Header */}

      <div
        className="
        bg-[#10182B]
        border
        border-cyan-500/20
        rounded-2xl
        p-6
        mb-6
        "
      >
        <div className="flex justify-between">

          <div>

            <h1
              className="
              text-4xl
              font-bold
              "
            >
              {region.name}
            </h1>

            <p
              className="
              text-slate-400
              mt-2
              "
            >
              Regional Intelligence Overview
            </p>

          </div>

          <div
            className="
            text-center
            "
          >
            <p className="text-slate-400">
              Risk Score
            </p>

            <h2
              className="
              text-5xl
              font-bold
              text-red-400
              "
            >
              {region.riskScore}
            </h2>

          </div>

        </div>

      </div>

      {/* Grid */}

      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-6
        "
      >

        {/* Overview */}

        <div
          className="
          bg-[#10182B]
          border
          border-slate-700
          rounded-2xl
          p-6
          "
        >
          <h3
            className="
            text-cyan-400
            font-semibold
            mb-4
            "
          >
            Overview
          </h3>

          <p className="text-slate-300">
            {region.summary}
          </p>
        </div>

        {/* Risk Meter */}

        <div
          className="
          bg-[#10182B]
          border
          border-slate-700
          rounded-2xl
          p-6
          "
        >
          <h3
            className="
            text-cyan-400
            font-semibold
            mb-4
            "
          >
            Threat Assessment
          </h3>

          <div
            className="
            h-4
            bg-slate-800
            rounded-full
            overflow-hidden
            "
          >
            <div
              className="
              h-full
              bg-gradient-to-r
              from-yellow-500
              via-orange-500
              to-red-500
              "
              style={{
                width: `${region.riskScore}%`,
              }}
            />
          </div>

          <p className="mt-3 text-slate-400">
            Current regional risk level:
            {" "}
            {region.riskScore}/100
          </p>
        </div>

        {/* Conflicts */}

        <div
          className="
          bg-[#10182B]
          border
          border-slate-700
          rounded-2xl
          p-6
          "
        >
          <h3
            className="
            text-cyan-400
            font-semibold
            mb-4
            "
          >
            Active Conflicts
          </h3>

          <h2
            className="
            text-5xl
            font-bold
            text-orange-400
            "
          >
            {region.activeConflicts}
          </h2>
        </div>

        {/* Forecast */}

        <div
          className="
          bg-[#10182B]
          border
          border-slate-700
          rounded-2xl
          p-6
          "
        >
          <h3
            className="
            text-cyan-400
            font-semibold
            mb-4
            "
          >
            Forecast
          </h3>

          <div className="space-y-4">

            <div>
              <div className="flex justify-between">
                <span>Escalation</span>
                <span>
                  {region.forecast?.escalation}%
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>Stability</span>
                <span>
                  {region.forecast?.stability}%
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>De-escalation</span>
                <span>
                  {region.forecast?.deEscalation}%
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}