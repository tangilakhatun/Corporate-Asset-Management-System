
const AssetCard = ({ asset, onEdit, onDelete }) => {
  return (
    <div className="card bg-base-100 shadow-lg p-4">
      <img
        src={asset.productImage || "https://i.ibb.co/5YB9r6W/user.png"}
        alt={asset.productName}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="text-lg font-semibold mt-2">{asset.productName}</h3>
      <p>Type: {asset.productType}</p>
      <p>Quantity: {asset.productQuantity}</p>
      <p>Date Added: {new Date(asset.dateAdded).toLocaleDateString()}</p>

      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onEdit(asset)}  
          className="btn btn-sm bg-gradient-to-r from-indigo-500 to-cyan-400 text-white"
        >
          Update
        </button>

        <button
          onClick={() => onDelete(asset)}
          className="btn btn-sm bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AssetCard;

