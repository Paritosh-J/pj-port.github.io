import React from "react";
import myResume from "../Images/myResume.jpg";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <section className="text-black-600 body-font">
      <div className="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
        <h1
          className="sm:text-4xl font-medium title-font mb-4"
          style={{ textAlign: "center", textDecoration: "underline 1px" }}
        >
          Resume
        </h1>
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={myResume}
        />
        <div className="text-center lg:w-2/3 w-full">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1C7kSXnk2V8q_VTlbLy_U9CjQ9BqMsufw/view?usp=sharing"
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Download
          </a>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
