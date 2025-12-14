import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  Laptop,
  RotateCcw,
  Clock,
  Building2,
  Sparkles
} from "lucide-react";

const EmployeeOverview = () => {
  const { user } = useAuth();

  const [stats, setStats] = useState({
    totalAssets: 0,
    returnable: 0,
    nonReturnable: 0,
    pendingRequests: 0,
    companies: 0
  });

  useEffect(() => {
    // demo data (later API)
    setStats({
      totalAssets: 6,
      returnable: 3,
      nonReturnable: 3,
      pendingRequests: 1,
      companies: 2
    });
  }, []);

  return (
    <div className="space-y-10">
      {/* WELCOME */}
      <div className="bg-base-100 p-8 rounded-2xl shadow">
        <div className="flex items-center gap-3">
          <Sparkles
            className="w-7 h-7 
            bg-gradient-to-r from-indigo-500 to-cyan-400 
            bg-clip-text text-transparent"
          />
          <h1
            className="text-3xl font-bold 
            bg-gradient-to-r from-indigo-500 to-cyan-400 
            bg-clip-text text-transparent"
          >
            Welcome back, {user?.name}
          </h1>
        </div>

        <p className="mt-3 text-gray-500 max-w-xl">
          Here’s a quick overview of your assigned assets, requests,
          and company affiliations inside AssetVerse.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {/* TOTAL ASSETS */}
        <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <Laptop className="w-6 h-6 text-indigo-500" />
            <h3 className="font-semibold">Total Assets</h3>
          </div>
          <p
            className="text-4xl font-bold 
            bg-gradient-to-r from-indigo-500 to-cyan-400 
            bg-clip-text text-transparent"
          >
            {stats.totalAssets}
          </p>
        </div>

        {/* RETURNABLE */}
        <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <RotateCcw className="w-6 h-6 text-cyan-500" />
            <h3 className="font-semibold">Returnable</h3>
          </div>
          <p className="text-4xl font-bold">{stats.returnable}</p>
        </div>

        {/* NON RETURNABLE */}
        <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <Laptop className="w-6 h-6 text-purple-500" />
            <h3 className="font-semibold">Non-returnable</h3>
          </div>
          <p className="text-4xl font-bold">{stats.nonReturnable}</p>
        </div>

        {/* PENDING */}
        <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-6 h-6 text-warning" />
            <h3 className="font-semibold">Pending Requests</h3>
          </div>
          <p className="text-4xl font-bold text-warning">
            {stats.pendingRequests}
          </p>
        </div>

        {/* COMPANIES */}
        <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <Building2 className="w-6 h-6 text-success" />
            <h3 className="font-semibold">Companies</h3>
          </div>
          <p className="text-4xl font-bold">{stats.companies}</p>
        </div>
      </div>

      {/* EMPTY STATE */}
      {stats.totalAssets === 0 && (
        <div className="bg-base-100 p-10 rounded-2xl text-center shadow">
          <h3 className="text-xl font-semibold">
            No assets assigned yet
          </h3>
          <p className="text-gray-500 mt-2">
            Request an asset to get started with your company.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmployeeOverview;
