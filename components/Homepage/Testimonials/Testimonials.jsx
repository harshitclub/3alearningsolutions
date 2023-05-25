import "./style.css";

const Testimonials = () => {
  return (
    <section className="testSection width100 flex alignCenter justifyCenter flexColumn">
      <div className="testSContainer width95 maxWidth">
        <h2>Testimonials</h2>
        <div className="testimonialHr"></div>
        <div className="testimonialHr2"></div>
        <p>Discover what our clients have to say about us.</p>
        <div className="testTab flex alignStart justifyCenter spaceBtw">
          <div className="testBox">
            <h4>Hemant</h4>
            <div className="testHr"></div>
            <div className="testHr2"></div>
            <h5>Citi Bank</h5>

            <p>
              "It was good and very amazing learning experience with 3a learning
              solutions, we wish all the best to the team. Great going ! 3a
              Learning Solutions"
            </p>
          </div>
          <div className="testBox">
            <h4>Monica Gandhi</h4>
            <div className="testHr"></div>
            <div className="testHr2"></div>
            <h5>Business Head (Technians)</h5>
            <p>
              "3a Learning solutions’ Salesforce training helped me and my team,
              manage our company’s Marketing and Sales better than ever before."
            </p>
          </div>
          <div className="testBox">
            <h4>L. Nihal</h4>
            <div className="testHr"></div>
            <div className="testHr2"></div>
            <h5>Asst. Manager- JCB</h5>
            <p>
              "This is a great source of motivation for us too to move forward
              with our development strategy taking along a partner like 3a
              learning solutions with us."
            </p>
          </div>
          <div className="testBox">
            <h4>Mr. Harpreet</h4>
            <div className="testHr"></div>
            <div className="testHr2"></div>
            <h5>Manager - JCB</h5>
            <p>
              "We were wasting time on excel sheet with the conventional
              process. Mainly when we were doing analysis, maintaining reports
              and handling larger data."
            </p>
          </div>
        </div>
        <div className="testTab flex alignStart justifyCenter spaceBtw">
          <div className="testBox">
            <h4>WM Logistics</h4>
            <div className="testHr"></div>
            <div className="testHr2"></div>

            <p>
              Workshop was eye-opening. Connected biases to team engagement &
              participation. Will be more cognizant of giving space to different
              experiences, gender & cultures for stronger connection.
            </p>
          </div>
          <div className="testBox">
            <h4>Fiserv</h4>
            <div className="testHr"></div>
            <div className="testHr2"></div>

            <p>
              The quality of content and mode of training is exactly what we
              were looking for. Their ability to engage and bring examples
              connecting to people across generations and cultures gave us the
              just the right experience.
            </p>
          </div>
          <div className="testBox">
            <h4>Suzuki Motorcycle</h4>
            <div className="testHr"></div>
            <div className="testHr2"></div>

            <p>
              Their expertise in diversity and inclusion was super useful. We
              learned how equity, not just equality, can create an engaged
              workforce and bring magical results for our developmental
              priorities.
            </p>
          </div>
          <div className="testBox">
            <h4>HCL Technology</h4>
            <div className="testHr"></div>
            <div className="testHr2"></div>
            <p>
              3a Learning Solutions was the perfect partner for our diversity
              and inclusion initiative. They understood our vision and brought
              relevant stories to deepen our understanding of inclusion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
