import "./about.css";
import CV from "../../Ayoub_El_Habchi_CV_French.pdf";

import Heading from "../../components/headingText/heading";
import Card from "../../UI/card";
import Tools from "../../components/tools/tools";
import Services from "../../components/specialization/service";
// data
import { experience } from "../../data/Data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  
  return (
    <>
      <section className="About">
        <Heading title={"About"} titlePrimary={"me"}></Heading>

        <div className="container about-container">
          <div className="about-left">
            <h3>{`I'm Ayoub Elhabchi`}</h3>
            <p>
            As a junior Full-Stack MERN developer, I have a diverse skill set that allows me to handle both the <strong>Front-end and Back-end</strong> development of web applications. I am proficient in various programming languages, databases, and frameworks, which equips me to build web applications that are not only efficient but also scalable and resilient.
            </p>
            
            <a href={CV} download className="btn-nav">
              Download CV
              <span>
                <FontAwesomeIcon icon={faDownload} />
              </span>
            </a>
          </div>

          <div className="about-right">
            {experience.map(({ id, no, title }) => {
              return (
                <Card key={id} className={"expernce-card"}>
                  <h1>
                    <span>{no}</span>
                  </h1>
                  <p>{title}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Tools />
      <Services />
    </>
  );
};

export default About;
