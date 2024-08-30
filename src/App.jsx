import AboutMe from './Components/AboutMe/AboutMe'
import Achievements from './Components/Achievements/Achievements'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import News from './Components/News/News'
import Punchlines from './Components/Punchlines/Punchlines'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Punchlines/>
      <AboutMe/>
      <News/>
      <Achievements/>
      <Footer/>
    </div>
  )
}

export default App
