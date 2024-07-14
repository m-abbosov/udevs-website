"use client";
import Image from "next/image";
import css from "./style.module.css";

import Button from "@/components/common/Button";
import {TypeAnimation} from "react-type-animation";
import Logo from "../../../../public/icons/logo.svg";
import HeroImage from "../../../../public/images/hero-image.svg";

function HeroSection() {
  return (
    <section className={css.section}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Image className={css.logo} src={Logo} alt="Udevs" />
            <h1 className={css.title}>IT-Outsourcing Company</h1>
            <TypeAnimation
              className={css.titleWrite}
              sequence={[
                "Optimization IT consulting infrastructure",
                2000,
                "IT Consulting",
                2000,
                "Development of mobile applications",
                2000,
                "Development and implementation ERP systems",
                2000,
                "User interface, User experience design",
                2000,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
            />
            <Button size="lg">Contact</Button>
          </div>
          <Image src={HeroImage} alt="Udevs - Software development agency" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
