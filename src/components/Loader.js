import React from "react";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
