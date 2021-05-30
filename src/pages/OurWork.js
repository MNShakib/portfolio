import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
//css
import "./about.css";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  // fade,
  // photoAnim,
  // lineAnim,
} from "../animation";
// import { useScroll } from "../components/useScroll";
// import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  // const [element, controls] = useScroll();
  // const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      {/* <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>

      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
      <ScrollTop /> */}
      {/* <div className="body"> */}
      <section>
        <div className="card">
          <div className="box">
            <div className="imgBx">
              <img src={goodtimes} alt="goodtimes" />
            </div>
            <div className="contentBx">
              <div>
                <h2>Description</h2>
                <p>
                  Lorem ipsum dolor sit amet.lorem Ipsum lorem ipsum dolor sit
                  amet, consectet
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBx">
              <img src={theracer} alt="goodtimes" />
            </div>
            <div className="contentBx">
              <div>
                <h2>Description</h2>
                <p>
                  Lorem ipsum dolor sit amet.lorem Ipsum lorem ipsum dolor sit
                  amet, consectet
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBx">
              <img src={athlete} alt="goodtimes" />
            </div>
            <div className="contentBx">
              <div>
                <h2>Description</h2>
                <p>
                  Lorem ipsum dolor sit amet.lorem Ipsum lorem ipsum dolor sit
                  amet, consectet
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBx">
              <img src={theracer} alt="goodtimes" />
            </div>
            <div className="contentBx">
              <div>
                <h2>Description</h2>
                <p>
                  Lorem ipsum dolor sit amet.lorem Ipsum lorem ipsum dolor sit
                  amet, consectet
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBx">
              <img src={athlete} alt="goodtimes" />
            </div>
            <div className="contentBx">
              <div>
                <h2>Description</h2>
                <p>
                  Lorem ipsum dolor sit amet.lorem Ipsum lorem ipsum dolor sit
                  amet, consectet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1200px) {
    padding: 0rem 0rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;
// const Movie = styled(motion.div)`
//   padding-bottom: 10rem;
//   .line {
//     height: 0.5rem;
//     background: #23d997;
//     margin-bottom: 3rem;
//   }
//   img {
//     width: 100%;
//     height: 70vh;
//     object-fit: cover;
//   }
// `;
// const Hide = styled.div`
//   overflow: hidden;
// `;

// const Body = styled(motion.div)`
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
// `;
// const Section = styled(motion.section)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   transform-style: preserve-3d;
//   width: 1100px;
// `;
// const Card = styled(motion.div)`
//   position: relative;
//   width: 320px;
//   height: 320px;
//   margin: 20px;
//   transform-style: preserve-3d;
//   perspective: 1000px;
// `;
// const Box = styled(motion.div)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   transform-style: preserve-3d;
//   transition: 1s ease;
// `;
// const ImgBox = styled(motion.div)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   transform-style: preserve-3d;
//   transition: 1s ease;
// `;
// const ContentBox = styled(motion.div)``;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
