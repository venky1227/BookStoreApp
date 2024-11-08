// import React from 'react'

// function Contact() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Contact

import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Subject Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <span className="text-red-500">{errors.subject.message}</span>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full px-3 py-2 border rounded-md outline-none"
              rows="4"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Back to Home Link */}
        <div className="mt-4 text-center">
          <Link to="/" className="text-blue-500 underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
