import React from "react";
import styled from "styled-components";
import { About } from "../styles";
// import Toggle from "./Toggle";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { useLocation } from "react-router-dom";
import { scrollReveal } from "../animation";
import { Link } from "react-router-dom";

const FaqSection = () => {
  const [element, controls] = useScroll();
  const { pathname } = useLocation();

  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <div className="social">
        <div className="touch">
          <h2>
            Love to <span>Work</span>
          </h2>
          <Link to="/contact">
            <button>Get In Touch</button>
          </Link>
        </div>
        <ul>
          <li>
            <a href="mailto:mnshakib79@gmail.com">
              <i class="far fa-envelope"></i>MNSHAKIB79@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mohd-najmush-shakib-077839190">
              <i class="fab fa-linkedin-in"></i>Linkedin
            </a>
          </li>
          <li>
            <i class="fab fa-github" size="3"></i>
            <a href="https://github.com/MNShakib">Github</a>
          </li>
        </ul>
      </div>
      <div className="signature">
        <Line
          transition={{ duration: 0.75 }}
          initial={{ width: "0%" }}
          animate={{ width: pathname === "/" ? "100%" : "0%" }}
        />
        <div class="social">
          <h5>
            <i class="far fa-copyright"></i>2021 All Rights Reserved
          </h5>
          <a href="https://www.fontspace.com/category/cursive">
            <img
              src="https://see.fontimg.com/api/renderfont4/PK12m/eyJyIjoiZnMiLCJoIjo0MiwidyI6MTUwMCwiZnMiOjI4LCJmZ2MiOiIjRjVGMkYyIiwiYmdjIjoiI0ZGRjVGNSIsInQiOjF9/TW9oZCBOYWptdXNoIFNoYWtpYg/geraldine-personal-use-italic.png"
              alt="Cursive fonts"
            />
          </a>
        </div>
      </div>
      {/* <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              autem accusamus ex laboriosam porro, adipisci quam voluptatum
              magnam placeat corporis.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
              totam.
            </p>
          </div>
        </Toggle>
        <Toggle title="Diferrent Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, neque.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer.">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, neque.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout> */}
    </Faq>
  );
};

const Faq = styled(About)`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  padding-bottom: 1rem;
  background-color: #111010;
  overflow-y: hidden !important;
  min-height: 70vh;
  clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 100%);
  .social {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    i {
      color: white;
      font-size: 12px;
    }
  }
  span {
    display: inline;
  }
  h2 {
    display: inline;
    padding-top: 5rem;
    padding-bottom: 2rem;
    font-weight: lighter;
    line-height: 150%;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  .touch {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  button {
    border-radius: 1000px;
  }
  ul {
    padding-top: 5rem;
  }
  li {
    list-style: none;
    padding: 10px 0;
  }
  i {
    color: #23d997;
    font-size: 25px;
    margin-right: 10px;
  }
  a {
    text-decoration: none;
    color: white;
    color: rgba(255, 255, 255, 0.5);
    font-size: 15px;
  }
  .signature {
    display: block;
    padding-top: 5rem;
    width: 100%;
  }
  @media (max-width: 1200px) {
    padding-top: 6rem;
    .social {
      flex-direction: column;
      h5 {
        margin: 1rem 0 1rem 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  margin: 2rem 0 1rem 0;
  height: 0.1rem;
  background: #23d997;
  width: 0%;
  /* position: absolute; */
  /* bottom: -80%; */
  left: 60%;
  @media (max-width: 1200px) {
    left: 0%;
  }
`;

export default FaqSection;
