import css from "./style.module.css";

import {projects} from "@/utils/projectsData";
import {scrollToElement} from "@/utils/scrollToElement";
import Image from "next/image";
import Logo from "../../../public/icons/logo.svg";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <Image className="mx-auto block" width={106} src={Logo} alt="" />
        <nav className={css.navigation}>
          <div className={css.navItem}>
            <h3 className="text-lg font-bold mb-4">About us</h3>
            <a
              className={css.navItemLink}
              onClick={() => scrollToElement("directs")}
            >
              Direction
            </a>
            <a
              className={css.navItemLink}
              onClick={() => scrollToElement("team")}
            >
              Command
            </a>
            <a
              className={css.navItemLink}
              onClick={() => scrollToElement("tools")}
            >
              Tools
            </a>
            <a
              className={css.navItemLink}
              onClick={() => scrollToElement("clients")}
            >
              Clients
            </a>
          </div>
          <div className={css.navItem}>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <a
              className={css.navItemLink}
              onClick={() => scrollToElement("mobile")}
            >
              Development of mobile applications
            </a>
            <a
              className={css.navItemLink}
              onClick={() => scrollToElement("erp")}
            >
              Development and implementation ERP systems
            </a>
            <a
              className={css.navItemLink}
              onClick={() => scrollToElement("design")}
            >
              User interface, User experience design
            </a>
            <a
              className={css.navItemLink}
              onClick={() => scrollToElement("consulting")}
            >
              IT consulting
            </a>
            <a
              className={css.navItemLink}
              onClick={() => scrollToElement("optimization")}
            >
              Optimization IT consulting infrastructure
            </a>
          </div>
          <div className={css.navItem}>
            <h3 className="text-lg font-bold mb-4">Portfolio</h3>
            {projects.map((item) => (
              <a
                key={item.id}
                className={css.navItemLink}
                onClick={() => scrollToElement(item.name)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        <div className={css.copyright}>
          <p>© 2024 Udevs. All rights reserved</p>
          <div className={css.socials}>
            <a href="/" className={css.socialLink}>
              <svg
                className={css.socialIcon}
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </a>
            <a href="/" className={css.socialLink}>
              <svg
                className={css.socialIcon}
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
              </svg>
            </a>
            <a href="/" className={css.socialLink}>
              <svg
                className={css.socialIcon}
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
