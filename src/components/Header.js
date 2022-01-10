import linkedin from '../imgs/linkedin.svg'
import github from '../imgs/github.svg'
import youtube from '../imgs/youtube.svg'
import resume from '../imgs/resume.svg'

const Header = () => {
    return (
    <div className="header">
            <div className="header-item header-linkedin">
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
}

Header.defaultProps = {
    title: 'Slav Tracker'
}

export default Header
