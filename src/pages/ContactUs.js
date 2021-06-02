import React, { useState } from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";
import "./contact.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    window.open(
      `mailto:test.mailer.0080@gmail?subject=${subject}&body=${name}: ${message}`
    );
  };
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      {/* <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send an email.</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div> */}
      <section id="contact">
        <div className="row">
          <div className="eight columns">
            <form id="contactForm" name="contactForm" onSubmit={handleClick}>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    value={name}
                    type="text"
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* <div>
                <label htmlFor='contactEmail'>
                  Email <span className='required'>*</span>
                </label>
                <input
                  value={email}
                  type='text'
                  defaultValue=''
                  size='35'
                  id='contactEmail'
                  name='contactEmail'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div> */}

                <div>
                  <label htmlFor="contactSubject">
                    Subject <span className="required">*</span>
                  </label>
                  <input
                    value={subject}
                    type="text"
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    required
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="submit">
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
            {/* <>
            <div id='message-warning'> Something went wrong!</div>
            <div id='message-success'>
              <i className='fa fa-check'></i>Your message was sent, thank you!
              <br />
            </div>
          </> */}
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h3>Address and Phone</h3>
              <h4 className="address">
                Mohd Najmush Shakib
                <br />
                Ghantaghar <br />
                Gorakhpur, Uttar Pradesh, 273001, INDIA
                <br />
                <span>7905552898</span>
              </h4>
            </div>

            <div className="widget widget_tweets"></div>
          </aside>
        </div>
      </section>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  color: #353535;
  min-height: 90vh;
  .address {
    color: #636363 !important;
  }
  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`;
// const Title = styled.div`
//   margin-bottom: 4rem;
//   color: black;
//   @media (max-width: 1200px) {
//     margin-top: 5rem;
//   }
// `;
// const Hide = styled.div`
//   overflow: hidden;
// `;
// const Circle = styled.div`
//   border-radius: 50%;
//   width: 3rem;
//   height: 3rem;
//   background: #353535;
// `;
// const Social = styled(motion.div)`
//   display: flex;
//   align-items: center;
//   h2 {
//     margin: 2rem;
//   }
// `;

export default ContactUs;
