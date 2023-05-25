import "./style.css";
import britishCouncil from "../../../public/clients/britishCouncil.png";
import hcl from "../../../public/clients/hcl.png";
import hp from "../../../public/clients/hp.png";
import jcb from "../../../public/clients/jcb.png";
import landt from "../../../public/clients/landt.png";
import mahindra from "../../../public/clients/mahindra.png";
import neosoft from "../../../public/clients/neosoft.png";
import tata from "../../../public/clients/tata.png";
import unitedHealth from "../../../public/clients/unitedhealth.png";
import videocon from "../../../public/clients/videocon.png";
import nivea from "../../../public/clients/nivea.png";
import lg from "../../../public/clients/lg.png";
import fiserv from "../../../public/clients/fiserv.png";
import adobe from "../../../public/clients/adobe.png";
import gemalto from "../../../public/clients/gemalto.png";
import serco from "../../../public/clients/Serco.png";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="clientSection width100 flex alignCenter justifyCenter flexColumn">
      <div className="clientSContainer width95 maxWidth flex alignStart justifyCenter flexColumn">
        <h2>OUR CLIENTS</h2>
        <div className="clientHr"></div>
        <div className="clientHr2"></div>
        <p>
          Empowering professionals globally with our training solutions - 80+
          companies and counting.
        </p>
        <div className="clientTab flex alignCenter justifyCenter">
          <div className="clientBox">
            <Image src={britishCouncil} />
          </div>
          <div className="clientBox">
            <Image src={tata} />
          </div>
          <div className="clientBox">
            <Image src={hp} />
          </div>
          <div className="clientBox">
            <Image src={jcb} />
          </div>
          <div className="clientBox">
            <Image src={hcl} />
          </div>
          <div className="clientBox">
            <Image src={fiserv} />
          </div>
          <div className="clientBox">
            <Image src={serco} />
          </div>
          <div className="clientBox">
            <Image src={nivea} />
          </div>
        </div>
        <div className="clientTab flex alignCenter justifyCenter">
          <div className="clientBox">
            <Image src={adobe} />
          </div>
          <div className="clientBox">
            <Image src={landt} />
          </div>
          <div className="clientBox">
            <Image src={mahindra} />
          </div>
          <div className="clientBox">
            <Image src={neosoft} />
          </div>
          <div className="clientBox">
            <Image src={unitedHealth} />
          </div>
          <div className="clientBox">
            <Image src={videocon} />
          </div>
          <div className="clientBox">
            <Image src={gemalto} />
          </div>
          <div className="clientBox">
            <Image src={lg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
