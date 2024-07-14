"use client";
import Image from "next/image";
import css from "./style.module.css";

import Button from "@/components/common/Button";
import {scrollToElement} from "@/utils/scrollToElement";
import {useTranslations} from "next-intl";
import {TypeAnimation} from "react-type-animation";
import Logo from "../../../../public/icons/logo.svg";
import HeroImage from "../../../../public/images/hero-image.svg";

function HeroSection() {
  const t = useTranslations("hero");
  return (
    <section className={css.section} id="home">
      <div className="container">
        <div className={`flex items-center justify-between ${css.content} `}>
          <div className={"md:w-full lg:w-1/2"}>
            <Image className={`${css.logo} fadeToTop`} src={Logo} alt="Udevs" />
            <h1 className={`${css.title} fadeToTop dy-1`}>{t("title")}</h1>
            <TypeAnimation
              className={`${css.titleWrite} fadeToTop dy-2 `}
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
            <Button
              onClick={() => scrollToElement("contact")}
              className={`fadeToTop dy-2 ${css.contactBtn}`}
              size="lg"
            >
              {t("btn")}
            </Button>
          </div>
          <Image src={HeroImage} alt="Udevs - Software development agency" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
