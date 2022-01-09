import slav_head from '../imgs/slav_head.png'

const Home = () => {
    return (
        <div className="home">
            <div className="left">
                <div className="left-wrapper">
                    <h1>
                        Hi, I'm <Svyatoslav /><br></br>I'm a full stack developer.
                    </h1>
                </div>
                <div className="navigation">
                    <ul>
                        <li>Skills</li>
                        <li>Skills</li>
                        <li>Skills</li>
                        <li>Skills</li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <div className="right-wrapper">
                    <div className="circleContainer">
                        <img src={slav_head} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Svyatoslav = () => <span className='name'>Svyatoslav.</span>

export default Home
