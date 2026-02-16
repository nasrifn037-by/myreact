import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="Body">
      <div className="contact">
        <div className="ha">
          <h2>
            Contact <span className="btn btn-primary">Details</span>
          </h2>
        </div>

        <div className="main4">
          {/* LEFT SIDE */}
          <div className="con">
            <h3>
              Contact <span>Me</span>
            </h3>
            <h4>Let's work together</h4>
            <p>
              Do you have fancy saying hi to me or want to get started with <br />
              your project and need my help? Feel free.
            </p>

            <p>
              <i className="fa-solid fa-envelope"></i>{" "}
              <span>nasrifn037@gmail.com</span>
            </p>

            <p>
              <i className="fa-solid fa-phone"></i>{" "}
              <span>+91 8699388545</span>
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="was-validated" noValidate>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label>Your Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label>Your Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <label>Subject</label>
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Enter your message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <h4>Developed with ❤️ by M.D. Nasrif Ansari</h4>
      </footer>
    </div>
  );
};

export default Contact;
