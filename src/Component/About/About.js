import desk from "../../Assets/Images/high-angle-desk-arrangement-with-laptop_23-2149013923.png";
import VietNam from "../../Assets/Images/vietnam.png";
import "./About.scss";
function About() {
  return (
    <div className="about-container" id="about">
      <div className="grid wide" data-aos="fade-left" data-aos-duration="3000">
        <div className="about-content row">
          <div className="about-content-left col l-5 l-o-1 m-10 m-o-1 c-12">
            <img src={desk} className="desk-image" alt="imageDesk" />
          </div>
          <div className="about-content-right col l-5 m-10 m-o-1 c-12">
            <div className="title">About Me</div>
            <div className="desc">
              <div className="desc-title">
                FullStack Developer from Hồ Chí Minh, Việt Nam &nbsp;
                <img className="viet-nam-logo" src={VietNam} alt="VietNam" />
              </div>
              <div className="desc-detail">
                Hello, I'm Đồng Hữu Trọng (Satomi Jin) a Fullstack developer specializing in Frontend with ReactJS and
                Backend with Node.js.
                <br />
                <br />
                For database management, I'm experienced with SQL using either PostgreSQL or Microsoft SQL.
                <br />
                <br />
                Currently, I primarily utilize ReactJS alongside Bootstrap/antd CSS to develop applications.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
