import linkedin from '../imgs/linkedin.svg'
import github from '../imgs/github.svg'
import youtube from '../imgs/youtube.svg'
import resume from '../imgs/resume.svg'


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
                    <img src={ linkedin } className='linkedin' alt=""/>
                </a>
            </div>
            <div className="header-item header-github">
                <a href="https://github.com/SlavLyk?tab=repositories">
                    <img src={ github } className='github' alt=""/>
                </a>
            </div>
            <div className="header-item header-youtube">
                <a href="https://www.youtube.com/">
                    <img src={ youtube } className='youtube' alt=""/>
                </a>
            </div>
            <div className="header-item header-resume">
                <a href="https://www.linkedin.com/in/svyatoslav-lykhosherstov/">
                    <img src={ resume } className='resume' alt=""/>
                </a>
            </div>
    </div>
    )
        </div>
    )
}

export default Contact
