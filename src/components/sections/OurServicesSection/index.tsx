import SectionHeading from "@/components/common/SectionHeading";
import {services} from "@/utils/data";
import Image from "next/image";
import css from "./style.module.css";

const OurServicesSection = () => {
  return (
    <section className={css.section}>
      <div className="container">
        <SectionHeading>Our services</SectionHeading>
        <div className={css.services}>
          {services.map((item) => {
            return (
              <div className={css.servicesCard} key={item.id}>
                <Image
                  className={css.servicesCardImage}
                  src={item.icon}
                  alt={item.title}
                />
                <h3 className={css.servicesCardTitle}>{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
