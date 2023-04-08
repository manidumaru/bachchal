import React from "react";
import "./about.css";
import developers from "../../assets/developers.png";

function About() {
  return (
    <div className="about_us">
      <div className="about_us_upper">
        <div className="about_us_title">
          <h1>What is Bagchal.ai?</h1>
        </div>
        <div className="about_us_text">
          <h2>
            Bagchal.ai is a semester project developed with the aim of
            completing the semester project and promote Nepal’s one and only
            traditional game which is in verge of disapperaing.
          </h2>
        </div>
      </div>
      <div className="about_us_middle">
        <h1>Meet our Developers</h1>
      </div>
      <div className="about_us_lower">
        <div className="about_us_info">
          <div className="about_us_info_image">
            <img
              src={developers}
              alt="Developer"
              height="100%"
              width="100%"
            ></img>
          </div>
          <div className="about_us_info_line"></div>
          <div className="about_us_info_saying">
            <div className="about_us_info_saying_upper">
              <h3>
                “We cannot solve problems with the kind of thinking we employed
                when we came up with them.”
              </h3>
            </div>
            <div className="about_us_info_saying_lower">
              <p>
                <i> - Engineer</i>
              </p>
            </div>
          </div>
        </div>
        <div className="about_us_info">
          <div className="about_us_info_saying">
            <div className="about_us_info_saying_upper">
              <h3>
                “We cannot solve problems with the kind of thinking we employed
                when we came up with them.”
              </h3>
            </div>
            <div className="about_us_info_saying_lower_alternative">
              <p>
                <i> - Engineer</i>
              </p>
            </div>
          </div>
          <div className="about_us_info_line"></div>

          <div className="about_us_info_image_alternative">
            <img
              src={developers}
              alt="Developer"
              height="100%"
              width="100%"
            ></img>
          </div>
        </div>
        <div className="about_us_info">
          <div className="about_us_info_image">
            <img
              src={developers}
              alt="Developer"
              height="100%"
              width="100%"
            ></img>
          </div>
          <div className="about_us_info_line"></div>
          <div className="about_us_info_saying">
            <div className="about_us_info_saying_upper">
              <h3>
                “We cannot solve problems with the kind of thinking we employed
                when we came up with them.”
              </h3>
            </div>
            <div className="about_us_info_saying_lower">
              <p>
                <i> - Engineer</i>
              </p>
            </div>
          </div>
        </div>
        <div className="about_us_info">
          <div className="about_us_info_saying">
            <div className="about_us_info_saying_upper">
              <h3>
                “We cannot solve problems with the kind of thinking we employed
                when we came up with them.”
              </h3>
            </div>
            <div className="about_us_info_saying_lower_alternative">
              <p>
                <i> - Engineer</i>
              </p>
            </div>
          </div>
          <div className="about_us_info_line"></div>

          <div className="about_us_info_image_alternative">
            <img
              src={developers}
              alt="Developer"
              height="100%"
              width="100%"
            ></img>
          </div>
        </div>
        <div className="about_us_info">
          <div className="about_us_info_image">
            <img
              src={developers}
              alt="Developer"
              height="100%"
              width="100%"
            ></img>
          </div>
          <div className="about_us_info_line"></div>
          <div className="about_us_info_saying">
            <div className="about_us_info_saying_upper">
              <h3>
                “We cannot solve problems with the kind of thinking we employed
                when we came up with them.”
              </h3>
            </div>
            <div className="about_us_info_saying_lower">
              <p>
                <i> - Engineer</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
