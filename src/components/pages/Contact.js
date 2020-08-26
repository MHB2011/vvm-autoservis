import React from "react";

const Contact = () => {
  return (
    <div className="kontakt">
      <div className="row m-0">
        <div className="col ml-4">
          <h1 className="text-animated">Kontakt</h1>
          <p>
            <i className="fas fa-map-marker-alt"></i>
            <span className="text-bold"> VVM</span> Autoservis
          </p>
          <p>Antona Dubrovića 7</p>
          <p>51211 Matulji, Hrvatska</p>
          <p>
            <i className="far fa-envelope"></i> info@vvm-autoservis.hr
          </p>
          <p>
            <i className="fas fa-phone"></i> +385 (0)51 274 665
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
