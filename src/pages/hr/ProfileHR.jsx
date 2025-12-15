import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { updateMe } from "../../services/api";

const MyProfile = () => {
  const { user, setUser } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [file, setFile] = useState(null); 
  const [profileImage, setProfileImage] = useState(user?.profileImage || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let uploadedURL = profileImage;

      
      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST}`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();
        uploadedURL = data.data.url;
        toast.success("Image uploaded!");
      }

      // backend update
      const res2 = await updateMe({ name, profileImage: uploadedURL });
      setUser(res2.data);
      setProfileImage(uploadedURL);
      setFile(null);
      toast.success("Profile updated successfully");
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl overflow-hidden">
    
        <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 p-6 text-white">
          <h2 className="text-2xl font-bold">My Profile</h2>
          <p className="text-sm opacity-90">Manage your personal information</p>
        </div>

       
        <div className="card-body">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            
            <div className="flex flex-col items-center gap-4">
              <img
                src={profileImage || "https://i.ibb.co/5YB9r6W/user.png"}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover ring ring-indigo-400 ring-offset-2"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                className="file-input file-input-bordered w-full"
              />
            </div>

            {/* Info Section */}
            <div className="space-y-4">
              <div>
                <label className="label">Full Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full bg-base-200"
                  value={user?.email}
                  disabled
                />
              </div>

              <div>
                <label className="label">Role</label>
                <input
                  type="text"
                  className="input input-bordered w-full bg-base-200"
                  value={user?.role}
                  disabled
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn border-none text-white w-full bg-gradient-to-r from-indigo-500 to-cyan-400"
              >
                {loading ? "Updating..." : "Update Profile"}
              </button>
            </div>
          </form>

          {/* HR Extra Info */}
          {user?.role === "hr" && (
            <div className="mt-8 p-4 rounded-lg bg-base-200">
              <h3 className="font-semibold mb-2">Company Information</h3>
              <p>
                <b>Company Name:</b> {user.companyName}
              </p>
              <p>
                <b>Subscription:</b> {user.subscription}
              </p>
              <p>
                <b>Employee Limit:</b> {user.packageLimit}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
