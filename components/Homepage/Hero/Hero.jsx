import "./style.css";

const Hero = () => {
  return (
    <section className="hero width100 flex alignCenter justifyCenter flexColumn">
      <div className="heroContainer width95 maxWidth padding flex alignCenter justifyCenter spaceBtw">
        <div className="heroContainerLeft width70">
          <h1 className="marginBottom1">3A LEARNING SOLUTIONS</h1>
          <h2>
            Enhance your company's competitiveness with our comprehensive
            corporate training solutions
          </h2>
        </div>
        <div className="heroContainerRight"></div>
      </div>
    </section>
  );
};

export default Hero;
