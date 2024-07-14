import SectionHeading from "@/components/common/SectionHeading";
import {projects} from "@/utils/projectsData";
import Image from "next/image";
import css from "./style.module.css";

const Projects = () => {
  return (
    <section className={css.section}>
      {projects.map((project, index) => (
        <div className={css.project} key={project.id}>
          <div className="container">
            <div
              className={`${css.projectWrapper} ${
                index % 2 === 1 ? css.reverse : ""
              }`}
            >
              <Image style={{width: "48%"}} src={project.image} alt="" />
              <div style={{width: "48%"}}>
                <Image
                  className={css.nameImage}
                  src={project.nameImage}
                  alt=" "
                />
                <span
                  className={css.badge}
                  style={{background: project.bgColor, color: project.color}}
                >
                  <Image src={project.icon} alt="" />
                  {project.type}
                </span>
                <SectionHeading type="description">
                  {project.description}
                </SectionHeading>
                <h3 className={css.subTitle}>What we did?</h3>
                <div className={css.services}>
                  {project.technologies.map((tech) => (
                    <div key={tech.id} className={css.card}>
                      <Image src={tech.icon} alt="" />
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
