import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header-item header-linkedin">
        <a
          href="https://www.linkedin.com/in/slav-lyk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
        </a>
      </div>
      <div className="header-item header-github">
        <a
          href="https://github.com/SlavLyk?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
      </div>
      <div className="header-item header-youtube">
        <a
          href="https://www.youtube.com/channel/UCCb5zddp6_qXL_oo34U6nWw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        </a>
      </div>
      <div className="header-item header-resume">
        <a
          href="https://drive.google.com/file/d/1v3uT3XabTEh-6z4adZlI6DfyFny0LhBK/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default Header;
