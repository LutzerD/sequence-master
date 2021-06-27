import React from "react";
import FailComponent from "./fail";
import SuccessComponent from "./success";
import IntroContainer from "../intro-container";
import HomeContainer from "../home-container";
import ReviewContainer from "../review-container";
import { FAIL_SCREEN, HOME_SCREEN, INTRO_SCREEN, RECITE_SCREEN, SUCCESS_SCREEN } from "../constants/screens";

const RouterComponent = (props) => {
  console.log(props.screen)
  switch (props.screen) {
    case INTRO_SCREEN:{
      return <IntroContainer />;
    }
    case RECITE_SCREEN: {
      return <ReviewContainer />;
    }
    case FAIL_SCREEN: {
      return <FailComponent />;
    }
    case SUCCESS_SCREEN: {
      return <SuccessComponent />;
    }
    case HOME_SCREEN:
    default: {
      return <HomeContainer />;
    }
  }
};

export default RouterComponent;
