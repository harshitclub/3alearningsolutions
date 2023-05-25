import PageSubHeader from "@/components/PageSubHeader/PageSubHeader";
import "./style.css";
import ContactForm from "@/components/ContactForm/ContactForm";

const ELearning = () => {
  return (
    <>
      <PageSubHeader
        heading="Customized e - Learning Solutions"
        subHeading="Unlocking Your Potential through Customized e-Learning Solutions"
        para="At 3a Learning Solutions, we are dedicated to providing top-notch custom eLearning content creation services tailored specifically for corporates across diverse industry sectors. We understand that each organization has unique training requirements and objectives, and we are here to meet those needs with our expertise and experience in eLearning development."
      />
      <section className="eLearningExperties width95">
        <div className="eLearningETab width100">
          <div className="eLearningEBoxes flex alignStart justifyCenter spaceBtw">
            <div className="eLearningBox">
              <div className="eLearningBoxBg">
                <h4>Customized E-Learning</h4>
                <div className="eBoxDivider"></div>
                <div className="eBoxDivider2"></div>
                <p>
                  By providing solutions with specific content that are based on
                  organisational needs, we may increase our capacity for
                  learning and effectively transmit knowledge.
                </p>
              </div>
            </div>
            <div className="eLearningBox">
              <div className="eLearningBoxBg">
                <h4>Micro Learning</h4>
                <div className="eBoxDivider"></div>
                <div className="eBoxDivider2"></div>
                <p>
                  In order to provide impactful or powerfull learning experience
                  and assess the capabilities, we enhance the content with
                  eye-catching images and animations.
                </p>
              </div>
            </div>
            <div className="eLearningBox">
              <div className="eLearningBoxBg">
                <h4>Blended Learning</h4>
                <div className="eBoxDivider"></div>
                <div className="eBoxDivider2"></div>
                <p>
                  Using the ideal blend of selected tools, like virtual
                  classrooms, video conferencing, virtual conference rooms,
                  etc., create complete or balanced learning environment.
                </p>
              </div>
            </div>
          </div>
          <div className="eLearningEBoxes flex alignStart justifyCenter spaceBtw">
            <div className="eLearningBox">
              <div className="eLearningBoxBg">
                <h4>Translation and Localization</h4>
                <div className="eBoxDivider"></div>
                <div className="eBoxDivider2"></div>
                <p>
                  We provide eLearning content in more than 50+ languages by
                  translation and localization to meet the demands of a variety
                  corporate learners.
                </p>
              </div>
            </div>

            <div className="eLearningBox">
              <div className="eLearningBoxBg">
                <h4>Relevant Content</h4>
                <div className="eBoxDivider"></div>
                <div className="eBoxDivider2"></div>
                <p>
                  Our courses are designed to address your specific learning
                  objectives, ensuring that the content is aligned with your
                  needs and industry standards.
                </p>
              </div>
            </div>
            <div className="eLearningBox">
              <div className="eLearningBoxBg">
                <h4>Quality assurance</h4>
                <div className="eBoxDivider"></div>
                <div className="eBoxDivider2"></div>
                <p>
                  We have a rigorous quality assurance process in place to
                  ensure that our eLearning content meets the highest standards
                  of accuracy, relevance, and effectiveness, providing a
                  reliable learning resource for corporates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="eLearningBody width100 flex alignCenter justifyCenter flexColumn">
        <div className="eLearningTab width95 maxWidth flex alignStart justifyCenter spaceBtw">
          <div className="eLearningLeft width45">
            <h2>CONTACT US ANY TIME</h2>

            <ContactForm />
          </div>
          <div className="eLearningRight">
            <h2>Customized E - Learning Solutions</h2>
            <div className="eDivider"></div>
            <h3>What sets us apart</h3>
            <ul>
              <li>Customized Approach</li>
              <li>Industry Expertise</li>
              <li>Engaging Learning Experiences</li>
              <li>Seamless Integration</li>
              <li>Measurable Results</li>
              <li>In-depth Needs Analysis:</li>
              <li>Instructional Design Expertise</li>
              <li>Continuous Improvement</li>
              <li>Quality Assurance</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ELearning;
