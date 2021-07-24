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
const buttonOffColor = 'white';

const SettingsComponent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.centerChildren, SettingsStyles.button]}>
        <View style={{ flex: 10 }} />
        {Environment.prod ? (
          <Button
            title="Reset Everything"
            onPress={() => props.dispatch({ type: RESET_ALL })}
            style={SettingsStyles.button}
          ></Button>
        ) : null}
        <Button
          title="Reset Highscores"
          onPress={() => props.dispatch({ type: RESET_HIGHSCORES })}
          style={SettingsStyles.button}
        ></Button>
        <View style={styles.rowDirection}>
          <Button
            title={"REVIEW TTS " + (props.settings.tts.review ? "ON" : "OFF")}
            onPress={() => props.dispatch({ type: REVIEW_TTS_TOGGLE })}
            style={SettingsStyles.button}
            color={
              props.settings.tts.review
                ? SettingsStyles.buttonOn
                : SettingsStyles.buttonOFF
            }
          ></Button>
          <Button
            title={
              "INTRODUCTION TTS " + (props.settings.tts.intro ? "ON" : "OFF")
            }
            onPress={() => props.dispatch({ type: INTRO_TTS_TOGGLE })}
            style={SettingsStyles.button}
            color={
              props.settings.tts.intro
                ? SettingsStyles.buttonOn
                : SettingsStyles.buttonOFF
            }
          ></Button>
        </View>
        <View style={{ flex: 10 }} />
        <Button
          title="Return"
          onPress={() => props.dispatch({ type: GOTO_PREVIOUS })}
          style={SettingsStyles.button}
        ></Button>
        <View style={{ flex: 1 }} />
      </View>
    </View>
  );
};

export default SettingsComponent;

const SettingsStyles = StyleSheet.create({
  button: {
    margin: 10,
  },
});
