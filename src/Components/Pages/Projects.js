import React from "react";

const Projects = () => {
  return (
    <div
      className="container px-5 mx-auto"
      id="projects"
      style={{ paddingTop: "2rem", paddingBottom: "3rem" }}
    >
      <h1
        className="sm:text-4xl font-medium title-font mb-2"
        style={{ textAlign: "center", textDecoration: "underline 1px" }}
      >
        Projects
      </h1>
      <div className="flex flex-col text-center w-full mb-2">
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Following are some projects I've worked upon
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h2
              className="text-3xl pb-4 mb-4 border-b border-gray-400"
              style={{ textAlign: "center" }}
            >
              Hand Gesture Volume Control
            </h2>
            <iframe
              src="https://youtube.com/embed/gc8GOsZY-I0"
              style={{ marginTop: "1em" }}
            />
            <a
              href="https://github.com/Paritosh-J/hand-gesture-volume-control.git"
              target="_blank"
            >
              <button
                className="flex items-center text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded"
                style={{ marginBottom: "1em", marginTop: "1em" }}
              >
                GitHub Link
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h2
              className="text-3xl pb-4 mb-4 border-b border-gray-400"
              style={{ textAlign: "center" }}
            >
              Virtual Painter Using OpenCV
            </h2>
            <iframe
              src="https://www.youtube.com/embed/Lq5xuxDiCZA"
              style={{ marginTop: "1em" }}
            />
            <a
              href="https://github.com/Paritosh-J/virtual-painter.git"
              target="_blank"
            >
              <button
                className="flex items-center text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded"
                style={{ marginBottom: "1em", marginTop: "1em" }}
              >
                GitHub Link
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h2
              className="text-3xl pb-4 mb-4 border-b border-gray-400"
              style={{ textAlign: "center" }}
            >
              Face Detection Using OpenCV
            </h2>
            <iframe
              src="https://www.youtube.com/embed/l0NFbpxLwXU"
              style={{ marginTop: "1em" }}
            />
            <a
              href="https://github.com/Paritosh-J/face-detection.git"
              target="_blank"
            >
              <button
                className="flex items-center text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded"
                style={{ marginBottom: "1em", marginTop: "1em" }}
              >
                GitHub Link
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h2
              className="text-3xl pb-4 mb-4 border-b border-gray-400"
              style={{ textAlign: "center" }}
            >
              Brain Tumor Detection
            </h2>
            <iframe
              src="https://youtube.com/embed/mMFdgcZgHt4"
              style={{ marginTop: "1em" }}
            />
            <a
              href="https://github.com/Paritosh-J/Neuro-Care.git"
              target="_blank"
            >
              <button
                className="flex items-center text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded"
                style={{ marginBottom: "1em", marginTop: "1em" }}
              >
                GitHub Link
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
