"use client";

import React, { useState } from "react";
import "./style.css";
import {
  programCategory,
  applicationdevelopment,
  cloudtechnologies,
  devOps,
  cloudservices,
  nichetrainings,
  databasemanagement,
  softskills,
  emergingtechnologies,
  qualitymanagement,
  projectmanagement,
  applicationserver,
  esb,
  os,
  framework,
  process,
  artificialintelligence,
  as400,
  fullstack,
  programminglanguages,
  machinelearning,
  iacdevops,
  iot,
  bpm,
  automation,
  cloudcomputing,
  testing,
  scripting,
  springboot,
  security,
  mainframe,
  webdev,
  crm,
  messaging,
  containers,
  designpattern,
  microservices,
  cms,
  cicd,
  middleware,
  webserver,
  erp,
  networks,
  others,
  amazon,
  microsoftazure,
  google,
  oracle,
  redhat,
  ibm,
  pivotal,
  cothers,
  agiletools,
  buildtools,
  monitoring,
  artifactory,
  database,
  dqualitymanagement,
  continuousdeployment,
  dmicroservices,
  ciscotraining,
  juniper,
  csecurity,
  microsofttrainings,
  unixadministration,
  mainframe400,
  nprogram1,
  nprogram2,
  nprogram3,
  data_visualization,
  data_analytics,
  big_data,
  data_integration,
  no_sql,
  ddatabase,
  business_intelligence,
  dothers,
  communication_skills,
  leadership_skills,
  influencing,
  emerging_technologies,
  quality_management,
  project_management,
} from "./programData";

