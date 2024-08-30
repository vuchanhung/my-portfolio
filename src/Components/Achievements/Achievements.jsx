import './Achievements.css'
import achieve_data from "../../assets/news_data"

const Achievements = () => {
  return (
    <div className='achieve'>
        <div className='achieve-title'>
            <h1>Achievements</h1>
        </div>
        <div className="achieve-container">
        {achieve_data.map((achieve, index) => {
          return (
            <div key={index} className="achieve-format">
            <h3>{achieve.s_no}</h3>
            <h2>{achieve.s_name}</h2>
            <p>{achieve.s_desc}</p>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Achievements