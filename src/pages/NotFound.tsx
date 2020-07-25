import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${require(`../assets/d_bg4.jpg`)})`,
      }}
    >
      <div className="h-screen w-screen flex flex-col justify-center items-center text-white">
        <div style={{ fontSize: "150px" }}>404</div>
        <div className="text-3xl">
          <Link to="/" replace>
            Take me back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
