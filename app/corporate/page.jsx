import {
  RiCodeSSlashLine,
  RiDatabaseLine,
  RiGlobalLine,
  RiLineChartLine,
  RiMarkupLine,
} from "react-icons/ri";
import "./style.css";

const Corporate = () => {
  return (
    <>
      <section className="corporateContainer width100 flex alignCenter justifyCenter flexColumn">
        <div className="corporateContent maxWidth width95">
          <p className="marginBottom1">
            At 3a Learning Solutions, we have built a strong reputation as the
            leading provider of customized training solutions for corporations.
            With our extensive expertise and experience, we are trusted by
            organizations of all sizes to deliver trainings that effectively
            empower their employees. Our focus is on equipping your workforce
            with the most up-to-date knowledge and skills in rapidly evolving
            fields such as Cloud Computing, Artificial Intelligence & Machine
            Learning, Big Data, Blockchain, and more.
          </p>
          <div className="corporateBoxTab flex alignCenter justifyCenter width100 spaceBtw marginBottom2">
            <div className="corporateBox flex alignCenter justifyCenter flexColumn">
              <h4>100,000+</h4>
              <p>Professionals Trained</p>
            </div>
            <div className="corporateBox flex alignCenter justifyCenter flexColumn">
              <h4>100+</h4>
              <p>Corporates Covered</p>
            </div>
            <div className="corporateBox flex alignCenter justifyCenter flexColumn">
              <h4>30+</h4>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </section>
      <section className="corporateCovered width100 flex alignCenter justifyCenter flexColumn">
        <div className="corporateCovTab maxWidth width95">
          <h2>TECHNOLOGIES COVERED</h2>
          <h4>
            SOFTWARE <RiCodeSSlashLine className="techCovIcons" />
          </h4>
          <ul>
            <li>Java Training</li>
            <li>Python</li>
            <li>Angular</li>
            <li>MEAN Stack</li>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>MERN</li>
            <li>Etc</li>
          </ul>
          <div className="techCovDivider"></div>
          <h4>
            Networking <RiGlobalLine className="techCovIcons" />
          </h4>
          <ul>
            <li>GCP</li>
            <li>Azure</li>
            <li>Devops</li>
            <li>VmWare</li>
            <li>AWS</li>
            <li>Linux</li>
            <li>MCSA</li>
            <li>SCCM</li>
            <li>Etc</li>
          </ul>
          <div className="techCovDivider"></div>
          <h4>
            Big Data <RiDatabaseLine className="techCovIcons" />
          </h4>
          <ul>
            <li>Data Science</li>
            <li>IoT</li>
            <li>Python</li>
            <li>Django</li>
            <li>Kotlin</li>
            <li>Android</li>
            <li>AI</li>
            <li>ML</li>
            <li>Etc</li>
          </ul>
          <div className="techCovDivider"></div>
          <h4>
            CAD & Interior <RiMarkupLine className="techCovIcons" />
          </h4>
          <ul>
            <li>Google Sketchup</li>
            <li>3DsMax</li>
            <li>Revit MEP</li>
            <li>Revit Arch</li>
            <li>HyperMesh</li>
            <li>Ansys</li>
            <li>SolidWorks</li>
            <li>Unigraphic</li>
            <li>Etc</li>
          </ul>
          <div className="techCovDivider"></div>
          <h4>
            HR & Language <RiLineChartLine className="techCovIcons" />
          </h4>
          <ul>
            <li>HR Training</li>
            <li>HR Analytics</li>
            <li>HR Audit</li>
            <li>SAP HR</li>
            <li>HRBP</li>
            <li>Spoken English</li>
            <li>German Language</li>
            <li>Japanese Language</li>
            <li>Etc</li>
          </ul>

          <div className="corporateCatalogBtn">
            <a href="/programs">
              <p>Browse Courses Catalogue</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Corporate;
