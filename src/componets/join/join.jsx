import React, { useRef } from "react";
import "./join.css";
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jzq443g",
        "template_izqzmsh",
        form.current,
        "5DNtSF3ZdS-hZvKpJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-join">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US</span>
        </div>
      </div>
      <div className="right-join">
        <form
          action=""
          className="email-container"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user-email"
            placeholder="Enter your Email"
          />
          <button type="submit" className="btn btn-join">Join Now</button>
        </form>
      </div>
    </div>
  )
};

export default Join;