const page = () => {
  const [category, setCategory] = useState("");
  const [program, setProgram] = useState("");

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleProgram = (e) => {
    setProgram(e.target.value);
  };

  const ProgramUi = () => {
    if (category === "") {
      return (
        <select>
          <option value="">--Program--</option>
        </select>
      );
    } else if (category === "applicationdevelopment") {
      return (
        <select value={program} onChange={handleProgram}>
          {applicationdevelopment.map((item) => {
            return (
              <option value={item.value} key={item.id}>
                {item.program}
              </option>
            );
          })}
        </select>
      );
    } else if (category === "devops") {
      return (
        <select value={program} onChange={handleProgram}>
          {devOps.map((item) => {
            return (
              <option value={item.value} key={item.id}>
                {item.program}
              </option>
            );
          })}
        </select>
      );
    } else if (category === "cloudservices") {
      return (
        <select value={program} onChange={handleProgram}>
          {cloudservices.map((item) => {
            return (
              <option value={item.value} key={item.id}>
                {item.program}
              </option>
            );
          })}
        </select>
      );
    } else if (category === "nichetrainings") {
      return (
        <select value={program} onChange={handleProgram}>
          {nichetrainings.map((item) => {
            return (
              <option value={item.value} key={item.id}>
                {item.program}
              </option>
            );
          })}
        </select>
      );
    } else if (category === "databasemanagement") {
      return (
        <select value={program} onChange={handleProgram}>
          {databasemanagement.map((item) => {
            return (
              <option value={item.value} key={item.id}>
                {item.program}
              </option>
            );
          })}
        </select>
      );
    } else if (category === "softskills") {
      return (
        <select value={program} onChange={handleProgram}>
          {softskills.map((item) => {
            return (
              <option value={item.value} key={item.id}>
                {item.program}
              </option>
            );
          })}
        </select>
      );
    } else if (category === "emergingtechnologies") {
      return (
        <select value={program} onChange={handleProgram}>
          {emergingtechnologies.map((item) => {
            return (
              <option value={item.value} key={item.id}>
                {item.program}
              </option>
            );
          })}
        </select>
      );
    } else if (category === "qualitymanagement") {
      return (
        <select value={program} onChange={handleProgram}>
          {qualitymanagement.map((item) => {
            return (
              <option value={item.value} key={item.id}>
                {item.program}
              </option>
            );
          })}
        </select>
      );
    } else if (category === "projectmanagement") {
      return (
        <select value={program} onChange={handleProgram}>
          {projectmanagement.map((item) => {
            return (
              <option value={item.value} key={item.id}>
                {item.program}
              </option>
            );
          })}
        </select>
      );
    } else if (category === "cloudtechnologies") {
      return (
        <select value={program} onChange={handleProgram}>
          {cloudtechnologies.map((item) => {
            return (
              <option value={item.value} key={item.id}>
                {item.program}
              </option>
            );
          })}
        </select>
      );
    }
  };

  const CourseUi = () => {
    if (program === "applicationserver") {
      return (
        <>
          <h2>Application Server</h2>
          <div className="programContentHr"></div>
          <ul>
            {applicationserver.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "esb") {
      return (
        <>
          <h2>ESB</h2>
          <div className="programContentHr"></div>
          <ul>
            {esb.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "os") {
      return (
        <>
          <h2>OS</h2>
          <div className="programContentHr"></div>
          <ul>
            {os.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "framework") {
      return (
        <>
          <h2>Frameworks</h2>
          <div className="programContentHr"></div>
          <ul>
            {framework.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "process") {
      return (
        <>
          <h2>Process</h2>
          <div className="programContentHr"></div>
          <ul>
            {process.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "artificialintelligence") {
      return (
        <>
          <h2>Artificial Intellingence</h2>
          <div className="programContentHr"></div>
          <ul>
            {artificialintelligence.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "as400") {
      return (
        <>
          <h2>AS400</h2>
          <div className="programContentHr"></div>
          <ul>
            {as400.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "fullstack") {
      return (
        <>
          <h2>Full Stack</h2>
          <div className="programContentHr"></div>
          <ul>
            {fullstack.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "programminglanguages") {
      return (
        <>
          <h2>Programming Languages</h2>
          <div className="programContentHr"></div>
          <ul>
            {programminglanguages.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "machinelearning") {
      return (
        <>
          <h2>Machine Learning</h2>
          <div className="programContentHr"></div>
          <ul>
            {machinelearning.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "iacdevops") {
      return (
        <>
          <h2>Iac/DevOps</h2>
          <div className="programContentHr"></div>
          <ul>
            {iacdevops.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "iot") {
      return (
        <>
          <h2>IOT</h2>
          <div className="programContentHr"></div>
          <ul>
            {iot.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "bpm") {
      return (
        <>
          <h2>BPM</h2>
          <div className="programContentHr"></div>
          <ul>
            {bpm.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "automation") {
      return (
        <>
          <h2>Automation</h2>
          <div className="programContentHr"></div>
          <ul>
            {automation.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "cloudcomputing") {
      return (
        <>
          <h2>Cloud Computing</h2>
          <div className="programContentHr"></div>
          <ul>
            {cloudcomputing.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "testing") {
      return (
        <>
          <h2>Testing</h2>
          <div className="programContentHr"></div>
          <ul>
            {testing.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "scripting") {
      return (
        <>
          <h2>Scripting</h2>
          <div className="programContentHr"></div>
          <ul>
            {scripting.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "springboot") {
      return (
        <>
          <h2>Springboot</h2>
          <div className="programContentHr"></div>
          <ul>
            {springboot.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "security") {
      return (
        <>
          <h2>Security</h2>
          <div className="programContentHr"></div>
          <ul>
            {security.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "mainframe") {
      return (
        <>
          <h2>Mainframe</h2>
          <div className="programContentHr"></div>
          <ul>
            {mainframe.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "webdev") {
      return (
        <>
          <h2>Web Dev</h2>
          <div className="programContentHr"></div>
          <ul>
            {webdev.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "crm") {
      return (
        <>
          <h2>CRM</h2>
          <div className="programContentHr"></div>
          <ul>
            {crm.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "messaging") {
      return (
        <>
          <h2>Messaging</h2>
          <div className="programContentHr"></div>
          <ul>
            {messaging.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "containers") {
      return (
        <>
          <h2>Containers</h2>
          <div className="programContentHr"></div>
          <ul>
            {containers.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "designpattern") {
      return (
        <>
          <h2>Design Pattern</h2>
          <div className="programContentHr"></div>
          <ul>
            {designpattern.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "microservices") {
      return (
        <>
          <h2>Microservices</h2>
          <div className="programContentHr"></div>
          <ul>
            {microservices.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "cms") {
      return (
        <>
          <h2>CMS</h2>
          <div className="programContentHr"></div>
          <ul>
            {cms.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "cicd") {
      return (
        <>
          <h2>CI/CD</h2>
          <div className="programContentHr"></div>
          <ul>
            {cicd.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "middleware") {
      return (
        <>
          <h2>Middleware</h2>
          <div className="programContentHr"></div>
          <ul>
            {middleware.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "webserver") {
      return (
        <>
          <h2>Web Server</h2>
          <div className="programContentHr"></div>
          <ul>
            {webserver.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "erp") {
      return (
        <>
          <h2>ERP</h2>
          <div className="programContentHr"></div>
          <ul>
            {erp.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "networks") {
      return (
        <>
          <h2>Networks</h2>
          <div className="programContentHr"></div>
          <ul>
            {networks.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "others") {
      return (
        <>
          <h2>Others</h2>
          <div className="programContentHr"></div>
          <ul>
            {others.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "amazon") {
      return (
        <>
          <h2>Amazon</h2>
          <div className="programContentHr"></div>
          <ul>
            {amazon.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "microsoftazure") {
      return (
        <>
          <h2>Microsoft Azure</h2>
          <div className="programContentHr"></div>
          <ul>
            {microsoftazure.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "google") {
      return (
        <>
          <h2>Google</h2>
          <div className="programContentHr"></div>
          <ul>
            {google.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "oracle") {
      return (
        <>
          <h2>Oracle</h2>
          <div className="programContentHr"></div>
          <ul>
            {oracle.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "redhat") {
      return (
        <>
          <h2>Redhat</h2>
          <div className="programContentHr"></div>
          <ul>
            {redhat.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "ibm") {
      return (
        <>
          <h2>IBM</h2>
          <div className="programContentHr"></div>
          <ul>
            {ibm.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "pivotal") {
      return (
        <>
          <h2>Pivotal</h2>
          <div className="programContentHr"></div>
          <ul>
            {pivotal.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "cothers") {
      return (
        <>
          <h2>Others</h2>
          <div className="programContentHr"></div>
          <ul>
            {cothers.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "agiletools") {
      return (
        <>
          <h2>Agile Tools</h2>
          <div className="programContentHr"></div>
          <ul>
            {agiletools.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "buildtools") {
      return (
        <>
          <h2>Build Tools</h2>
          <div className="programContentHr"></div>
          <ul>
            {buildtools.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "monitoring") {
      return (
        <>
          <h2>Monitoring</h2>
          <div className="programContentHr"></div>
          <ul>
            {monitoring.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "artifactory") {
      return (
        <>
          <h2>Artifactory</h2>
          <div className="programContentHr"></div>
          <ul>
            {artifactory.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "database") {
      return (
        <>
          <h2>Database</h2>
          <div className="programContentHr"></div>
          <ul>
            {database.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "dqualitymanagement") {
      return (
        <>
          <h2>Quality Management</h2>
          <div className="programContentHr"></div>
          <ul>
            {dqualitymanagement.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "continuousdeployment") {
      return (
        <>
          <h2>Continuous Deployment</h2>
          <div className="programContentHr"></div>
          <ul>
            {continuousdeployment.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "dmicroservices") {
      return (
        <>
          <h2>Micro Services</h2>
          <div className="programContentHr"></div>
          <ul>
            {dmicroservices.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "ciscotraining") {
      return (
        <>
          <h2>Cisco Training</h2>
          <div className="programContentHr"></div>
          <ul>
            {ciscotraining.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "juniper") {
      return (
        <>
          <h2>Juniper</h2>
          <div className="programContentHr"></div>
          <ul>
            {juniper.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "csecurity") {
      return (
        <>
          <h2>Security</h2>
          <div className="programContentHr"></div>
          <ul>
            {csecurity.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "microsofttrainings") {
      return (
        <>
          <h2>Microsoft Trainings</h2>
          <div className="programContentHr"></div>
          <ul>
            {microsofttrainings.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "unixadministration") {
      return (
        <>
          <h2>Unix Administration</h2>
          <div className="programContentHr"></div>
          <ul>
            {unixadministration.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "mainframe400") {
      return (
        <>
          <h2>Mainframe / AS 400</h2>
          <div className="programContentHr"></div>
          <ul>
            {mainframe400.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "nprogram1") {
      return (
        <>
          <h2>Program 1</h2>
          <div className="programContentHr"></div>
          <ul>
            {nprogram1.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "nprogram2") {
      return (
        <>
          <h2>Program 2</h2>
          <div className="programContentHr"></div>
          <ul>
            {nprogram2.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "nprogram3") {
      return (
        <>
          <h2>Program 3</h2>
          <div className="programContentHr"></div>
          <ul>
            {nprogram3.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "data_visualization") {
      return (
        <>
          <h2>Data Visualization</h2>
          <div className="programContentHr"></div>
          <ul>
            {data_visualization.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "data_analytics") {
      return (
        <>
          <h2>Data Analytics</h2>
          <div className="programContentHr"></div>
          <ul>
            {data_analytics.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "big_data") {
      return (
        <>
          <h2>Big Data</h2>
          <div className="programContentHr"></div>
          <ul>
            {big_data.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "data_integration") {
      return (
        <>
          <h2>Data Integration</h2>
          <div className="programContentHr"></div>
          <ul>
            {data_integration.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "no_sql") {
      return (
        <>
          <h2>No SQL</h2>
          <div className="programContentHr"></div>
          <ul>
            {no_sql.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "ddatabase") {
      return (
        <>
          <h2>Database</h2>
          <div className="programContentHr"></div>
          <ul>
            {ddatabase.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "business_intelligence") {
      return (
        <>
          <h2>Business Intelligence</h2>
          <div className="programContentHr"></div>
          <ul>
            {business_intelligence.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "dothers") {
      return (
        <>
          <h2>Others</h2>
          <div className="programContentHr"></div>
          <ul>
            {dothers.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "communication_skills") {
      return (
        <>
          <h2>Communication Skills</h2>
          <div className="programContentHr"></div>
          <ul>
            {communication_skills.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "leadership_skills") {
      return (
        <>
          <h2>Leadership Skills</h2>
          <div className="programContentHr"></div>
          <ul>
            {leadership_skills.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "influencing") {
      return (
        <>
          <h2>Influencing</h2>
          <div className="programContentHr"></div>
          <ul>
            {influencing.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "emerging_technologies") {
      return (
        <>
          <h2>Emerging Technologies</h2>
          <div className="programContentHr"></div>
          <ul>
            {emerging_technologies.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "quality_management") {
      return (
        <>
          <h2>Quality Management</h2>
          <div className="programContentHr"></div>
          <ul>
            {quality_management.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    } else if (program === "project_management") {
      return (
        <>
          <h2>PROJECT MANAGEMENT</h2>
          <div className="programContentHr"></div>
          <ul>
            {project_management.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </>
      );
    }
  };

  return (
    <section className="program flex alignCenter justifyCenter flexColumn width95">
      <div className="programContainer width95 maxWidth flex justifyCenter alignStart spaceBtw">
        <div className="programCLeft width48">
          <div className="programSelectTab width100">
            <div className="programSLeft width90">
              <h2>Choose Category</h2>
              <select value={category} onChange={handleCategory}>
                <option value="">--Category--</option>
                {programCategory.map((item) => {
                  return (
                    <option value={item.value} key={item.id}>
                      {item.category}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="programSRight width90">
              <h2>Choose Program</h2>
              <ProgramUi />
            </div>
          </div>
        </div>
        <div className="programCDivider"></div>
        <div className="programCRight width50">
          <div className="programContent">
            {program === "" ? (
              <>
                <div className="flex alignCenter justifyCenter width100 height15 flexColumn">
                  <h2 className="programCNullHeading">No Data To Show</h2>
                  <h3 className="programCNullHeading2">
                    Select Category and Program to see the content.
                  </h3>
                </div>
              </>
            ) : (
              ""
            )}
            <CourseUi />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
