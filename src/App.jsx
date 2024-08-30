import AboutMe from './Components/AboutMe/AboutMe'
import NavBar from './Components/NavBar/NavBar'
import Punchlines from './Components/Punchlines/Punchlines'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Punchlines></Punchlines>
      <AboutMe/>
    </div>
  )
}

export default App
