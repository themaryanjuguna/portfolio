import React, { useState }from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    comment:"",
  }); 

  const {
    register,
    handleSubmit,
    formState:  { errors },
  } = useForm();

  // const onSubmit = (data, e) => {
  //   e.target.reset();
  //   console.log("Message submited: " + JSON.stringify(data));
  // };

  const onSubmit = async (formData, e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);

    //Access environment variables
    const airtableBaseUrl = process.env.REACT_APP_AIRTABLE_BASE_URL;
    const airtablePat = `Bearer ${process.env.REACT_APP_AIRTABLE_PAT}`;

    try {
      const response = await axios.post(
        airtableBaseUrl,
        {
          fields: {
            Name: formData.name,
            Email: formData.email,
            Subject: formData.subject,
            Comment: formData.comment,
          },
        },
        {
          headers: {
            Authorization: airtablePat,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Your message has been submitted successfully!");
      e.target.reset();
    } catch (error){
      console.error("Error submitting to Airtable",error);
      alert("There was an issue subitting your message. Please try again.")
    }
  };

  const handleInputChange = (e) => {
    const { name, value} =e.target;
    setData({...data, [name]: value});
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="text"
                name="name"
                value={data.name}
                className="form-control theme-light"
                placeholder="Full name"
                {...register("name", { required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleInputChange}
                className="form-control theme-light"
                placeholder="Email address"
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-12">
            <div className="form-group mb-3">
              <input
                type="text"
                name="subject"
                value={data.subject}
                onChange={handleInputChange}
                className="form-control theme-light"
                placeholder="Subject"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="invalid-feedback">Subject is required.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="form-group mb-3">
              <textarea
                rows="4"
                name="comment"
                value={data.comment}
                onChange={handleInputChange}
                className="form-control theme-light"
                placeholder="Type comment"
                {...register("comment", { required: true })}
              ></textarea>
              {errors.comment && (
                <span className="invalid-feedback">Comment is required.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="btn-bar">
              <button className="px-btn px-btn-white">Send Message</button>
            </div>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    </>
  );
};

export default Contact;
