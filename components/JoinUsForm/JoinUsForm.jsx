import React from "react";
import "./style.css";

function JoinUsForm() {
  return (
    <form>
      <div className="flex alignCenter justifyCenter width100 spaceBtw marginBottom1">
        <div className="width49">
          <label>
            Name<span>*</span>
          </label>
          <input type="text" placeholder="ex. Your Name" />
        </div>
        <div className="width49">
          <label>
            Email<span>*</span>
          </label>
          <input type="email" placeholder="ex. info@3alearningsolutions.com" />
        </div>
      </div>
      <div className="flex alignCenter justifyCenter width100 spaceBtw marginBottom1">
        <div className="width49">
          <label>
            Phone<span>*</span>
          </label>
          <input type="number" placeholder="ex. 9876543210" />
        </div>
        <div className="width49">
          <label>
            Date of Birth<span>*</span>
          </label>
          <input type="date" placeholder="Date of Birth" />
        </div>
      </div>
      <div className="flex alignCenter justifyCenter width100 spaceBtw marginBottom1">
        <div className="width100">
          <label>
            Position<span>*</span>
          </label>
          <select>
            <option>--Select--</option>
            <option>Front-End Developer</option>
            <option>Backend-End Developer</option>
            <option>Graphic Designer</option>
            <option>HR</option>
          </select>
        </div>
      </div>
      <div className="flex alignCenter justifyCenter width100 spaceBtw marginBottom1">
        <div className="width49">
          <label>
            Country<span>*</span>
          </label>
          <input type="text" placeholder="ex. India" />
        </div>
        <div className="width49">
          <label>
            State<span>*</span>
          </label>
          <input type="text" placeholder="ex. Uttar Pradesh" />
        </div>
      </div>
      <div className="flex alignCenter justifyCenter width100 spaceBtw marginBottom1">
        <div className="width49">
          <label>
            City<span>*</span>
          </label>
          <input type="text" placeholder="ex. Noida" />
        </div>
        <div className="width49">
          <label>
            Zip Code<span>*</span>
          </label>
          <input type="number" placeholder="ex. 201309" />
        </div>
      </div>
      <div className="  width100 marginBottom1 fileUpload">
        <div className="width100 flex spaceBtw alignCenter justifyCenter">
          <label>
            Resume & Files<span>*</span>
          </label>

          <input type="file" placeholder="upload" className="width50" />
        </div>
      </div>
      <div className="flex alignCenter justifyCenter width100 marginBottom1">
        <div className="width100">
          <label>
            Address<span>*</span>
          </label>
          <textarea rows="2" />
        </div>
      </div>
      <div className="flex alignCenter justifyCenter width100 marginBottom1">
        <div className="width100">
          <label>Any Message</label>
          <textarea rows="5" />
        </div>
      </div>
      <div className="flex alignCenter justifyCenter width100 ">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default JoinUsForm;
