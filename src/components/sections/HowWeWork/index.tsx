import SectionHeading from "@/components/common/SectionHeading";
import {workData} from "@/utils/workData";
import Image from "next/image";
import css from "./style.module.css";

import Line from "../../../../public/icons/line.svg";

const HowWeWork = () => {
  return (
    <section className={css.section}>
      <div className="container">
        <SectionHeading>How we work!</SectionHeading>
      </div>
      <div className={css.steps}>
        <Image className={css.line} src={Line} alt="" />
        {workData.map((step) => (
          <div className={css.step} key={step.id}>
            <Image className={css.stepIcon} src={step.icon} alt={step.title} />
            <div className={css.stepContent}>
              <h3 className={css.stepTitle}>{step.title}</h3>
              <p className={css.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
