import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

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
              <div className="tech-items">React</div>
              <div className="tech-items">Node</div>
              <div className="tech-items">Express</div>
              <div className="tech-items">Three.js</div>
            </div>
          </div>
          <p className="project-text">
            Redesigned an outdated WordPress website into a React application
            with a Back End server.{" "}
          </p>
          <p className="project-text">
            Leading to a better representation of company's brand image and
            values as well as intuitive user experience.
          </p>

          <div className="project-links">
            {/* MUI BUTTON */}
            <ButtonGroup>
              <Button
                sx={{ fontSize: "16px" }}
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab("https://floating-axe-website.herokuapp.com/");
                }}
                startIcon={<OpenInNewRoundedIcon />}
                variant="contained"
              >
                Live Demo
              </Button>
              <Button
                sx={{ fontSize: "16px" }}
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab("https://github.com/SlavLyk/Fas_Website");
                }}
                variant="outlined"
                color="secondary"
              >
                Source Code
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="project-right">
          <div className="video-1">
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/jfKfPfyJRdk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <div className="play-btn1">
              <div className="play-btn2"></div>
            </div> */}
            <div className="line"></div>
          </div>
        </div>
      </div>

      <div className="project-content-v2">
        <div className="project-right-v2">
          <div className="video-2">
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/jfKfPfyJRdk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="line"></div>
          </div>
        </div>
        <div className="project-left-v2">
          <div className="project-title">
            <h3>Portfolio Website</h3>
            <div className="technologies">
              <div className="tech-items">Node</div>
              <div className="tech-items">Three.js</div>
              <div className="tech-items">Express</div>
              <div className="tech-items">React</div>
            </div>
          </div>
          <p className="project-text">
            Redesigned an outdated WordPress website into a React application
            with a Back End server.{" "}
          </p>
          <p className="project-text">
            Leading to a better representation of company's brand image and
            values as well as intuitive user experience.
          </p>

          <div className="project-links">
            <ButtonGroup>
              <Button
                sx={{ fontSize: "16px" }}
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab("https://floating-axe-website.herokuapp.com/");
                }}
                startIcon={<OpenInNewRoundedIcon />}
                variant="contained"
              >
                Live Demo
              </Button>
              <Button
                // sx={{ fontSize: { xl: "16px", lg: "16px" } }}
                sx={{ fontSize: "16px" }}
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab("https://github.com/SlavLyk/Fas_Website");
                }}
                variant="outlined"
                color="secondary"
              >
                Source Code
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
