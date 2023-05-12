import "./style.css";

const Hero = () => {
  return (
    <section className="hero width100 flex alignCenter justifyStart flexColumn">
      <div className="heroContainer width95 maxWidth flex alignStart justifyCenter flexColumn spaceBtw">
        <div className="heroCChild1 width70">
          <h1 className="marginBottom1">3A LEARNING SOLUTIONS</h1>
          <h2>
            Enhance your company's competitiveness with our comprehensive
            corporate training solutions
          </h2>
          <h3>Align - Assimilate - Apply</h3>
        </div>
        <div className="heroCChild2 flex alignCenter justifyStart width100 spaceBtw padding">
          <div className="scoreBox scoreBox1 flex flexColumn alignCenter justifyCenter">
            <p>1000+</p>
            <h4>Best Courses</h4>
          </div>
          <div className="scoreBox scoreBox2 flex flexColumn alignCenter justifyCenter">
            <p>100,000+</p>
            <h4>Professionals</h4>
          </div>
          <div className="scoreBox flex flexColumn alignCenter justifyCenter">
            <p>100%</p>
            <h4>Satisfaction</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
