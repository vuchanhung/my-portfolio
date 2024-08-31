import './Punchlines.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Punchlines = () => {
  return (
    <div id='home' className='punchlines'>
      {/* <img src='' alt=''/> */}
      <h1><span>I'm Vu Chan Hung,</span> student of University of Information Technology</h1>
      <p>Road to become an Business Analyst, Consultant and CEO of my own start-up. </p>
      <div className='punchline-action'>
        <div className='punchline-connect'><AnchorLink className='anchor-link' offset={50} href='#footer_page'>Connect with me</AnchorLink></div>
        <div className='punchline-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Punchlines
