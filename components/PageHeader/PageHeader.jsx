import React from "react";
import "./style.css";

function PageHeader({ heading }) {
  return (
    <section className="pageHeader width100 ">
      <div className="pageHeading flex alignCenter justifyCenter width100">
        <h1>{heading}</h1>
      </div>
    </section>
  );
}

export default PageHeader;
