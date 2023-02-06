import React from "react";
// reactstrap components
import "./homepage.css";
import Img from "../../shared/img/img.png";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <>
      <section className="SectionHome">
        <div className="containerHome">
          <div className="leftHome">
            <span className="dotHome"></span>
            <span style={{ fontSize: "30px", fontWeight: "bold" }}>
              Logo Here
            </span>
            <div style={{ marginLeft: "50px" }} className="textTophome">
              <Link
                to="/log_in"
                style={{ fontSize: "30px", marginTop: "-40px" }}
              >
                {/* <span> <i className="ni ni-circle-08" style={{fontSize: "30px",marginLeft: "-50px"}}></i></span>  */}
                Login
              </Link>
            </div>
          </div>
          <div className="rightHome" style={{ marginTop: "250px" }}>
            <div className="contentHome">
              <h1 style={{ fontWeight: "bold" }}>GSMT</h1>
              <p>GLOBAL SOFTWARE MONITORING TOOL</p>
            </div>
          </div>
        </div>
        <div className="rightImg" style={{ marginLeft: "400px" }}>
          <img
            src={Img}
            width="1700px"
            height="1000px"
            style={{ borderRadius: "13px" }}
          />
          <div className="textBlockHome">
            <h1 style={{ fontSize: "50px" }}>
              CONNECT GLOBALLY AND WORK TOGETHER AS A TEAM
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
