import "./News.css";
import news_data from "../../assets/news_data"
import arrow_icon from "../../assets/arrow_icon.svg"
const News = () => {
  return (
    <div id="news_page" className="news">
      <div className="news-title">
        <h1>My News</h1>
        {/* <img src={theme_pattern} alt=''/> */}
      </div>
      <div className="news-container">
        {news_data.map((data_news, index) => {
          return (
            <div key={index} className="news-format">
            <h3>{data_news.s_no}</h3>
            <h2>{data_news.s_name}</h2>
            <p>{data_news.s_desc}</p>
            <div className="news-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default News;
