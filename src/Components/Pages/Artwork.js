import React from "react";
import adheera from "../Images/Adheera - BW.jpg";
import agent47 from "../Images/Agent 47.jpg";
import capAmerica from "../Images/Cap America.jpg";
import carnage from "../Images/Carnage.jpg";
import deadpool from "../Images/Deadpool.jpg";
import drStrange from "../Images/Dr. Strange.jpg";
import jackSparrow from "../Images/Jack Sparrow.jpg";
import johnWick from "../Images/John Wick.jpg";
import kratos from "../Images/Kratos.jpg";
import rocky from "../Images/Rocky - BW.jpg";
import rolax from "../Images/Rolax.jpg";
import t800 from "../Images/T-800.jpg";
import vikram from "../Images/Vikram.jpg";
// import vikramVid from "../Images/VIKRAM - My Art.mp4";

const Achievements = () => {
  return (
    <>
      <div id="gallery" className="container-fluid">
        <img
          src={adheera}
          alt=""
          className="img-responsive"
          // onClick={() => zoomImg("modal-body", adheera)}
          style={{ marginTop: "0px" }}
        />
        <img
          src={agent47}
          alt=""
          className="img-responsive"
          // onClick={() => zoomImg("modal-body", agent47)}
        />
        <img
          src={capAmerica}
          alt=""
          className="img-responsive"
          // onClick={() => zoomImg("modal-body", capAmerica)}
        />
        <img
          src={carnage}
          alt=""
          className="img-responsive"
          // onClick={() => zoomImg("modal-body", carnage)}
        />
        <img
          src={deadpool}
          alt=""
          className="img-responsive"
          // onClick={() => zoomImg("modal-body", deadpool)}
        />
        <img
          src={drStrange}
          alt=""
          className="img-responsive"
          // onClick={() => zoomImg("modal-body", drStrange)}
        />
        <img
          src={jackSparrow}
          alt=""
          className="img-responsive"
          // onClick={() => zoomImg("modal-body", jackSparrow)}
        />
        <img
          src={johnWick}
          alt=""
          className="img-responsive"
          // onClick={() => zoomImg("modal-body", johnWick)}
        />
        <img
          src={kratos}
          alt=""
          className="img-responsive"
          // onClick={() => zoomImg("modal-body", kratos)}
        />
        <img
          src={rocky}
          alt=""
          className="img-responsive"
          // onClick={() => zoomImg("modal-body", rocky)}
        />
        <img
          src={t800}
          alt=""
          className="img-responsive"
          // onClick={() => zoomImg("modal-body", t800)}
        />
        <img
          src={vikram}
          alt=""
          className="img-responsive"
          // onClick={() => zoomImg("modal-body", vikram)}
        />
        <img
          src={rolax}
          alt=""
          className="img-responsive"
          // onClick={() => zoomImg("modal-body", vikram)}
        />
        {/* <video className="vid" src={vikramVid} typeof="video/mp4"></video> */}
      </div>
      <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
