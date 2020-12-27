import React from "react";
import { FaCode } from "react-icons/fa";
import { History } from "history";
import "./Introduction.scss";

function Introduction({ history }: { history: History }) {
  const onClickProject = (): void => {
    history.push("/project");
  };

  const renderConst = (): JSX.Element => {
    return (
      <div className="declare">
        let <span className="name">HeoJeongBo</span> =
      </div>
    );
  };

  const renderSubDescription = (): JSX.Element => {
    return (
      <div className="sub-description">
        <p>현재 프론트엔드 개발자로 일하고 있습니다.</p>
        <p>
          <span>React, Redux(redux-thunk,redux-thunk)</span>를 사용하여 주로
          개발하고 있으며
          <span> Flutter</span>를 이용한 App개발에 관심이 있습니다.
        </p>
        <p>
          <span>DRF</span>를 사용하여 <span>Rest API</span>로 서버와 통신하는
          방법에 관심이 있습니다. ;
        </p>
      </div>
    );
  };

  const renderGoProject = (): JSX.Element => {
    return (
      <div className="go-project">
        <div onClick={onClickProject}>
          프로젝트 보러가기 <FaCode />
        </div>
      </div>
    );
  };

  return (
    <div className="introduction-wrapper" id="introduction">
      {renderConst()}
      {renderSubDescription()}
      {renderGoProject()}
    </div>
  );
}

export default Introduction;
