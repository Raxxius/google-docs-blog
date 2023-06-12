"use client";

import { send } from "@emailjs/browser";
import Email from "../../assets/icons/email.jsx";
import { useState } from "react";
import './contact.css'

const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_kskc0qh", "template_s45thlj", formData, "-9hlgPib0UB9vVAGo")
      .then((response) => {
        alert(
          "Thankyou for reaching out, I shall be in touch shortly.",
          response.status,
          response.text
        );
      })
      .catch((err) => {
        alert(
          "Sorry, there's been an error, please try again, or send an email",
          err
        );
      });
  };

  const contactFlexStyle = {
    backgroundColor: props.darkMode ? "#1f1b24" : "#C7CDCF",
    color: props.darkMode ? "white" : "black",
    transition: "background-color 2s, color 2s",
  };

  const contactEmailStyle = {
    backgroundColor: props.darkMode ? "#faa356" : "#72bcd4",
    color: props.darkMode ? "black" : "blue",
    transition: "background-color 2s, color 2s",
  };

  const formStyle = {
    backgroundColor: props.darkMode ? "#faa356" : "#72bcd4",
    color: props.darkMode ? "black" : "blue",
    transition: "background-color 2s, color 2s",
  };

  return (
    <section className="contact" id="contact" >
      <div className="contact-flex-one" style={contactFlexStyle}>
        <h1 className="contact-one-h1">Want to create something together?</h1>
        <h2 className="contact-one-h2">Drop me a line!</h2>
        <a
          href="mailto:Raxxman@gmail.com?subject=Contact request"
          className="contact-email"
          style={contactEmailStyle}
        >
          <Email className="contact-btn-icon" alt="email"/>Let's
          create something together
        </a>
      </div>
      <div className="contact-flex-two" style={contactFlexStyle}>
        <form className="contact-form" onSubmit={onSubmit}>
          <h1 className="contact-title">Or send me a message:</h1>
          <div className="name-box form-box">
            <label id="name-label" htmlFor="name">
              Name:
            </label>
            <input
              style={formStyle}
              className="input"
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div className="email-box form-box">
            <label id="email-label" htmlFor="email">
              Email:
            </label>
            <input
              style={formStyle}
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="email address"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="subject-box form-box">
            <label id="subject-label" htmlFor="subject">
              Subject:
            </label>
            <input
              style={formStyle}
              className="input"
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              onChange={handleChange}
              value={formData.subject}
              required
            />
          </div>
          <div className="message-box form-box">
            <label htmlFor="message">What would you like to talk about?</label>
            <textarea
              style={formStyle}
              className="textarea"
              type="textarea"
              id="message"
              checked={formData.comments}
              onChange={handleChange}
              name="message"
              required
            ></textarea>
          </div>
          <div className="button-box form-box">
            <button id="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;