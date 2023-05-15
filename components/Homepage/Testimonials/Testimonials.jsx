import "./style.css";

const Testimonials = () => {
  return (
    <section className="testSection width100 flex alignCenter justifyCenter flexColumn">
      <div className="testSContainer width95 maxWidth">
        <h2>Testimonials</h2>
        <div className="testTab flex alignStart justifyCenter spaceBtw">
          <div className="testBox">
            <h4>Hemant</h4>
            <h5>Citi Bank</h5>
            <p>
              "It was good and very amazing learning experience with 3a learning
              solutions, we wish all the best to the team. Great going ! 3a
              Learning Solutions"
            </p>
          </div>
          <div className="testBox">
            <h4>Monica Gandhi</h4>
            <h5>Business Head (Technians)</h5>
            <p>
              "3a Learning solutions’ Salesforce training helped me and my team,
              manage our company’s Marketing and Sales better than ever before."
            </p>
          </div>
          <div className="testBox">
            <h4>L. Nihal</h4>
            <h5>Asst. Manager- JCB</h5>
            <p>
              "This is a great source of motivation for us too to move forward
              with our development strategy taking along a partner like 3a
              learning solutions with us."
            </p>
          </div>
          <div className="testBox">
            <h4>Mr. Harpreet</h4>
            <h5>Manager - JCB</h5>
            <p>
              "We were wasting time on excel sheet with the conventional
              process. Mainly when we were doing analysis, maintaining reports
              and handling larger data."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
