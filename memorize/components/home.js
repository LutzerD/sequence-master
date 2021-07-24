import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import * as Speech from "expo-speech";
import { INTRO_START } from "../constants/actions";
import styles from "./styles";
import { HighScores } from "./highscores";
const HomeComponent = (props) => {
  return (
    <View style={[styles.centerChildren]}>
      <View style={{ flex: 1 }} />
      <HighScores
        style={{ flex: 3, backgroundColor: "red" }}
        highScores={props.number.highScores}
      ></HighScores>
      <Button
        style={{ flex: 1 }}
        title="Start"
        onPress={() => props.dispatch({ type: INTRO_START })}
        style={styles.button}
      ></Button>
      <View style={{ flex: 1 }} />
    </View>
  );
};

export default HomeComponent;
