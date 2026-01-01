import { useEffect, useState } from "react";
import { getEmployees, removeEmployee } from "../../services/api";
import toast from "react-hot-toast";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEmployees();
  }, []);

  
const loadEmployees = async () => {
  setLoading(true);
  try {
    const res = await getEmployees();
    const activeEmployees = res.data.filter(emp => emp.status === "active" && emp.companyName);
    setEmployees(activeEmployees);
  } catch (error) {
    console.error(error);
    toast.error("Failed to load employees");
  } finally {
    setLoading(false);
  }
};

  const handleRemove = async (email) => {
    if (!confirm("Remove this employee from company?")) return;

    try {
      await removeEmployee(email);
      toast.success("Employee removed successfully");
      loadEmployees(); 
    } catch (err) {
      console.error(err);
      toast.error("Failed to remove employee");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-x-auto overflow-y-auto p-4 bg-base-200 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">My Employees</h1>

      <div className="overflow-x-auto bg-base-100 shadow rounded-lg">
        <table className="table table-zebra w-full min-w-[950px] md:min-w-[1100px] lg:min-w-[1200px] table-zebra">
          <thead>
            <tr>
              <th className="whitespace-nowrap">Name</th>
              <th className="whitespace-nowrap">Email</th>
              <th className="whitespace-nowrap">Company</th>
              <th className="whitespace-nowrap">Status</th>
              <th className="whitespace-nowrap">Joined</th>
              <th className="whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-6">
                  No employees found
                </td>
              </tr>
            ) : (
              employees.map((emp) => (
                <tr key={emp._id}>
                  <td className=" max-w-[120px] md:max-w-[200px] lg:max-w-none whitespace-nowrap font-semibold">{emp.name}</td>
                  <td className=" max-w-[120px] md:max-w-[200px] lg:max-w-none whitespace-nowrap">{emp.employeeEmail}</td>
                  <td>
                    <span className="badge badge-outline block w-full text-center break-words">
                      {emp.companyName || "—"}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${emp.status === "active" ? "badge-success" : "badge-error"}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap">{emp.affiliationDate ? new Date(emp.affiliationDate).toLocaleDateString() : "—"}</td>
                  <td>
                    {emp.status === "active" && (
                      <button
                        onClick={() => handleRemove(emp.employeeEmail)}
                        className="btn btn-xs btn-error text-white"
                      >
                        Remove
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
