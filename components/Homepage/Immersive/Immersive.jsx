import "./style.css";

const Immersive = () => {
  return (
    <section className="immersive width100 flex alignCenter justifyCenter flexColumn">
      <div className="immersiveContainer width95 maxWidth">
        <h2>
          Immersive Digital Learning Experience -<br />
          <span>Transforming the Way You Learn</span>
        </h2>
        <p className="marginBottom3">
          At 3a Learning Solutions, we believe that learning should be
          immersive, engaging, and effective. That's why we offer a
          comprehensive range of digital learning solutions that are designed to
          transform the way you learn.
        </p>
        <div className="immersiveTab flex alignStart justifyCenter spaceBtw marginBottom1">
          <div className="immersiveBox">
            <h4>Our Approach</h4>
            <div className="immersiveBoxHr"></div>
            <div className="immersiveBoxHr2"></div>
            <p>
              Our digital learning approach is unique and agile. We're leaders
              in the learning ecosystem, providing you with high-quality
              training and consulting solutions.
            </p>
          </div>
          <div className="immersiveBox">
            <h4>Rich Content</h4>
            <div className="immersiveBoxHr"></div>
            <div className="immersiveBoxHr2"></div>
            <p>
              Our customized content builds retention and application to work,
              ensuring you retain what you learn and apply it professionally.
            </p>
          </div>
          <div className="immersiveBox">
            <h4>Technology</h4>
            <div className="immersiveBoxHr"></div>
            <div className="immersiveBoxHr2"></div>
            <p>
              Our experienced team of developers and designers use the latest
              technology to create engaging, effective, and enjoyable learning
              experiences.
            </p>
          </div>
        </div>
        <div className="immersiveTab flex alignStart justifyCenter spaceBtw marginBottom1">
          <div className="immersiveBox">
            <h4>Flexible Learning Solutions</h4>
            <div className="immersiveBoxHr"></div>
            <div className="immersiveBoxHr2"></div>
            <p>
              Flexible digital learning solutions tailored to your needs.
              Self-paced, virtual, and blended learning formats available.
            </p>
          </div>
          <div className="immersiveBox">
            <h4>Relevant Curriculum</h4>
            <div className="immersiveBoxHr"></div>
            <div className="immersiveBoxHr2"></div>
            <p>
              Our courses keep you up-to-date with the latest industry trends
              and developments, helping you stay ahead in today's fast-paced
              business world.
            </p>
          </div>
          <div className="immersiveBox">
            <h4>Support and Mentoring</h4>
            <div className="immersiveBoxHr"></div>
            <div className="immersiveBoxHr2"></div>
            <p>
              Post-training support and mentoring to apply learning in your
              professional life. Experts available for guidance and advice to
              overcome challenges and gain success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Immersive;
