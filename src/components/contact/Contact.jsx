import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Allows form reset after submission
  } = useForm();

  // Submit handler for form data
  const onSubmit = async (formData) => {
    try {
      // POST request to backend
      const response = await axios.post(
        "https://porfoliobackend-3ja5.onrender.com",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          comment: formData.comment,
        },
        {
          headers: { "Content-Type": "application/json" },
        },
      );

    console.log("Form submitted successfully:", response.data);
      alert("Your message has been sent successfully!");

      // Reset form fields
      reset();
    } catch (error) {
      console.error(
        "Error submitting the form:",
        error.response?.data || error.message
      );
      alert("There was an issue submitting your message. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          {/* Full Name Input */}
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control theme-light"
                placeholder="Full Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="invalid-feedback">{errors.name.message}</span>
              )}
            </div>
          </div>

          {/* Email Input */}
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control theme-light"
                placeholder="Email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>

          {/* Subject Input */}
          <div className="col-12">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control theme-light"
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <span className="invalid-feedback">
                  {errors.subject.message}
                </span>
              )}
            </div>
          </div>

          {/* Comment Textarea */}
          <div className="col-12">
            <div className="form-group mb-3">
              <textarea
                rows="4"
                className="form-control theme-light"
                placeholder="Type comment"
                {...register("comment", { required: "Comment is required" })}
              ></textarea>
              {errors.comment && (
                <span className="invalid-feedback">
                  {errors.comment.message}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <div className="btn-bar">
              <button type="submit" className="px-btn px-btn-white">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
