import React from "react";
import IntroContainer from "../intro-container";
import HomeContainer from "../home-container";
import ReviewContainer from "../review-container";
import FinishContainer from "../finish-container";
import { FAIL_SCREEN, HOME_SCREEN, INTRO_SCREEN, RECITE_SCREEN, SUCCESS_SCREEN } from "../constants/screens";

const RouterComponent = (props) => {
  switch (props.screen) {
    case INTRO_SCREEN:{
      return <IntroContainer />;
    }
    case RECITE_SCREEN: {
      return <ReviewContainer />;
    }
    case FAIL_SCREEN: 
    case SUCCESS_SCREEN: 
      return <FinishContainer />;
    case HOME_SCREEN:
    default: {
      console.log("home?")
      return <HomeContainer />;
    }
  }
};

export default RouterComponent;
