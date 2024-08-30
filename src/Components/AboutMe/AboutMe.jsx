import './AboutMe.css'
import myimage from '../../assets/me.png'
const AboutMe = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src='' alt=''/>
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img src={myimage} alt=''/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>student of University of Information Technology</p>
                    <p>Road to become an Business Analyst, Consultant and CEO of my own start-up.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Web Developer</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Sport</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Music instrument</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Singing</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>5+</h1>
                <p>Experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>5+</h1>
                <p>Experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>5+</h1>
                <p>Experience</p>
            </div>
            <hr/>
        </div>
    </div>
  )
}

export default AboutMe