import React from "react";
import "./style.css";

function ContactForm() {
  return (
    <form>
      <div className="cFormTab flex alignCenter justifyCenter width100 spaceBtw marginBottom1">
        <div className="cInput width49">
          <input type="text" placeholder="Name" />
        </div>
        <div className="cInput width49">
          <input type="email" placeholder="Working Email" />
        </div>
      </div>
      <div className="cFormTab flex alignCenter justifyCenter width100 spaceBtw marginBottom1">
        <div className="cInput width49">
          <input type="number" placeholder="Number" />
        </div>
        <div className="cInput width49">
          <input type="text" placeholder="Company Name" />
        </div>
      </div>
      <div className="cFormTab flex alignCenter justifyCenter width100 spaceBtw marginBottom1">
        <div className="cInput width49">
          <input type="text" placeholder="Job Title" />
        </div>
        <div className="cInput width49">
          <select>
            <option>General inquiry</option>
            <option>Training inquiry</option>
            <option>Consulting inquiry</option>
            <option>Technical support request</option>
            <option>Billing inquiry</option>
            <option>Partnership inquiry</option>
            <option>Job Related</option>
            <option>Feedback or suggestion</option>
            <option>Other (Write in Message Box)</option>
          </select>
        </div>
      </div>
      <div className="cFormTab flex alignCenter justifyCenter width100 spaceBtw marginBottom1">
        <div className="cInput width49">
          <input type="text" placeholder="Country" />
        </div>
        <div className="cInput width49">
          <input type="text" placeholder="State" />
        </div>
      </div>
      <div className="cFormTab flex alignCenter justifyCenter width100 spaceBtw marginBottom1">
        <div className="cInput width49">
          <input type="text" placeholder="City" />
        </div>
        <div className="cInput width49">
          <input type="number" placeholder="Zip Code" />
        </div>
      </div>
      <div className="cFormTab flex alignCenter justifyCenter width100 marginBottom1">
        <div className="cInput width100">
          <textarea placeholder="Enter Your Message" rows="5" />
        </div>
      </div>
      <div className="cFormTab flex alignCenter justifyCenter width100 marginBottom1">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
