import PageSubHeader from "@/components/PageSubHeader/PageSubHeader";
import "./style.css";
import Image from "next/image";
import iCard1 from "@/public/iCards/iCard1.png";
import iCard2 from "@/public/iCards/iCard2.png";
import iCard3 from "@/public/iCards/iCard3.png";
import iCard4 from "@/public/iCards/iCard4.png";
import iCard5 from "@/public/iCards/iCard5.png";
import iCard6 from "@/public/iCards/iCard6.png";
import iCard7 from "@/public/iCards/iCard7.png";
import iCard8 from "@/public/iCards/iCard8.png";

const Individual = () => {
  return (
    <>
      <PageSubHeader
        heading={`LIMITLESS LEARNING`}
        subHeading="MAXIMUM POSSIBILITIES"
        para="At 3a Learning Solutions, we believe in the power of limitless learning and the endless possibilities it brings. We strive to provide people with the tools, knowledge, and skills to break through barriers and reach their full potential."
      />
      <section className="indiContentContainer width100 flex alignCenter justifyCenter flexColumn">
        <div className="indiContent width95 maxWidth">
          <p>
            The transition from academic life to professional is often a
            demanding process. Expectations and responsibilities in the
            workplace are very different than those in campus. The schools and
            colleges need to ensure that their students are up to pace with the
            rigorous demands of competitive world. At 3a Learning Solutions, we
            ensure this in a smooth and stress-free manner.
          </p>
          <p>
            The participants shall improve their interpersonal skills,
            etiquettes and professional image. Our interactive program focuses
            on essential skills that students need to distinguish themselves and
            make a positive impact on their work and social lives.
          </p>
          <p>
            We understand that not all new projects or employees involved
            therein require full-fledged corporate training. Then so, only
            specific individuals or smaller group of individuals are in need of
            trainings. Also, Academic students sometimes may plan for some
            courses individually or in a group. Such Trainings are often
            neglected by institutions and Training Providers. However, we
            specially take care of such Trainings under our Open house Wing.
          </p>
          <ul>
            <li>Diverse Course Offerings</li>
            <li>Emphasis on Learning</li>
            <li>Open to Suggestions</li>
            <li>Discount Schemes for Group Enrollments</li>
            <li>Expert Instructors</li>
            <li>Flexible Schedule</li>
            <li>Interactive and Engaging Format</li>
            <li>Networking Opportunities</li>
            <li>Continuing Education</li>
            <li>Positive Learning Environment</li>
          </ul>
        </div>
      </section>
      <section className="indiTechContainer width100 flex alignCenter justifyCenter flexColumn">
        <div className="indiTech width95 flex alignStart justifyStart flexColumn">
          <h2>Launch Your Career with Top Industry Courses!</h2>
          <div className="indiTechDivider"></div>
          <div className="indiTechDivider2"></div>
          <div className="indiTechImages flex justifyCenter alignCenter spaceBtw">
            <div className="iCard marginBottom1">
              <Image src={iCard1} />
              <div class="iCardContent">
                <div class="iCardHeading">
                  <h3>Application Development</h3>
                </div>
              </div>
            </div>
            <div className="iCard marginBottom1">
              <Image src={iCard2} />
              <div class="iCardContent">
                <div class="iCardHeading">
                  <h3>Cloud Infrastructure</h3>
                </div>
              </div>
            </div>
            <div className="iCard marginBottom1">
              <Image src={iCard3} />
              <div class="iCardContent">
                <div class="iCardHeading">
                  <h3>DevOps</h3>
                </div>
              </div>
            </div>
            <div className="iCard marginBottom1">
              <Image src={iCard4} />
              <div class="iCardContent">
                <div class="iCardHeading">
                  <h3>Database Management</h3>
                </div>
              </div>
            </div>
            <div className="iCard">
              <Image src={iCard5} />
              <div class="iCardContent">
                <div class="iCardHeading">
                  <h3>Soft/Behavioural Skills</h3>
                </div>
              </div>
            </div>
            <div className="iCard">
              <Image src={iCard6} />
              <div class="iCardContent">
                <div class="iCardHeading">
                  <h3>Quality Management</h3>
                </div>
              </div>
            </div>
            <div className="iCard">
              <Image src={iCard7} />
              <div class="iCardContent">
                <div class="iCardHeading">
                  <h3>Project Management</h3>
                </div>
              </div>
            </div>
            <div className="iCard">
              <Image src={iCard8} />
              <div class="iCardContent">
                <div class="iCardHeading">
                  <h3>Emerging Technologies</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Individual;
