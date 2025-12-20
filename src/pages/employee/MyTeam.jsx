import { useEffect, useState } from "react";
import { getMyTeam } from "../../services/api"; 
import toast from "react-hot-toast";
import { Users, Cake } from "lucide-react";
import Loader from "../../component/loadingSpiner/Loader";

const MyTeam = () => {
  const [affiliations, setAffiliations] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMyTeam = async () => {
    try {
      setLoading(true);
      const res = await getMyTeam();
      setAffiliations(res.data);

      const uniqueCompanies = [...new Set(res.data.map(a => a.companyName))];
      setCompanies(uniqueCompanies);
      if (uniqueCompanies.length > 0) setSelectedCompany(uniqueCompanies[0]);
    } catch (err) {
      console.error("Error fetching team:", err);
      toast.error("Failed to load team");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyTeam();
  }, []);

  const filteredEmployees = affiliations.filter(a => a.companyName === selectedCompany);

  const currentMonth = new Date().getMonth() + 1;
  const upcomingBirthdays = filteredEmployees.filter(
    emp => new Date(emp.dateOfBirth).getMonth() + 1 === currentMonth
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Users /> My Team
      </h2>

      {/* Company Dropdown */}
      <div className="mb-4">
        {companies.length === 0 ? (
          <p className="text-gray-500">No company affiliation found</p>
        ) : (
          <select
            className="select select-bordered w-full max-w-xs"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            {companies.map(company => (
              <option key={company} value={company}>{company}</option>
            ))}
          </select>
        )}
      </div>

      {/* Loading State */}
      {loading && <Loader></Loader>}

      {/* Employee Grid */}
      {!loading && filteredEmployees.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          {filteredEmployees.map(emp => (
            <div key={emp.employeeEmail} className="card bg-base-100 shadow hover:shadow-lg transition-shadow">
              <div className="card-body items-center text-center">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-full">
                    <img
                      src={emp.profileImage || "https://i.ibb.co/default.png"}
                      alt={emp.employeeName}
                      onError={(e) => e.target.src = "https://i.ibb.co/default.png"}
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mt-2">{emp.employeeName}</h3>
                <p className="text-sm text-gray-600">Email: {emp.employeeEmail}</p>
                <p className="text-sm text-gray-600">Position: {emp.position || "N/A"}</p>
                <p className="text-sm text-gray-600">
                  Joined: {new Date(emp.affiliationDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upcoming Birthdays */}
      {upcomingBirthdays.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Cake /> Upcoming Birthdays ({currentMonth})
          </h3>
          <ul className="list-disc list-inside mt-2">
            {upcomingBirthdays.map(emp => (
              <li key={emp.employeeEmail}>
                {emp.employeeName} - {new Date(emp.dateOfBirth).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!loading && filteredEmployees.length === 0 && companies.length > 0 && (
        <p className="mt-4 text-gray-500">No employees in this company</p>
      )}
    </div>
  );
};

export default MyTeam;


