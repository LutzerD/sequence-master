import React from "react";
import { HOME_MODE, INTRO_MODE, RECITE_MODE } from "../constants/actions";
import IntroContainer from "../intro-container";
import HomeContainer from "../home-container";
import ReviewContainer from "../review-container";

const RouterComponent = (props) => {
  console.log(props.mode)
  switch (props.mode) {
    case INTRO_MODE:{
      return <IntroContainer />;
    }
    case RECITE_MODE: {
      return <ReviewContainer />;
    }
    case HOME_MODE:
    default: {
      return <HomeContainer />;
    }
  }
};

export default RouterComponent;
