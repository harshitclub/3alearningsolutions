import "./style.css";

const Services = () => {
  return (
    <section className="serviceSection width100 flex alignCenter justifyStart flexColumn">
      <div className="serviceSContainer width95 maxWidth">
        <h2>OUR SERVICES</h2>
        <p className="marginBottom2">
          Our services are categorized into three areas - Product, People, and
          Process
        </p>
        <div className="serviceSecTab flex alignCenter justifyCenter spaceBtw marginBottom3">
          <div className="serviceSecBox">
            <h4>Product-Oriented Trainings</h4>
            <div className="orangeDash"></div>
            <div className="orangeDash2"></div>
            <p>
              Our product-oriented training solutions are designed to help
              individuals and organizations develop the skills and knowledge
              they need to succeed in today's rapidly evolving technology
              landscape.
            </p>
            <p>
              We offer training solutions for a range of products, including
              Microsoft, Oracle, SAP, Enterprise Solution Architecture, Big
              Data, Distributed Computing, Cloud Computing, Cybersecurity,
              AI/ML, Block Chain, and more.
            </p>
          </div>
          <div className="serviceSecBox">
            <h4>People Development Trainings</h4>
            <div className="orangeDash"></div>
            <div className="orangeDash2"></div>
            <p>
              We understand that developing technical skills alone is not enough
              to achieve success - people skills are equally important. That's
              why we offer people development training solutions to help
              individuals and organizations improve their soft skills and
              behavioral competencies.
            </p>
            <p>
              Our people development training solutions cover a wide range of
              topics, including business communication, leadership, train the
              trainer, and more.
            </p>
          </div>
          <div className="serviceSecBox">
            <h4>Process-Oriented Trainings</h4>
            <div className="orangeDash"></div>
            <div className="orangeDash2"></div>
            <p>
              We understand that processes play a critical role in achieving
              organizational success. That's why we offer process-oriented
              training solutions to help individuals and organizations develop
              the knowledge and skills they need to optimize their processes and
              achieve better outcomes.
            </p>
            <p>
              Our process-oriented training solutions cover a range of topics,
              including ITIL, PMP, PRINCE2, COBIT, ISO, Six Sigma, Lean, VSM,
              TQM, SCM, and more.
            </p>
          </div>
        </div>
        <p>
          In addition to our specialized training solutions, we also offer
          customized training and consulting solutions tailored to your unique
          needs. Our team of expert trainers and consultants bring a wealth of
          experience and expertise to the table, ensuring that you receive the
          best possible service and outcomes.
        </p>
        <p>
          So whether you're looking to enhance your technical skills, develop
          your people skills, or optimize your processes, 3a Learning Solutions
          India Pvt. Ltd is here to help you achieve your goals. Contact us
          today to learn more about how we can help you unlock your full
          potential!
        </p>
      </div>
    </section>
  );
};

export default Services;
