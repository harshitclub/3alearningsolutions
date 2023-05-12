import "./style.css";
import { technology } from "./Technology";

const Footer = () => {
  return (
    <footer className="width100 flex flexColumn alignCenter justifyCenter">
      <div className="techFooter width95 flex maxWidth flexWrap">
        {technology.map((tech, index) => {
          return (
            <>
              <div className="techName border padding">
                <p>{tech.technology}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="footer width95 border maxWidth padding  ">
        <h1>Footer</h1>
      </div>
    </footer>
  );
};

export default Footer;
