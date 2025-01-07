import React from "react";
import { Link } from "react-router-dom";
import errorBg from "../assets/illustrations-frustrated.jpg";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-800">
      <img src={errorBg} alt="" />
      <Link to="/" className="btn btn-outline">
        Go Back
      </Link>
    </div>
  );
};

export default Error;
