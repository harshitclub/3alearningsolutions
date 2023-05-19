import "./style.css";
import ContactForm from "@/components/ContactForm/ContactForm";

const ELearning = () => {
  return (
    <>
      <section className="eLearningBody width100 flex alignCenter justifyCenter flexColumn">
        <div className="eLearningTab width95 maxWidth flex alignStart justifyCenter spaceBtw">
          <div className="eLearningLeft width45">
            <h2>CONTACT US ANY TIME</h2>

            <ContactForm />
          </div>
          <div className="eLearningRight">
            <h2>Customized E - Learning Solutions</h2>
            <div className="eDivider"></div>
            <h3>
              Engage, Learn, Succeed -<br />
              <span>
                Tailored eLearning Courses for Individuals and Corporates
              </span>
            </h3>
            <div className="eDivider"></div>
            <p className="marginBottom1">
              At 3a Learning Solutions, we are dedicated to delivering
              customized eLearning solutions that cater to the unique learning
              objectives of individuals and corporations. Our goal is to
              transform traditional corporate training content into highly
              engaging and interactive eLearning courses that provide an
              immersive learning experience.
            </p>
            <p className="marginBottom1">
              Our team of experienced instructional designers and subject matter
              experts work closely with you to understand your specific
              requirements and create tailored eLearning content that meets your
              training needs. Whether you are an individual seeking to enhance
              your skills or a corporation looking to upskill your workforce, we
              have the expertise to develop impactful eLearning courses.
            </p>
            <p>
              Whether you are an individual seeking professional development or
              a company aiming to enhance the skills of your workforce, our
              customized eLearning solutions are designed to meet your unique
              requirements and deliver measurable results.
            </p>
          </div>
        </div>
      </section>
      <section className="eLearningExperties width95">
        <div className="eLearningETab width100">
          <h2>OUR EXPERTIES</h2>
          <div className="eDivider"></div>
          <p className="marginBottom1">
            At 3a Learning Solutions, we are dedicated to providing top-notch
            custom eLearning content creation services tailored specifically for
            corporates across diverse industry sectors. We understand that each
            organization has unique training requirements and objectives, and we
            are here to meet those needs with our expertise and experience in
            eLearning development.
          </p>
          <p className="marginBottom2">
            We go beyond just creating eLearning content for corporates. We take
            the time to perform thorough analysis and research to ensure that
            the eLearning content we develop aligns perfectly with our clients'
            business goals and learning contexts.
          </p>
          <div className="eLearningEBoxes flex alignStart justifyCenter spaceBtw">
            <div className="eLearningBox">
              <h4>Customized E-Learning</h4>
              <div className="eBoxDivider"></div>
              <p>
                By providing solutions with specific content that are based on
                organisational needs, we may increase our capacity for learning
                and effectively transmit knowledge.
              </p>
            </div>
            <div className="eLearningBox">
              <h4>Micro Learning</h4>
              <div className="eBoxDivider"></div>
              <p>
                In order to provide impactful or powerfull learning experience
                and assess the capabilities, we enhance the content with
                eye-catching images and animations.
              </p>
            </div>
            <div className="eLearningBox">
              <h4>Blended Learning</h4>
              <div className="eBoxDivider"></div>
              <p>
                Using the ideal blend of selected tools, like virtual
                classrooms, video conferencing, virtual conference rooms, etc.,
                create complete or balanced learning environment.
              </p>
            </div>
            <div className="eLearningBox">
              <h4>Translation and Localization</h4>
              <div className="eBoxDivider"></div>
              <p>
                We provide eLearning content in more than 50+ languages by
                translation and localization to meet the demands of a variety
                corporate learners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ELearning;
