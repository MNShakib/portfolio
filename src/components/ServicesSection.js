import React from "react";
import "./ServiceSec.css";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        {/* <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={money} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards> */}
        <section className="mh-skills" id="mh-skills">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="mh-skills-inner">
                  <div className="mh-professional-skill">
                    <h3>Technical Skills</h3>
                    <div className="each-skills">
                      <div className="candidatos">
                        <div className="pracial">
                          <div className="info">
                            <div className="nome">HTML</div>
                            <div className="percentage-num">90%</div>
                          </div>
                          <div className="progress-bar">
                            <div
                              className="percentagem"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="candidatos">
                        <div className="pracial">
                          <div className="info">
                            <div className="nome">CSS</div>
                            <div className="percentage-num">90%</div>
                          </div>
                          <div className="progress-bar">
                            <div
                              className="percentagem"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="candidatos">
                        <div className="pracial">
                          <div className="info">
                            <div className="nome">JavaScript</div>
                            <div className="percentage-num">86%</div>
                          </div>
                          <div className="progress-bar">
                            <div
                              className="percentagem"
                              style={{ width: "86%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="candidatos">
                        <div className="pracial">
                          <div className="info">
                            <div className="nome">React.js</div>
                            <div className="percentage-num">80%</div>
                          </div>
                          <div className="progress-bar">
                            <div
                              className="percentagem"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="candidatos">
                        <div className="pracial">
                          <div className="info">
                            <div className="nome">Node.js</div>
                            <div className="percentage-num">65%</div>
                          </div>
                          <div className="progress-bar">
                            <div
                              className="percentagem"
                              style={{ width: "65%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="candidatos">
                        <div className="pracial">
                          <div className="info">
                            <div className="nome">MongoDB</div>
                            <div className="percentage-num">70%</div>
                          </div>
                          <div className="progress-bar">
                            <div
                              className="percentagem"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="mh-professional-skills">
                  <h3>Professional Skills</h3>
                  <ul className="mh-professional-progress">
                    <li>
                      <div
                        className="mh-progress mh-progress-circle"
                        data-progress="95"
                      ></div>
                      <div className="pr-skill-name">Communication</div>
                    </li>
                    <li>
                      <div
                        className="mh-progress mh-progress-circle"
                        data-progress="90"
                      ></div>
                      <div className="pr-skill-name">Team Work</div>
                    </li>
                    <li>
                      <div
                        className="mh-progress mh-progress-circle"
                        data-progress="80"
                      ></div>
                      <div className="pr-skill-name">Perseverance</div>
                    </li>
                    <li>
                      <div
                        className="mh-progress mh-progress-circle"
                        data-progress="70"
                      ></div>
                      <div className="pr-skill-name">Creativity</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Description>
      <Image>
        <img alt="camera" src={home2} />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  overflow-y: hidden !important;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
// const Cards = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   @media (max-width: 1200px) {
//     justify-content: center;
//   }
// `;
// const Card = styled.div`
//   flex-basis: 20rem;
//   .icon {
//     display: flex;
//     align-items: center;
//     h3 {
//       margin-left: 1rem;
//       background: white;
//       color: black;
//       padding: 1rem;
//     }
//   }
// `;

export default ServicesSection;
