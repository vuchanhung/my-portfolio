import "./Footer.css";
import logo_icon from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div id='footer_page' className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img className='logo-size' src={logo_icon} />
          <p>
            Road to become an Business Analyst, Consultant and CEO of my own
            start-up.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon}/>
            <input type="email" placeholder="Enter your E-mail" />
          </div>
          <div className="footer-subcribe">Subcribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          2024 Vu Chan Hung. All right reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of service</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
