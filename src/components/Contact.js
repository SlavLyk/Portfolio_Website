import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { TextField, Grid } from "@mui/material";
import Button from "@mui/material/Button";

const style = {
  mb: 8,
  fontSize: "63px",
  input: {
    color: "white",
  },
  "&:hover fieldset": {
    borderWidth: 2,
  },
  "& .MuiInputLabel-root": {
    color: "blue",

    fontSize: 25,
  }, //styles the label
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      borderColor: "orange",
    },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: "orange",
    },
  },
  //   backgroundColor: { xs: "pink" },
};

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="contact-heading">
        <h2>GET IN TOUCH</h2>
      </div>
      <div className="project-rectangle"></div>
      <form
        action="https://formsubmit.co/7fbee76da30c6e46ec4431e0fc3d9d2d"
        method="POST"
      >
        <div className="contact-content">
          <ul className="left-contact">
            <Grid container spacing={1}>
              <Grid sm={12} item>
                <TextField
                  fullWidth
                  sx={{ ...style }}
                  label="First Name"
                  placeholder="Enter First Name"
                  variant="outlined"
                  inputProps={{
                    autoComplete: "none",
                  }}
                  name="name"
                  required
                ></TextField>
              </Grid>
              <Grid sm={12} item>
                <TextField
                  fullWidth
                  sx={{ ...style }}
                  label="Last Name"
                  placeholder="Enter Last Name"
                  variant="outlined"
                  inputProps={{
                    autoComplete: "none",
                  }}
                  name="last_name"
                  required
                ></TextField>
              </Grid>
              <Grid sm={12} item>
                <TextField
                  fullWidth
                  sx={{ ...style }}
                  label="Email"
                  placeholder="Enter Email"
                  variant="outlined"
                  inputProps={{
                    autoComplete: "none",
                  }}
                  name="email"
                  required
                ></TextField>
              </Grid>
              <Grid sm={12} item>
                <Button
                  type="submit"
                  sx={{ ...style, pr: 4, pl: 4, fontSize: "28px" }}
                  variant="contained"
                  color="primary"
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </ul>

          <ul className="right-contact">
            <Grid container spacing={1}>
              <Grid sm={22} item>
                <TextField
                  fullWidth
                  sx={{ ...style }}
                  label="Message"
                  multiline
                  rows={9.3}
                  inputProps={{ style: { color: "white" } }}
                  placeholder="Enter Message"
                  variant="outlined"
                  name="message"
                  required
                ></TextField>
              </Grid>
            </Grid>
          </ul>
        </div>
      </form>
      <div className="footer">
        <div className="footer-item header-linkedin">
          <a href="https://www.linkedin.com/in/svyatoslav-lykhosherstov/">
            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
          </a>
        </div>
        <div className="footer-item header-github">
          <a href="https://github.com/SlavLyk?tab=repositories">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </div>
        <div className="footer-item header-youtube">
          <a href="https://www.youtube.com/">
            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
          </a>
        </div>
        <div className="footer-item header-resume">
          <a href="https://www.linkedin.com/in/svyatoslav-lykhosherstov/">
            <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
