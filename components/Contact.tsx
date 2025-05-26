"use client";

import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="w-full text-md h-[100px] md:h-[70px] text-white flex items-center md:px-12 justify-center md:justify-end md:py-12 bg-gray-900"
    >
      <div className="flex gap-2 md:gap-12 flex-col md:flex-row text-center">
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
