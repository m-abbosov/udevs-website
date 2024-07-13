import SectionHeading from "@/components/common/SectionHeading";
import {clients1, clients2} from "@/utils/clientsData";
import Image from "next/image";

import css from "./style.module.css";

const Clients = () => {
  return (
    <section className={css.section}>
      <div className="container">
        <SectionHeading>Our clients</SectionHeading>
      </div>
      <div className={css.carouselContainer}>
        <div className={css.carouselContent}>
          {clients1.map((client) => (
            <Image
              className={css.carouselItem}
              key={client.id}
              src={client.image}
              alt={client.title}
            />
          ))}
          {clients1.map((client) => (
            <Image
              className={css.carouselItem}
              key={client.id}
              src={client.image}
              alt={client.title}
            />
          ))}
          {clients1.map((client) => (
            <Image
              className={css.carouselItem}
              key={client.id}
              src={client.image}
              alt={client.title}
            />
          ))}
        </div>
      </div>

      <div className={css.carouselContainer}>
        <div className={css.carouselContent2}>
          {clients2.map((client) => (
            <Image
              className={css.carouselItem}
              key={client.id}
              src={client.image}
              alt={client.title}
            />
          ))}
          {clients2.map((client) => (
            <Image
              className={css.carouselItem}
              key={client.id}
              src={client.image}
              alt={client.title}
            />
          ))}
          {clients2.map((client) => (
            <Image
              className={css.carouselItem}
              key={client.id}
              src={client.image}
              alt={client.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
