import React from "react";
import MyMap from "../Map";

const Lokacija = ({ GoogleApiKey }) => {
  return (
    <div className="lokacija pb-4">
      <div className="row m-0">
        <div className="col ml-4">
          <h1 className="text-animated">Lokacija</h1>
          <p>
            <strong>Antona Dubrovića 7</strong>
          </p>
          <p>51211 Matulji, Hrvatska</p>
          <MyMap googlekey={GoogleApiKey} />
        </div>
      </div>
    </div>
  );
};

export default Lokacija;
