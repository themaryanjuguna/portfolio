import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435462.690694435!2d37.840304943208345!3d-0.39539824887147995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11f38ecb7a45%3A0x86a02ed6b9e73190!2sCreativeMania!5e0!3m2!1sen!2ske!4v1705323193070!5m2!1sen!2ske"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
