import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="about-card">
        <div className="about-heading">
          <h2 className="about-heading-h2">ABOUT ME</h2>
          <div className="wave-icon">
            <FontAwesomeIcon icon={faHandSparkles}></FontAwesomeIcon>
          </div>
        </div>
        <div className="about-rectangle"></div>
        <p>
          Hello! My name is Svyatoslav Lykhosherstov ( I go by “Slav” ) and I
          enjoy creating stunning websites. <br></br>
          <br></br> I’m a Front End Web Developer seeking to utilize my
          knowledge of React, Javascript, Node, UI and UX skills to build
          beautiful user experiences and applications. Quick learner who’s able
          to function independently and in a team setting.
        </p>
      </div>
    </div>
  );
};

export default About;
