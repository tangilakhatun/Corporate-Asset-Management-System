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
   <div className="flex-1 overflow-y-auto overflow-x-auto p-4 bg-base-200 min-h-[calc(100vh-4rem)]">
  <h1 className="text-2xl font-bold mb-4">All Asset Requests</h1>

  <div className="flex-1 min-h-0 overflow-auto">
    <div className="min-w-[950px] inline-block bg-base-100 shadow rounded-lg">
    <table className="table w-full min-w-[950px] md:min-w-[1100px] lg:min-w-[1200px] table-zebra">
      <thead>
        <tr>
          <th className="whitespace-nowrap">Employee</th>
          <th className="whitespace-nowrap">Asset</th>
          <th className="whitespace-nowrap">Company</th>
          <th className="whitespace-nowrap">Request Date</th>
          <th className="whitespace-nowrap">Status</th>
          <th className="whitespace-nowrap">Actions</th>
        </tr>
      </thead>
      <tbody>
        {requests.length === 0 && (
          <tr>
            <td colSpan={6} className="text-center py-6">
              No requests found
            </td>
          </tr>
        )}
        {requests.map((req) => (
          <tr key={req._id}>
            <td className="whitespace-normal break-words">
              <p className="font-semibold">{req.requesterName}</p>
              <p className="text-sm text-gray-500">{req.requesterEmail}</p>
            </td>
            <td className="whitespace-normal break-words">
              <p className="font-medium">{req.assetName}</p>
              <span className="badge badge-outline block w-full text-center leading-tight">
                {req.assetType}
              </span>
            </td>
            <td className="whitespace-nowrap">{req.companyName}</td>
            <td className="whitespace-nowrap">{new Date(req.requestDate).toLocaleDateString()}</td>
            <td className="whitespace-nowrap">
              <span
                className={`badge ${
                  req.requestStatus === "pending"
                    ? "badge-warning"
                    : req.requestStatus === "approved"
                    ? "badge-success"
                    : "badge-error"
                }`}
              >
                {req.requestStatus}
              </span>
            </td>
            <td className="flex gap-2 whitespace-nowrap">
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
              {req.requestStatus !== "pending" && (
                <span className="text-sm text-gray-400">Action taken</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div></div>

</div>


  );
};

export default AllRequests;
