import React from "react";
import { FaGithub } from "react-icons/fa";
import { History } from "history";
import "./Home.scss";
import Arrow from "../../common/Arrow/Arrow";
import Introduction from "./introduction/Introduction";

function Home({ history }: { history: History }) {
  const onClickArrow = (): void => {
    const location = document.getElementById("introduction");
    window.scrollTo({ top: location?.offsetTop, behavior: "smooth" });
  };

  const renderWhoAmI = (): JSX.Element => {
    return (
      <div className="who-am-i">
        Heo Jeong Bo
        {renderDescription()}
      </div>
    );
  };

  const renderDescription = (): JSX.Element => {
    return (
      <div className="description">
        Web Frontend Developer <span>&&</span> Hope Full Stack
      </div>
    );
  };

  const renderIcons = (): JSX.Element => {
    return <div className="icon-container">{githubIcon()}</div>;
  };

  const githubIcon = (): JSX.Element => {
    return (
      <div>
        <FaGithub />
      </div>
    );
  };

  const renderArrowWithText = (): JSX.Element => {
    return (
      <div className="arrow-with-text">
        about me
        <Arrow onClick={onClickArrow} />
      </div>
    );
  };

  return (
    <div className="home-wrapper">
      <div className="home-container">
        {renderWhoAmI()}
        {renderIcons()}
        {renderArrowWithText()}
      </div>
      <Introduction history={history} />
    </div>
  );
}

export default Home;
