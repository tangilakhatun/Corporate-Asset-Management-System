import { useEffect, useState } from "react";
import { getPackages, upgradePackage } from "../../services/api";
import { CreditCard } from "lucide-react";
import toast from "react-hot-toast";

const UpgradePackage = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPackages();
  }, []);

  const loadPackages = async () => {
    try {
      const res = await getPackages();
      setPackages(res.data);
    } catch (err) {
      toast.error("Failed to load packages");
    } finally {
      setLoading(false);
    }
  };

  const handleUpgrade = async (pkg) => {
    try {
      await upgradePackage({
        packageName: pkg.name,
        employeeLimit: pkg.employeeLimit,
        amount: pkg.price,
      });
      toast.success("Package upgraded successfully 🎉");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Upgrade failed");
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading packages...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          Upgrade Your Package
        </span>
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg._id}
            className="bg-base-100 rounded-2xl shadow p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>
              <p className="text-sm text-gray-500 mb-4">{pkg.description}</p>

              <p className="text-3xl font-bold mb-2">৳ {pkg.price}</p>
              <p className="text-sm mb-4">
                Employee Limit: <b>{pkg.employeeLimit}</b>
              </p>

              <ul className="text-sm space-y-1 mb-6">
                {pkg.features?.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handleUpgrade(pkg)}
              className="btn border-none text-white bg-gradient-to-r from-indigo-500 to-cyan-400"
            >
              <CreditCard className="w-4 h-4 mr-2" /> Upgrade Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpgradePackage;
