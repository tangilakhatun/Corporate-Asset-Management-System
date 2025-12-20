import React, { useEffect, useState } from "react";
import { getAssets, deleteAsset, updateAsset, getTopRequestedAssets } from "../../services/api";
import { getRequests } from "../../services/api";
import toast from "react-hot-toast";
import AssetCard from "../../component/assetcard/AssetCard";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer as BarResponsive } from "recharts";

const COLORS = ["#4f46e5", "#06b6d4"]; 
const HRDashboardHome = () => {
  const [assets, setAssets] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetchAssets();
    fetchCharts();
  }, []);

  const fetchAssets = async () => {
    try {
      const res = await getAssets();
      setAssets(res.data);
    } catch (err) {
      toast.error("Failed to fetch assets ❌");
      console.log(err);
    }
  };

  const fetchCharts = async () => {
    try {
      const resAssets = await getAssets();
      const returnable = resAssets.data.filter(a => a.productType === "Returnable").length;
      const nonReturnable = resAssets.data.filter(a => a.productType === "Non-returnable").length;
      setPieData([
        { name: "Returnable", value: returnable },
        { name: "Non-returnable", value: nonReturnable }
      ]);

     //  (Top 5 Requested Assets)
    const resTop = await getTopRequestedAssets(); 
    setBarData(resTop.data);

     
    } catch (err) {
      toast.error("Failed to fetch charts ❌");
      console.log(err);
    }
  };

  const handleEdit = async (asset) => {
  const newName = prompt("Enter new product name", asset.productName);
  if (!newName) return;

  try {
    
    await updateAsset(asset._id, { productName: newName });
    toast.success("Asset updated successfully! 🎉");
    fetchAssets(); 
  } catch (err) {
    toast.error("Failed to update asset ❌");
    console.log(err);
  }
};


  const handleDelete = async (asset) => {
    if (!window.confirm("Are you sure to delete this asset?")) return;
    try {
      await deleteAsset(asset._id);
      toast.success("Asset deleted successfully! 🎉");
      setAssets(prev => prev.filter(a => a._id !== asset._id));
    } catch (err) {
      toast.error("Failed to delete asset ❌");
      console.log(err);
    }
  };

  const totalPages = Math.ceil(assets.length / pageSize);
  const paginatedAssets = assets.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">HR Dashboard Home</h1>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-4 shadow-md bg-base-100">
          <h2 className="font-semibold mb-2 text-center">Assets Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-4 shadow-md bg-base-100">
          <h2 className="font-semibold mb-2 text-center">Top 5 Requested Assets</h2>
          <BarResponsive width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="requests" fill="#4f46e5" />
            </BarChart>
          </BarResponsive>
        </div>
      </div>

      {/* Asset List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Asset List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedAssets.map(asset => (
            <AssetCard
              key={asset._id}
              asset={asset}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-2 mt-4">
          <button
            className="btn btn-sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              className={`btn btn-sm ${currentPage === idx + 1 ? "btn-active" : ""}`}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
          <button
            className="btn btn-sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HRDashboardHome;
