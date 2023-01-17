import React from "react";
import ui from "./Contact.module.css";
import contact from "../Images/contact.png";

function Contact() {
  return (
    <div id="contact" className={ui.Contact}>
      <div>
        <img src={contact} alt="" width="100%" />
      </div>
      <div>
        <div>
          <h1 className={ui.H1}>Contact me</h1>
          <p>
            <b>Get In Touch Email ID: er.kumarkomal@gmail.com</b>
          </p>
        </div>

        <div className={ui.Images}>
          <a href="tel: +91 9717194080" target="_blank">
            <i class="fa-solid fa-phone fa-2xl"></i>
          </a>
          <a href="mailto:er.kumarkomal@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope fa-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/komal-kumar-bvcoe/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin fa-2xl"></i>
          </a>
          <a href="https://github.com/bewithkomalkumar" target="_blank">
            <i class="fa-brands fa-github fa-2xl"></i>
          </a>
        </div>
        <hr />
        <div className={ui.thanks}>
          <h1>Thank You For Visit</h1>
          <p>&copy;Design and Developed by Komal Kumar</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
