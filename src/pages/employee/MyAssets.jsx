import { useEffect, useState } from "react";
import { getMyAssets, returnAsset } from "../../services/api";
import toast from "react-hot-toast";
import { Search, Printer, RotateCcw } from "lucide-react";

const MyAssets = () => {
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const fetchAssets = async () => {
    try {
      const res = await getMyAssets();
      setAssets(res.data);
    } catch (err) {
      toast.error("Failed to load assets");
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  const handleReturn = async (id) => {
    try {
      await returnAsset(id);
      toast.success("Asset returned successfully");
      fetchAssets();
    } catch (err) {
      toast.error("Return failed");
    }
  };

  const filteredAssets = assets.filter((a) => {
    const matchSearch = a.assetName.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || a.assetType === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <h2 className="text-2xl font-bold">My Assets</h2>

        <div className="flex gap-2 flex-wrap">
          <div className="flex items-center border rounded px-2">
            <Search className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search asset"
              className="outline-none px-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="select select-bordered"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Returnable">Returnable</option>
            <option value="Non-returnable">Non-returnable</option>
          </select>

          <button
            onClick={() => window.print()}
            className="btn btn-sm bg-gradient-to-r from-indigo-500 to-cyan-400 text-white"
          >
            <Printer className="w-4 h-4 mr-1" /> Print
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded shadow">
        <table className="table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Type</th>
              <th>Company</th>
              <th>Assigned</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((asset) => (
              <tr key={asset._id}>
                <td className="flex items-center gap-2">
                  <img
                    src={asset.assetImage || "https://i.ibb.co/3Y1vZpB/asset.png"}
                    className="w-10 h-10 rounded"
                  />
                  {asset.assetName}
                </td>
                <td>{asset.assetType}</td>
                <td>{asset.companyName}</td>
                <td>{new Date(asset.assignmentDate).toLocaleDateString()}</td>
                <td>
                  <span className={`badge ${asset.status === "assigned" ? "badge-success" : "badge-ghost"}`}>
                    {asset.status}
                  </span>
                </td>
                <td>
                  {asset.assetType === "Returnable" && asset.status === "assigned" && (
                    <button
                      onClick={() => handleReturn(asset._id)}
                      className="btn btn-xs bg-gradient-to-r from-indigo-500 to-cyan-400 text-white"
                    >
                      <RotateCcw className="w-3 h-3 mr-1" /> Return
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredAssets.length === 0 && (
          <p className="text-center p-4">No assets found</p>
        )}
      </div>
    </div>
  );
};

export default MyAssets;
