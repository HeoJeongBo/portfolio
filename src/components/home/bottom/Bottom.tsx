import React, { useRef, useState } from "react";
import "./Bottom.scss";
import Image1 from "../../../resource/images/IMG_0529.jpeg";
import Image2 from "../../../resource/images/IMG_0655.jpeg";
import Image3 from "../../../resource/images/IMG_0529.jpeg";
import Image4 from "../../../resource/images/IMG_1034.jpeg";

const Bottom = () => {
  const [test, setTest] = useState(1);

  const onClickSpin = () => {
    const box = document.getElementById("box");
    if (box) {
      const deg = test * 90 + 45;
      box.style.transform = "translate(0, -50%) rotate(" + deg + "deg)";
    }
    setTest(test + 1);

    // document.getElementById("box")?.style?.transform = "rotate(" + deg + "deg)";
  };

  //   const renderBottomDescription = () => {
  //     return (
  //       <div className="mainbox">
  //         <div className="box" id="box">
  //           <div className="box1">
  //             <span className="span1"></span>
  //             <span className="span2"></span>
  //             <span className="span3"></span>
  //             <span className="span4"></span>
  //           </div>
  //           <div className="box2">
  //             <span className="span1"></span>
  //             <span className="span2"></span>
  //             <span className="span3"></span>
  //             <span className="span4"></span>
  //           </div>
  //         </div>
  //         <button className="spin" onClick={onClickSpin}>
  //           SPIN
  //         </button>
  //       </div>
  //     );
  //   };

  const renderImages = () => {
    return (
      <div className="image-container" id="box">
        <span className="image1">
          <div>
            <img src={Image1} alt="1" />
          </div>
        </span>
        <span className="image2">
          <div>
            <img src={Image2} alt="2" />
          </div>
        </span>
        <span className="image3">
          <div>
            <img src={Image3} alt="3" />
          </div>
        </span>
        <span className="image4">
          <div>
            <img src={Image4} alt="4" />
          </div>
        </span>
        {/* <button className="spin" onClick={onClickSpin}>
          {test}
        </button> */}
      </div>
    );
  };

  const renderButton = () => {
    return (
      <div className="button-wrapper" onClick={onClickSpin}>
        <button className="spin">{test}</button>
      </div>
    );
  };

  return (
    <div className="home-bottom-wrapper">
      {/* {renderBottomDescription()} */}
      {renderImages()}
      {renderButton()}
    </div>
  );
};

export default Bottom;
