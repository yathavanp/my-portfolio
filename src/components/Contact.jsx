import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact-container" id="contact">
        <div className="content-container">
          <div className="contact-text-wrap">
            <h1 className="contact-heading">Want to reach out?</h1>
            <p className="contact-subtitle">
              I am always looking for new opportunities where I can learn cool
              technologies and apply my skillset! If you have any questions, or
              just want to say hello, feel free to contact me.
            </p>
            <a href="mailto:pushyathavan@gmail.com">
              <button className="btn btn-outline-light btn-lg contact-btn">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
