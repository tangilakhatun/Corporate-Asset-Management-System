import React from "react";

const AssetCard = ({ asset, onEdit, onDelete }) => {
  return (
    <div className="card bg-base-100 shadow-md rounded-lg overflow-hidden">
      <figure className="h-40 w-full overflow-hidden">
        <img
          src={asset.productImage || "https://i.ibb.co/default.png"}
          alt={asset.productName}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {asset.productName}
          <div className="badge badge-info ml-2">{asset.productType}</div>
        </h2>
        <p>Quantity: {asset.availableQuantity}/{asset.productQuantity}</p>
        <p>Date Added: {new Date(asset.dateAdded).toLocaleDateString()}</p>

        <div className="card-actions justify-end mt-4 gap-2">
          {onEdit && (
            <button
              onClick={() => onEdit(asset)}
              className="btn btn-sm bg-gradient-to-r from-indigo-500 to-cyan-400 text-white"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(asset)}
              className="btn btn-sm bg-gradient-to-r from-red-500 to-orange-400 text-white"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
