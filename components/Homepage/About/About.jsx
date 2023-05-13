import { RiArrowDownLine, RiArrowRightDownLine } from "react-icons/ri";
import "./style.css";

const About = () => {
  return (
    <section className="aboutSection width100 flex alignStart justifyCenter">
      <div className="aboutSContainer width95 maxWidth flex alignCenter justifyCenter">
        <div className="aboutSContent width100">
          <h2>WHO WE ARE</h2>
          <p>
            At 3a Learning Solutions India Pvt. Ltd, we are committed to
            providing our clients with high-quality training and consulting
            services that help them compete and thrive in today's dynamic
            business environment.
          </p>
          <p>
            Our journey began in August 2014, and since then, we have
            established ourselves as the leading provider of technical and
            behavioral training and consulting services in India. We are an ISO
            9001:2015 certified company, and our approach is centered around our
            core values of quality, innovation, and excellence.
          </p>
          <p className="marginBottom2">
            At 3a Learning Solutions India Pvt. Ltd, we believe in delivering an
            immersive digital learning experience that combines our unique
            approach, rich content, and cutting-edge technology. Our approach is
            agile and flexible, ensuring that our clients achieve their learning
            outcomes in a lucid manner. We take pride in our comprehensive and
            customized content that is designed to fit the specific needs of our
            clients. And, we use technology to create an engaging and effective
            learning experience for our users.
          </p>
          <p className="marginBottom3">
            <a href="/" className="downloadBtn">
              Download Brochure <RiArrowDownLine className="downloadIcon" />
            </a>
          </p>

          <h3>We specialize in 3P’s -</h3>
          <div className="ptab flex alignCenter justifyCenter spaceBtw">
            <div className="pBox">
              <h4>
                Product <RiArrowRightDownLine className="pTabIcon" />
              </h4>
              <ul>
                <li>Data Science</li>
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>React.js</li>
                <li>Angular.js</li>
                <li>Node.js</li>
                <li>Cloud Computing</li>
                <li>Cyber Security</li>
                <li>DevOps</li>
                <li>Etc.</li>
              </ul>
            </div>
            <div className="pBox">
              <h4>
                People <RiArrowRightDownLine className="pTabIcon" />
              </h4>
              <ul>
                <li>Leadership Development</li>
                <li>Effective Communication Skills</li>
                <li>Team Building and Collaboration</li>
                <li>Diversity and Inclusion Training</li>
                <li>Coaching and Mentoring Skills</li>
                <li>Managing Remote Teams</li>
                <li>Change Management</li>
                <li>Effective Presentation Skills</li>
                <li>Performance Management</li>
                <li>Etc.</li>
              </ul>
            </div>
            <div className="pBox">
              <h4>
                Process <RiArrowRightDownLine className="pTabIcon" />
              </h4>
              <ul>
                <li>Lean Six Sigma Green Belt</li>
                <li>Kaizen and Continuous Improvement</li>
                <li>Process Mapping and Improvement</li>
                <li>Business Process Management</li>
                <li>Supply Chain Management</li>
                <li>Project Management Essentials</li>
                <li>Quality Management Systems</li>
                <li>Statistical Process Control</li>
                <li>Lean Manufacturing</li>
                <li>Etc.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
