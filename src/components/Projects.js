const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Projects = () => {
  return (
    <div className="projects" id="Projects">
      <div className="projects-heading">
        <h2>PROJECTS</h2>
      </div>
      <div className="rectangle"></div>
      <div className="project-content-v1">
        <div className="project-left">
          <div className="project-title">
            <h3>Video Game Website</h3>
            <div className="technologies">
              <div className="tech-items">Node</div>
              <div className="tech-items">Express</div>
              <div className="tech-items">MongoDB</div>
              <div className="tech-items">React</div>
            </div>
          </div>
          <p className="project-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <div className="project-links">
            <button
              className="live-demo-btn"
              onClick={(e) => {
                e.preventDefault();
                openInNewTab("https://floating-axe-website.herokuapp.com/");
              }}
            >
              Live Demo
            </button>
            <a href="#" className="source-demo-btn">
              Source Code
            </a>
          </div>
        </div>
        <div className="project-right">
          <div className="video">
            <div className="play-btn1">
              <div className="play-btn2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-content-v2">
        <div className="project-right-v2">
          <div className="video">
            <div className="play-btn1">
              <div className="play-btn2"></div>
            </div>
          </div>
        </div>
        <div className="project-left-v2">
          <div className="project-title">
            <h3>Crypto Api</h3>
            <div className="technologies">
              <div className="tech-items">Node</div>
              <div className="tech-items">Express</div>
              <div className="tech-items">MongoDB</div>
              <div className="tech-items">React</div>
            </div>
          </div>
          <p className="project-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <div className="project-links">
            <a href="#" className="live-demo-btn">
              Live Demo
            </a>
            <a href="#" className="source-demo-btn">
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
