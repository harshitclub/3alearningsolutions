"use client";

import React, { useState } from "react";
import "./style.css";
import { RiArrowDownSLine } from "react-icons/ri";
import { faqs } from "./faq";

const faqTab1 = faqs.slice(0, 2);
const faqTab2 = faqs.slice(2, 4);
const faqTab3 = faqs.slice(4, 6);
const faqTab4 = faqs.slice(6, 8);

function Faq() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    if (selectedQuestion === index) {
      // If the clicked question is already selected, unselect it
      setSelectedQuestion(null);
    } else {
      // Otherwise, select the clicked question
      setSelectedQuestion(index);
    }
  };
  return (
    <section className="faq flex alignCenter justifyCenter flexColumn width100">
      <div className="faqContainer width95 maxWidth">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faqHr"></div>
        <p>Find Everything You Need to Know</p>
        <div className="faqTab flex alignStart justifyCenter spaceBtw">
          {faqTab1.map((faq) => {
            return (
              <>
                <div
                  className="faqBox"
                  key={faq.id}
                  onClick={() => handleQuestionClick(faq.id)}
                >
                  <div className="faqHead flex alignCenter justifyCenter spaceBtw">
                    <h4>
                      {faq.id}. {faq.ques}
                    </h4>
                    <RiArrowDownSLine />
                  </div>
                  {selectedQuestion === faq.id && <p>{faq.ans}</p>}
                </div>
              </>
            );
          })}
        </div>
        <div className="faqTab flex alignStart justifyCenter spaceBtw">
          {faqTab2.map((faq) => {
            return (
              <>
                <div
                  className="faqBox"
                  key={faq.id}
                  onClick={() => handleQuestionClick(faq.id)}
                >
                  <div className="faqHead flex alignCenter justifyCenter spaceBtw">
                    <h4>
                      {faq.id}. {faq.ques}
                    </h4>
                    <RiArrowDownSLine />
                  </div>
                  {selectedQuestion === faq.id && <p>{faq.ans}</p>}
                </div>
              </>
            );
          })}
        </div>
        <div className="faqTab flex alignStart justifyCenter spaceBtw">
          {faqTab3.map((faq) => {
            return (
              <>
                <div
                  className="faqBox"
                  key={faq.id}
                  onClick={() => handleQuestionClick(faq.id)}
                >
                  <div className="faqHead flex alignCenter justifyCenter spaceBtw">
                    <h4>
                      {faq.id}. {faq.ques}
                    </h4>
                    <RiArrowDownSLine />
                  </div>
                  {selectedQuestion === faq.id && <p>{faq.ans}</p>}
                </div>
              </>
            );
          })}
        </div>
        <div className="faqTab flex alignStart justifyCenter spaceBtw">
          {faqTab4.map((faq) => {
            return (
              <>
                <div
                  className="faqBox"
                  key={faq.id}
                  onClick={() => handleQuestionClick(faq.id)}
                >
                  <div className="faqHead flex alignCenter justifyCenter spaceBtw">
                    <h4>
                      {faq.id}. {faq.ques}
                    </h4>
                    <RiArrowDownSLine />
                  </div>
                  {selectedQuestion === faq.id && <p>{faq.ans}</p>}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
