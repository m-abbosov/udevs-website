"use client";
import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";
import css from "./style.module.css";

import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import TeamImage from "../../../../public/images/team-image.svg";

const TeamSection = () => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section className={css.section} ref={ref} id="team">
      <div className="container">
        <SectionHeading>Team</SectionHeading>
        <div className="flex items-center justify-between gap-3">
          <div className="w-48p">
            <SectionHeading type="description">
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </SectionHeading>
            <CountUp
              className={css.countUp}
              start={0}
              end={inView ? 100 : 0}
              duration={5}
              suffix="+"
            />
            <h3 className={css.title}>Dedicated team</h3>
          </div>
          <Image data-aos="zoom-in" className="w-48p" src={TeamImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
