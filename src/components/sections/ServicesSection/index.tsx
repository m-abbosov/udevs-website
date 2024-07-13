import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";
import css from "./style.module.css";

import {services} from "@/utils/servicesData";
import BgPattern from "../../../../public/images/bg_pattern.png";

const ServicesSection = () => {
  return (
    <section className={css.sections}>
      {services.map((item, index) => {
        if (index !== 0)
          return (
            <div
              className={`${css.section} ${index % 2 === 1 ? css.bgImage : ""}`}
              key={item.id}
            >
              <div className="container">
                <SectionHeading>{item.titleDetail}</SectionHeading>
                <div
                  className={`flex items-center h-full justify-between gap-4 ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-48p">
                    <SectionHeading type="description" size="lg">
                      {item.description}
                    </SectionHeading>
                    <div className="flex flex-wrap my-10">
                      {item.services?.map((serviceItem) => (
                        <div className={css.serviceItem} key={serviceItem.id}>
                          <Image
                            src={serviceItem.icon}
                            alt={serviceItem.title}
                            className="mb-3"
                          />
                          <span>{serviceItem.title}</span>
                        </div>
                      ))}
                    </div>
                    {item.technologies?.length && (
                      <div>
                        <h3 className={css.techTitle}>Technologies</h3>
                        <div className="flex mt-6">
                          {item.technologies.map((techItem) => (
                            <div className={css.techItem} key={techItem.id}>
                              <Image
                                className="w-14"
                                src={techItem.icon}
                                alt={techItem.title}
                              />
                              <span className={css.techItemTitle}>
                                {techItem.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-48p " style={{height: "500px"}}>
                    <div className={css.imageWrapper}>
                      {index !== services.length - 1 && (
                        <Image
                          className={css.imagePattern}
                          src={BgPattern}
                          alt=""
                        />
                      )}
                      <Image
                        className={css.serviceImage}
                        src={item.image}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
      })}
    </section>
  );
};

export default ServicesSection;
