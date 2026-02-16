import React, { useEffect } from "react";
import "./work.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);

  return (
    <div className="Body">
      <div className="titel" data-aos="fade-up">
        <p>WHAT I WILL DO FOR YOU</p>
        <h1 className="text-primary">Services</h1>
      </div>
      <hr className="l" />

      <div className="main3">
        <div className="card1" data-aos="fade-right">
          <i className="fa-solid fa-tv"></i>
          <h3>Web design</h3>
          <p>
            Offering tailored web design services to craft
            visually stunning, user-friendly websites that
            enhance your brand's presence.
          </p>
        </div>

        <div className="card2" >
          <i className="fa-solid fa-pen-ruler"></i>
          <h3>Ui & UX design</h3>
          <p>
            Delivering exceptional Ui/Ux design services to
            enhance user experience and drive engagement
            with intuitive interfaces.
          </p>
        </div>

        <div className="card3" data-aos="fade-left">
          <i className="fa-regular fa-file-code"></i>
          <h3>Web development</h3>
          <p>
            Offering expert web development services to
            create custom, scalable websites with seamless
            functionality and modern design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;