import { useEffect, useState } from "react";
import { getAssets, deleteAsset, updateAsset } from "../../services/api";
import toast from "react-hot-toast";

const AssetList = () => {
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadAssets();
  }, []);

  const loadAssets = async () => {
    try {
      const res = await getAssets();
      setAssets(res.data);
    } catch (error) {
      toast.error("Failed to load assets");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this asset?")) return;
    try {
      await deleteAsset(id);
      toast.success("Asset deleted successfully");
      setAssets((prev) => prev.filter((a) => a._id !== id));
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  const handleEdit = async (asset) => {
    const newName = prompt("Update asset name", asset.productName);
    if (!newName) return;

    try {
      await updateAsset(asset._id, { productName: newName });
      toast.success("Asset updated");
      loadAssets();
    } catch (error) {
      toast.error("Update failed");
    }
  };

  const filteredAssets = assets.filter((asset) =>
    asset.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 bg-base-200 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Asset List</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search asset..."
        className="input input-bordered w-full max-w-sm mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Available</th>
              <th>Date Added</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredAssets.map((asset) => (
              <tr key={asset._id}>
                <td>
                  <img
                    src={asset.productImage}
                    alt={asset.productName}
                    className="w-12 h-12 rounded"
                  />
                </td>
                <td>{asset.productName}</td>
                <td>
                  <span className="badge badge-outline">
                    {asset.productType}
                  </span>
                </td>
                <td>{asset.availableQuantity}</td>
                <td>{new Date(asset.dateAdded).toLocaleDateString()}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => handleEdit(asset)}
                    className="btn btn-xs bg-gradient-to-r from-indigo-500 to-cyan-400 text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(asset._id)}
                    className="btn btn-xs btn-error text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredAssets.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6">
                  No assets found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetList;
