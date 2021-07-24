import React from "react";
import IntroContainer from "../intro-container";
import HomeContainer from "../home-container";
import ReviewContainer from "../review-container";
import FinishContainer from "../finish-container";
import SettingsContainer from "../settings-container";
import { FAIL_SCREEN, HOME_SCREEN, INTRO_SCREEN, RECITE_SCREEN, SETTINGS_SCREEN, SUCCESS_SCREEN } from "../constants/screens";

const RouterComponent = ({screen}) => {
  console.log(screen)
  switch (screen.current) {
    case INTRO_SCREEN:{
      return <IntroContainer />;
    }
    case RECITE_SCREEN: {
      return <ReviewContainer />;
    }
    case SETTINGS_SCREEN: {
      return <SettingsContainer />;
    }
    case FAIL_SCREEN: 
    case SUCCESS_SCREEN: 
      return <FinishContainer />;
    case HOME_SCREEN:
    default: {
      return <HomeContainer />;
    }
  }
};

export default RouterComponent;
