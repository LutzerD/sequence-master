import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import * as Speech from "expo-speech";
import { INTRO_START } from "../constants/actions";
import styles from "./styles";
import { HighScores } from "./highscores";
const HomeComponent = (props) => {
  return (
    <View style={styles.centerChildren}>
      <View style={{flex:10}}></View>
      <Button
        style={{flex:1}}
        title="Start"
        onPress={() => props.dispatch({ type: INTRO_START })}
      ></Button>
      <HighScores style={{flex:3}} highScores={props.number.highScores}></HighScores>
      <View style={{flex:10}}></View>
    </View>
  );
};

export default HomeComponent;
