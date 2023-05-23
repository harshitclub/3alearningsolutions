import JoinUsForm from "@/components/JoinUsForm/JoinUsForm";
import "./style.css";

const JoinUs = () => {
  return (
    <>
      <section className="joinUsContainer flex alignCenter justifyCenter width100 spaceBtw">
        <div className="joinUsContainerLeft flex alignCenter justifyCenter width50 ">
          <JoinUsForm />
        </div>
        <div className="joinUsContainerRight flex alignCenter justifyCenter width50 "></div>
      </section>
    </>
  );
};

export default JoinUs;
