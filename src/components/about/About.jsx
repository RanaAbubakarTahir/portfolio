import "./about.css";
import cer from "../../img/cer.jpg";
import me from "../../img/me1.jpg"
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
           src={me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        
        </p>
        <p className="a-desc">
        Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux Design, delivering quality work.
        </p>
        <div className="a-award">
          <img src={cer} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Certified Developer</h4>
            <p className="a-award-desc">
             I have done a course of webdevelopment from PnyTrainings,Lahore<br/>
             and Curently i am doing a Bachelor in ComputerScience From UOE,Lahore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;