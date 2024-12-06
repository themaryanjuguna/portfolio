import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
        <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53760175.46943987!2d-75.54652759999999!3d34.673369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f110b36fe16ad%3A0x6a922a015d4f66c!2s%23usingiziinitiative!5e0!3m2!1sen!2ske!4v1708710316681!5m2!1sen!2ske"
            width="600"
            height="450"
            style={{ border: "0" }} // Fix: Convert style attribute value to an object
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
