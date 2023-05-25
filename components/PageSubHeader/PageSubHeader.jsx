import React from "react";
import "./style.css";

function PageSubHeader({ heading, subHeading, para }) {
  return (
    <section className="pageSubHeader width100 flex alignCenter justifyCenter flexColumn">
      <div className="pageSubHeaderContent width95 maxWidth">
        <h2>
          {heading}

          <br />
          <span>{subHeading}</span>
        </h2>
        <div className="pageSubDivider"></div>
        <div className="pageSubDivider2"></div>
        <p>{para}</p>
      </div>
    </section>
  );
}

export default PageSubHeader;
