import SectionHeading from "@/components/common/SectionHeading";
import { projects } from "@/utils/projectsData";
import Image from "next/image";
import css from "./style.module.css";

const Projects = () => {
  return (
    <section className={css.section} id="portfolio">
      {projects.map((project, index) => (
        <div className={css.project} key={project.id} id={project.name}>
          <div className="container">
            <div
              className={`${css.projectWrapper} ${
                index % 2 === 1 ? css.reverse : ""
              }`}
            >
              <Image
                data-aos="zoom-in"
                className={css.projectImage}
                src={project.image}
                alt=""
              />
              <div className={css.projectContent}>
                <Image
                  data-aos="fade-up"
                  className={css.nameImage}
                  src={project.nameImage}
                  alt=" "
                />
                <span
                  data-aos="fade-up"
                  className={css.badge}
                  style={{background: project.bgColor, color: project.color}}
                >
                  <Image src={project.icon} alt="" />
                  {project.type}
                </span>
                <SectionHeading type="description">
                  {project.description}
                </SectionHeading>
                <h3 data-aos="fade-up" className={css.subTitle}>
                  What we did?
                </h3>
                <div className={css.services}>
                  {project.technologies.map((tech) => (
                    <div key={tech.id} className={css.card}>
                      <Image className={css.cardImage} src={tech.icon} alt="" />
                      <span className={css.cardTitle}>{tech.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
