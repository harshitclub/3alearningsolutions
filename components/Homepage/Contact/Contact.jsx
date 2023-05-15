import ContactForm from "@/components/ContactForm/ContactForm";
import "./style.css";

const Contact = () => {
  return (
    <section className="contactSection width100 flex alignCenter justifyCenter flexColumn">
      <div className="contactSContainer width95 maxWidth flex alignCenter justifyCenter spaceBtw">
        <div className="contactSCLeft width50">
          <h2>CONTACT US ANY TIME</h2>
          <div className="contactSForm">
            <ContactForm />
          </div>
        </div>
        <div className="contactSCRight width50"></div>
      </div>
    </section>
  );
};

export default Contact;
