import React from "react";
import myImage from "../Images/myPic.jpg"
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div
        className="container text-black-600  mx-auto flex items-center justify-center flex-col"
        id="overview"
      >
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-2 object-cover object-center"
          alt="hero"
          src={myImage}
          style={{
            borderRadius: "50%",
            width: "12%",
            marginTop: "2vh",
            border: "1px solid greenyellow",
          }}
        />
        <div className="text-justify lg:w-2/3 w-full">
          <p className="text-center">
            नमस्ते, I'm Paritosh Joshi. I'm a student at <span></span>
            <a
              href="https://amrita.edu/"
              style={{ color: "rgb(32, 170, 66)" }}
              target="_blank"
            >
              Amrita Vishwa Vidyapeetham
            </a>
            , pursuing B.Tech Computer Science And Engineering 3rd Year. <br />I
            like gaming, coding, learning and memes :)
          </p>
        </div>
      </div>

      <section className="text-black-600 body-font">
        <h1
          style={{
            fontSize: "x-large",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "1em",
            marginBottom: "10px",
            textDecoration: "underline 1px",
          }}
        >
          Skills
        </h1>
        <div className="container mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto pb-3 border-b mb-3 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-lg title-font font-medium mb-2">
                Coding Languages
              </h2>
              <ul
                style={{
                  listStyle: "disc inside",
                  textAlign: "left",
                  display: "inline-block",
                }}
              >
                <li>C</li>
                <li>C++</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-3 mb-3 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-lg title-font font-medium mb-2">
                Web Development
              </h2>
              <ul
                style={{
                  listStyle: "disc inside",
                  textAlign: "left",
                  display: "inline-block",
                }}
              >
                <li>Flask</li>
                <li>Django</li>
                <li>React JS</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-3 mb-3 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-lg title-font font-medium mb-2">
                Android Development
              </h2>
              <ul
                style={{
                  listStyle: "disc inside",
                  textAlign: "left",
                  display: "inline-block",
                }}
              >
                <li>
                  Java App <br /> Development
                </li>
                <li>Flutter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
