import React, { useEffect } from "react";
import "./Home.css";
import Logo from "../images/Logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="Body1">
      <div className="main">
        <div className="img" data-aos="fade-right">
          <img src={Logo} alt="Logo" className="img1" />
        </div>

        <div className="con1">
          <p className="btn btn-dark" data-aos="zoom-out-down">
            Hello I am
          </p>

          <h1 data-aos="zoom-out-down">
            Web <span className="text-dark">Developer</span>
          </h1>

          <p data-aos="zoom-out-down">
            Hi I am M.d Nasrif Ansari, a passionate web developer based in
            India. Welcome to my portfolio.
          </p>

          <h3 data-aos="zoom-out-down">
            This is my <span className="btn btn-dark">LinkedIn profile</span>
          </h3>

          <a
            href="https://www.linkedin.com/in/nasrif-ansari-15a544386/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
            data-aos="zoom-out-down"
          >
            VIEW MY LINKEDIN PROFILE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
