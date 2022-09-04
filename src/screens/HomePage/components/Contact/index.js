import React from "react";
import "./index.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendSMS = () => {
    console.log(username, phone, message);
    let sms = `New message from: ${username} \nmessage: ${message} \ncontact on: ${phone}`;
    console.log(sms);
    axios
      .post("https://sms-bot-1546.twil.io/sendsms", { Body: sms })
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          Swal.fire("Good job!", "You sent the sms!", "success");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error!", "Something Went Wrong!", "error");
      });
  };

  return (
    <section className="contact-section">
      <h1 className="title is mb-4">Reach out to me</h1>
      <div className="columns">
        <div className="column is-6 contact image column">
          <img
            alt="contact"
            src="https://cdn.dribbble.com/users/1602563/screenshots/8869646/media/ddc33ce2c8e2570c410123f375e2c35c.gif"
          />
        </div>

        <div className="column is-6">
          <div>
            <div className="field">
              <label className="label">Your Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Text input"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <div className="field">
                <label className="label">Your Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                  />
                </div>
              </div>

              <div>
                <div className="field">
                  <label className="label">Your Phone</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                      onChange={(event) => {
                        setPhone(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                ></textarea>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" onClick={sendSMS}>
                  Submit
                </button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
