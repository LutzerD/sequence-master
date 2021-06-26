import React from "react";
import { HOME_MODE, INTRO_MODE, RECITE_MODE } from "../constants/actions";
import IntroContainer from "../intro-container";
import HomeContainer from "../home-container";

const RouterComponent = (props) => {
  switch (props.mode) {
    case INTRO_MODE:
    case RECITE_MODE: {
      return <IntroContainer />;
    }
    case HOME_MODE:
    default: {
      return <HomeContainer />;
    }
  }
};

export default RouterComponent;
