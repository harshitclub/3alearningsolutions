import React from "react";
import "./style.css";

function ISO() {
  return (
    <section className="certifications width100 flex alignCenter justifyCenter">
      <div className="certiContainer width95 maxWidth">
        <h2>OUR CERTIFICATION</h2>
        <div className="certiTab">
          <h3>ISO 9001:2015</h3>
          <p>CERTIFIED</p>
          <div className="certiContent flex alignCenter justifyCenter spaceBtw">
            <div className="certiCLeft width49">
              <p>
                <span>Excellence Recognized:</span> 3a Learning Solutions - ISO
                9001:2015 Certified, your trusted partner for professional
                training.
              </p>
              <p>
                <span>Excellence in Education:</span> We're proud to be ISO
                9001:2015 Certified, providing top-tier training solutions.
              </p>
            </div>
            <div className="certiCRight width49">
              <p>
                <span>Proven Excellence:</span> ISO 9001:2015 Certified, choose
                3a Learning Solutions for superior professional development.
              </p>
              <p>
                <span>Uncompromising Quality:</span> ISO 9001:2015 Certified,
                ensuring excellence in every aspect of our training services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ISO;
