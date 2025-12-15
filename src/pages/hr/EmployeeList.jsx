import { useEffect, useState } from "react";
import { getEmployees } from "../../services/api";
import toast from "react-hot-toast";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const res = await getEmployees();
      setEmployees(res.data);
    } catch (error) {
      toast.error("Failed to load employees");
    } finally {
      setLoading(false);
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
    <div className="p-4 bg-base-200 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">My Employees</h1>

      <div className="overflow-x-auto bg-base-100 shadow rounded-lg">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Package</th>
              <th>Status</th>
              <th>Joined</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id}>
                <td className="font-semibold">{emp.name}</td>
                <td>{emp.email}</td>

                <td>
                  <span className="badge badge-info capitalize">
                    {emp.role}
                  </span>
                </td>

                <td>
                  <span className="badge badge-outline">
                    {emp.package || "Basic"}
                  </span>
                </td>

                <td>
                  <span
                    className={`badge ${
                      emp.status === "active"
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>

                <td>
                  {emp.createdAt
                    ? new Date(emp.createdAt).toLocaleDateString()
                    : "—"}
                </td>
              </tr>
            ))}

            {employees.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
