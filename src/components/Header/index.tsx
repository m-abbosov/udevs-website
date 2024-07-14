"use client";

import css from "./style.module.css";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import {projects} from "@/utils/projectsData";
import {scrollToElement} from "@/utils/scrollToElement";
import {services} from "@/utils/servicesData";
import {useTranslations} from "next-intl";
import Image from "next/image";
import {useState} from "react";
import ArrowDown from "../../../public/icons/arrow-icon.svg";
import EngFlag from "../../../public/icons/eng.svg";
import Logo from "../../../public/icons/logo.svg";
import RuFlag from "../../../public/icons/rus.svg";
import Button from "../common/Button";

type HeaderProps = {
  setOpen: (open: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({setOpen}) => {
  const [activeId, setActiveId] = useState("");
  const t = useTranslations("header");

  useIntersectionObserver(setActiveId);

  const servicesSorted = services
    .filter((_, index) => index !== 1)
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <header className={`${css.header} fadeToBottom`}>
      <div className="container">
        <div className=" flex items-center justify-between">
          <a href="/">
            <Image className="w-24" src={Logo} alt="" />
          </a>
          <button onClick={() => setOpen(true)} className={css.menuBtn}>
            <svg
              className={css.menuBtnIcon}
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </button>
          <nav className={`flex items-center gap-8 ${css.nav}`}>
            <a
              className={`${css.link} ${
                activeId === "directs" ? css.active : ""
              }`}
              onClick={() => scrollToElement("directs")}
            >
              {t("link1")}
            </a>
            <a
              className={`${css.link} ${activeId === "team" ? css.active : ""}`}
              onClick={() => scrollToElement("team")}
            >
              {t("link2")}
            </a>
            <button
              className={`${css.link} ${
                activeId === "services" ? css.active : ""
              } ${css.services}`}
              type="button"
            >
              {t("link3")}
              <Image src={ArrowDown} alt="" />
              <ul className={css.dropdown}>
                <p className={css.dropdownTitle}>Services</p>
                {servicesSorted.map((item) => (
                  <li key={item.id} className={css.dropdownItem}>
                    <a
                      onClick={() => scrollToElement(item.id)}
                      className={css.dropdownLink}
                    >
                      <div className={css.dropdownIcon}>
                        <Image
                          width={20}
                          height={20}
                          src={item.icon}
                          alt={item.title}
                        />
                      </div>
                      <span className={css.dropdownItemTitle}>
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </button>
            <a
              className={`${css.link} ${
                activeId === "tools" ? css.active : ""
              }`}
              onClick={() => scrollToElement("tools")}
            >
              {t("link4")}
            </a>
            <a
              className={`${css.link} ${
                activeId === "clients" ? css.active : ""
              }`}
              onClick={() => scrollToElement("clients")}
            >
              {t("link5")}
            </a>
            <button
              className={`${css.link} ${
                activeId === "portfolio" ? css.active : ""
              } ${css.portfolio}`}
            >
              {t("link6")}
              <Image src={ArrowDown} alt="" />
              <ul className={css.dropdownPortfolio}>
                <p className={css.dropdownTitle}>Portfolio</p>

                {projects.map((item) => (
                  <li key={item.id} className={css.dropdownItem}>
                    <a
                      onClick={() => scrollToElement(item.name)}
                      className={css.dropdownLink}
                    >
                      <div
                        className={css.dropdownIcon}
                        style={{background: item.bgColor, color: item.color}}
                      >
                        {item.name.slice(0, 1)}
                      </div>
                      <span className={css.dropdownItemTitle}>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </button>
            <button
              onClick={() => scrollToElement("contact")}
              className={`${css.link} ${css.lang}`}
            >
              {t("link7")}
              <Image src={ArrowDown} alt="" />
              <ul className={css.dropdownLang}>
                <li>
                  <a className={css.langItem} href="/ru">
                    <Image src={RuFlag} alt="Russian" className={css.flag} />
                    <span className={css.langText}>Рус</span>
                  </a>
                </li>
                <li>
                  <a className={css.langItem} href="/en">
                    <Image
                      src={EngFlag}
                      alt="United kingdom"
                      className={css.flag}
                    />
                    <span className={css.langText}>Eng</span>
                  </a>
                </li>
              </ul>
            </button>
            <Button onClick={() => scrollToElement("contact")}>
              {t("contact")}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
