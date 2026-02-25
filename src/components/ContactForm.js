import React, { useState } from "react";
import Swal from "sweetalert2";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://yourdomain.com/send-mail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#3085d6",
          });

          setForm({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: data.message || "Something went wrong. Please try again.",
            confirmButtonColor: "#d33",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Server Error",
          text: "Please try again later.",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div className="contact-form">
      <h3 className="contact-form-title">Send Us a Message</h3>

      <form className="contact-form-form" onSubmit={handleSubmit}>
        <div className="contact-form-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-form-input"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-form-input"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-form-row">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="contact-form-input"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="contact-form-input"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          className="contact-form-textarea"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="contact-form-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;