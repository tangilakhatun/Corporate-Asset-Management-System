// src/components/Loader.jsx
import React from "react";

const Loader = ({ size = "lg", color = "blue" }) => {
  let spinnerSize = "loading loading-spinner"; // default

  if (size === "sm") spinnerSize = "loading loading-spinner";
  if (size === "md") spinnerSize = "loading loading-spinner loading-md";
  if (size === "lg") spinnerSize = "loading loading-spinner loading-lg";

  const spinnerColor = `text-${color}-500`; // DaisyUI color

  return (
    <div className="flex justify-center items-center h-screen">
      <span className={`${spinnerSize} ${spinnerColor}`}></span>
    </div>
  );
};

export default Loader;
