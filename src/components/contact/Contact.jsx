import "./contact.css";

import React from "react";
import { MdOutlineEmail, MdLocationCity } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section__title">5. Get In Touch</h2>

      <div className="container contact__container">
        <p>Although I'm Always open for any new opportunities, my inbox is open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <a href="mailto:topdev39@gmail.com" target="_blank" rel="noreferrer"><button className="sayHello__btn">Say Hello</button></a>
      </div>
    </section>
  );
};

export default Contact;
