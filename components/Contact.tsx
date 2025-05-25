"use client";

import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="w-full text-md h-[70px]  text-white flex items-center px-12 justify-center md:justify-end py-12 bg-gray-900"
    >
      <div className="flex md:gap-12 flex-col md:flex-row text-center">
        <h3>alejandrogellada@gmail.com</h3>
        <a
          href="https://www.linkedin.com/in/alejandro-gellada-994018332/"
          target="_blank"
        >
          <h3>LinkedIn</h3>
        </a>
        <a href="https://github.com/aggellada" target="_blank">
          <h3>GitHub</h3>
        </a>
      </div>
    </div>
  );
}

export default Contact;
