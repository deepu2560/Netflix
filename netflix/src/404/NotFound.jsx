import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      NotFound
      <Link to="/register"> Home</Link>
    </div>
  );
}

export default NotFound;
