import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className="contact" id="Contact">
            <div className="contact-heading">
                <h2>GET IN TOUCH</h2>
                </div>
                <div className="project-rectangle">
            </div>
            <div className="contact-content">
                <ul className="left-contact">
                    <li className="left-contact-li">First Name</li>
                    <li className="left-contact-li">Last Name</li>
                    <li className="left-contact-li">Email</li>
                    <li className="contact-send-btn">Send</li>
                </ul>
                
                <ul className="right-contact">
                    <li className="right-contact-li">Message</li>
                </ul>
            </div>
            <div className="footer">
            <div className="footer-item header-linkedin">
                <a href="https://www.linkedin.com/in/svyatoslav-lykhosherstov/">
                    <FontAwesomeIcon icon={ faLinkedinIn }></FontAwesomeIcon>
                </a>
            </div>
            <div className="footer-item header-github">
                <a href="https://github.com/SlavLyk?tab=repositories">
                <FontAwesomeIcon icon={ faGithub }></FontAwesomeIcon>
                </a>
            </div>
            <div className="footer-item header-youtube">
                <a href="https://www.youtube.com/">
                <FontAwesomeIcon icon={ faYoutube }></FontAwesomeIcon>
                </a>
            </div>
            <div className="footer-item header-resume">
                <a href="https://www.linkedin.com/in/svyatoslav-lykhosherstov/">
                <FontAwesomeIcon icon={ faFile }></FontAwesomeIcon>
                </a>
            </div>
    </div>
    )
        </div>
    )
}

export default Contact
