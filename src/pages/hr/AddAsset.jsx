import React, { useState } from "react";
import { addAsset } from "../../services/api";
import toast from "react-hot-toast";

const AddAsset = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productImage: "",
    productType: "Returnable",
    productQuantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addAsset(formData);
      toast.success("Asset added successfully! 🎉");
      setFormData({ productName: "", productImage: "", productType: "Returnable", productQuantity: 1 });
    } catch (err) {
      toast.error("Failed to add asset ❌");
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 max-w-xl w-full bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Asset</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Product Name</label>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={formData.productName}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Product Image URL</label>
            <input
              type="text"
              name="productImage"
              placeholder="Product Image URL"
              value={formData.productImage}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Product Type</label>
            <select
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="Returnable">Returnable</option>
              <option value="Non-returnable">Non-returnable</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Quantity</label>
            <input
              type="number"
              name="productQuantity"
              value={formData.productQuantity}
              onChange={handleChange}
              min="1"
              className="input input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white"
          >
            Add Asset
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAsset;
