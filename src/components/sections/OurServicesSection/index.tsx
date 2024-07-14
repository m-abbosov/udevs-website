import SectionHeading from "@/components/common/SectionHeading";
import {services} from "@/utils/servicesData";
import Image from "next/image";
import css from "./style.module.css";

const OurServicesSection = () => {
  return (
    <section className={css.section} id="directs">
      <div className="container">
        <SectionHeading
          className="md:text-center lg:text-left"
          data-aos="fade-up"
        >
          Our services
        </SectionHeading>
        <div className={css.services}>
          {services.map((item) => {
            return (
              <div
                data-aos="fade-up"
                className={css.servicesCard}
                key={item.id}
              >
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
