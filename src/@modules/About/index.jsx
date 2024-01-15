import React from "react"
import styles from "./About.module.css"
import Container from "../../shared/Container"

const About = () => {
  return (
    <div id="about">
      <div className={styles.about}>
        <Container>
          <div className={styles.aboutContainer}>
            <div>
              <img src="/assets/chubi.png" alt="a"/>
            </div>
            <div className={styles.aboutContainerTextsection}>
              <h1>About Me</h1>
              <p>
                While I have spent several years as a network engineer with a
                solid technical background and a proven record In building and
                troubleshooting computer systems and networks, I am looking to
                transition into a Frontend Development role. I offer a set of
                skills that would benefit any company. With extensive knowledge
                and strong analytical skills complemented by excellent
                interpersonal skills and a commitment to customer satisfaction,
                I would like to explore the possibility of putting my talents to
                work for you. An eager learner, I pride myself on my ability to
                successfully take on new challenges and develop ever-expanding
                areas of expertise. I am currently building and developing my
                skills in HTML, CSS, JS and REACT and looking forward to putting
                these skills to good use. .
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
