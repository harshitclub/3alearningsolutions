import ContactForm from "@/components/ContactForm/ContactForm";
import "./style.css";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <section className="contactBody width100 flex alignCenter justifyCenter flexColumn">
        <div className="contactTab width95 maxWidth flex alignStart justifyCenter spaceBtw">
          <div className="contactLeft width50">
            <h2>CONTACT US ANY TIME</h2>
            <ContactForm />
          </div>
          <div className="contactRight width48">
            <h2>3a Learning Solutions India Pvt. Ltd</h2>
            <h3>
              Address <HiLocationMarker className="cIcons" />
            </h3>
            <div className="cDivider"></div>
            <p>110020, New Delhi</p>
            <h3>
              Phone <HiPhone className="cIcons" />
            </h3>
            <div className="cDivider"></div>
            <p>
              <a href="/">+91 8178283234</a>
            </p>
            <h3>
              Email <HiMail className="cIcons" />
            </h3>
            <div className="cDivider"></div>
            <p className="marginBottom05">
              <a href="/">info@3alearningsolutions.com</a>
            </p>
            <p>
              <a href="/">kundan.k@3alearningsolutions.com</a>
            </p>
            <p>
              <span>Note - </span>For urgent matters, it is recommended to
              contact us by phone for a faster response.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
