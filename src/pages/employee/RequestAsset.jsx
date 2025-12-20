import { useEffect, useState } from "react";
import { getAssets, requestAsset, getMyAssets } from "../../services/api";
import toast from "react-hot-toast";
import { Search } from "lucide-react";

const RequestAsset = ({ onRequestSuccess }) => {
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [note, setNote] = useState("");

  const fetchAssets = async () => {
    try {
      const res = await getAssets();
      const available = res.data.filter(a => a.availableQuantity > 0);
      setAssets(available);
    } catch (err) {
      toast.error("Failed to load assets");
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  // const handleRequest = async () => {
  //   if (!selectedAsset) return;
  //   try {
  //     await requestAsset(selectedAsset._id, note);
  //     toast.success("Asset request sent");
  //     setSelectedAsset(null);
  //     setNote("");

  //     fetchAssets(); // refresh available assets
  //     if (onRequestSuccess) onRequestSuccess(); // refresh parent request list
  //   } catch (err) {
  //     toast.error(err.response?.data?.message || "Request failed");
  //   }
  // };
const handleRequest = async () => {
    if (!selectedAsset) return;

    try {
        const res = await requestAsset(selectedAsset._id, note);
        console.log("Request Response:", res.data);
        toast.success("Asset request sent");

        setSelectedAsset(null);
        setNote("");
        fetchAssets(); 
        if (onRequestSuccess) onRequestSuccess();
    } catch (err) {
        console.error("Request error:", err.response?.data);
        toast.error(err.response?.data?.message || "Request failed");
    }
};
  const filteredAssets = assets.filter(a =>
    a.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h2 className="text-2xl font-bold">Request an Asset</h2>

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
      </div>

      {/* Asset Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAssets.map(asset => (
          <div key={asset._id} className="card bg-base-100 shadow">
            <figure className="p-4">
              <img
                src={asset.productImage}
                alt={asset.productName}
                className="h-32 object-contain"
              />
            </figure>
            <div className="card-body">
              <h3 className="font-semibold text-lg">{asset.productName}</h3>
              <p className="text-sm">Type: {asset.productType}</p>
              <p className="text-sm">Available: {asset.availableQuantity}</p>
              <p className="text-xs text-gray-500">Company: {asset.companyName}</p>

              <button
                onClick={() => setSelectedAsset(asset)}
                className="btn btn-sm mt-2 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white"
              >
                Request
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedAsset && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Request {selectedAsset.productName}</h3>
            <textarea
              className="textarea textarea-bordered w-full mt-3"
              placeholder="Add a note (optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <div className="modal-action">
              <button
                className="btn btn-ghost"
                onClick={() => setSelectedAsset(null)}
              >
                Cancel
              </button>
              <button
                onClick={handleRequest}
                className="btn bg-gradient-to-r from-indigo-500 to-cyan-400 text-white"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}

      {filteredAssets.length === 0 && (
        <p className="text-center mt-6">No assets available</p>
      )}
    </div>
  );
};

export default RequestAsset;
