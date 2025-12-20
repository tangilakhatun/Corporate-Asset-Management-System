import { useEffect, useState } from "react";
import { getRequests, approveRequest, rejectRequest,getMyAssets} from "../../services/api";
import toast from "react-hot-toast";

const AllRequests = () => {
  const [requests, setRequests] = useState([]);

 const loadRequests = async () => {
    try {
        const res = await getRequests();
        console.log("HR Requests:", res.data);
        setRequests(res.data);
    } catch (error) {
        console.error("Load requests error:", error.response?.data);
        toast.error("Failed to load requests");
    }
};



const handleApprove = async (requestId) => {
  try {
    await approveRequest(requestId);
    toast.success("Approved successfully!");

   
    loadRequests();
    getMyAssets();
  } catch (err) {
    console.error(err);
    toast.error("Approval failed!");
  }
};


const handleReject = async (id) => {
    if(!confirm("Reject this request?")) return;
    try{
        await rejectRequest(id);
        toast.success("Request rejected");
        loadRequests();
    } catch(err){
        console.error(err.response?.data);
        toast.error("Reject failed");
    }
};

useEffect(() => {
    loadRequests();
}, []);

  return (
    <div className="p-4 bg-base-200 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">All Asset Requests</h1>

      <div className="overflow-x-auto bg-base-100 shadow rounded-lg">
        <table className="table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Asset</th>
              <th>Company</th>
              <th>Request Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req._id}>
                <td>
                  <p className="font-semibold">{req.requesterName}</p>
                  <p className="text-sm text-gray-500">{req.requesterEmail}</p>
                </td>
                <td>
                  <p className="font-medium">{req.assetName}</p>
                  <span className="badge badge-outline">{req.assetType}</span>
                </td>
                <td>{req.companyName}</td>
                <td>{new Date(req.requestDate).toLocaleDateString()}</td>
                <td>
                  <span className={`badge ${
                    req.requestStatus === "pending" ? "badge-warning" :
                    req.requestStatus === "approved" ? "badge-success" :
                    "badge-error"
                  }`}>
                    {req.requestStatus}
                  </span>
                </td>
                <td className="flex gap-2">
                  {req.requestStatus === "pending" && (
                    <>
                      <button
                        onClick={() => handleApprove(req._id)}
                        className="btn btn-xs bg-gradient-to-r from-indigo-500 to-cyan-400 text-white"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(req._id)}
                        className="btn btn-xs btn-error text-white"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {req.requestStatus !== "pending" && <span className="text-sm text-gray-400">Action taken</span>}
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6">No requests found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRequests;
