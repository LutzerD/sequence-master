import React from "react";
import { Button, StyleSheet, View } from "react-native";
import styles from "./styles";
import { HighScores } from "./highscores";
import {
  GOTO_PREVIOUS,
  INTRO_TTS_TOGGLE,
  RESET_ALL,
  RESET_HIGHSCORES,
  REVIEW_TTS_TOGGLE,
} from "../constants/actions";
import Environment from "../../environment";

const buttonOnColor = undefined;
const buttonOffColor = "#841584";

const StyledButton = (props) => {
  return (
    <View style={props.style}>
      <Button title={props.title} color={props.color} onPress={props.onPress}></Button>
    </View>
  );
};
const SettingsComponent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.centerChildren}>
        <View style={{ flex: 10 }} />
        {Environment.prod ? (
          <StyledButton
            title="Reset Everything"
            onPress={() => props.dispatch({ type: RESET_ALL })}
            style={SettingsStyles.button}
          ></StyledButton>
        ) : null}
        <StyledButton
          title="Reset Highscores"
          onPress={() => props.dispatch({ type: RESET_HIGHSCORES })}
          style={SettingsStyles.button}
        ></StyledButton>
        <StyledButton
          title={"REVIEW TTS " + (props.settings.tts.review ? "ON" : "OFF")}
          onPress={() => props.dispatch({ type: REVIEW_TTS_TOGGLE })}
          style={SettingsStyles.button}
          color={
            props.settings.tts.review
              ? buttonOnColor
              : buttonOffColor
          }
        ></StyledButton>
        <StyledButton
          title={
            "INTRODUCTION TTS " + (props.settings.tts.intro ? "ON" : "OFF")
          }
          onPress={() => props.dispatch({ type: INTRO_TTS_TOGGLE })}
          style={SettingsStyles.button}
          color={
            props.settings.tts.intro
              ? buttonOnColor
              : buttonOffColor
          }
        ></StyledButton>
        <View style={{ flex: 10 }} />
        <StyledButton
          title="Return"
          onPress={() => props.dispatch({ type: GOTO_PREVIOUS })}
          style={SettingsStyles.button}
        ></StyledButton>
        <View style={{ flex: 1 }} />
      </View>
    </View>
  );
};

export default SettingsComponent;

const SettingsStyles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
  },
});
