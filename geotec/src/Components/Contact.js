import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import "../Styles/Contact.css";
import { message, Alert } from "antd";

const ContactUs = () => {
  const form = useRef();

  const [showAlert, setShowAlert] = useState(false);
  const sendEmail = (e) => {
    setShowAlert(false);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_643vwbm",
        "template_1rx8sa9",
        form.current,
        "z2wz1vQSLubsJoWwH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            message.success("Message Sent!");
          });
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section>
      <div className="contactContainer" id="ContactUs">
        <div className="contactHeading">
          <h1>
            Fill out the<span className="Red"> form</span>
          </h1>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="Info">
            <div className="name">
              <input
                className="FName"
                type="text"
                placeholder="First Name"
                name="user_fname"
                required
              />
              <input
                className="LName"
                type="text"
                placeholder="Last Name"
                name="user_lname"
                required
              />
            </div>
            <input
              className="cont"
              type="text"
              placeholder="Your Email or Phone Number"
              name="user_email"
              required
            />
            <input
              className="sub"
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />

            <div className="writtenText">
              <textarea
                className="query"
                placeholder=" Please share your project specifics and questions"
                name="message"
                required
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>

          <button className="CButton" type="submit">
            <strong>Submit</strong>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
