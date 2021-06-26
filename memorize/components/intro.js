import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HOME_MODE, INTRO_END, INTRO_NEXT_NUMBER, RECITE_START } from "../constants/actions";
import * as Speech from "expo-speech";
import styles from "./styles";
import Interval from "./Interval";

const IntroComponent = (props) => {
  const { number, settings } = props;
  if (settings.tts) {
    useEffect(() => {
      Speech.speak(number); //TODO: enable if you want to hear the number.
    });
  }

  function onRepeat() {
    console.log(number.currentScore, number.targetScore)
    if (number.currentScore >= number.targetScore) {
      props.dispatch({ type: RECITE_START });
    } else {
      props.dispatch({ type: INTRO_NEXT_NUMBER });
    }
  }

  return (
    <View style={styles.centerChildren}>
      <View style={(styles.centerChildren, styles.score)}>
        <Text style={styles.score}>Target: {number.targetScore}</Text>
        <Text style={styles.score}>Current: {number.currentScore}</Text>
      </View>
      <Interval repeat={() => onRepeat()} interval={1000}></Interval>
      <View style={styles.centerChildren}>
        <Text style={styles.display}>{number.current}</Text>
      </View>
    </View>
  );
};

export default IntroComponent;
