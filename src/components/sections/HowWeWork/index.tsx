import SectionHeading from "@/components/common/SectionHeading";
import {workData} from "@/utils/workData";
import Image from "next/image";
import css from "./style.module.css";

const HowWeWork = () => {
  return (
    <section className={css.section}>
      <div className="container">
        <SectionHeading>How we work!</SectionHeading>
      </div>
      <div data-aos="fade-up" className={css.steps}>
        {workData.map((step) => (
          <div className={css.step} key={step.id}>
            <Image src={step.icon} alt={step.title} />
            <h3 className={css.stepTitle}>{step.title}</h3>
            <p className={css.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
