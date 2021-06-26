import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HOME_MODE, INTRO_END, RECITE_NEXT_NUMBER } from "../constants/actions";
import * as Speech from "expo-speech";
import styles from "./styles";
import Interval from "./Interval";

const IntroComponent = (props) => {
  const { number, currentScore, targetScore, settings } = props;
  if (settings.tts) {
    useEffect(() => {
      Speech.speak(number); //TODO: enable if you want to hear the number.
    });
  }

  function onRepeat() {
    if (currentScore >= targetScore) {
      props.dispatch({ type: HOME_MODE });
    } else {
      props.dispatch({ type: RECITE_NEXT_NUMBER });
    }
  }

  return (
    <View style={styles.centerChildren}>
      <View style={(styles.centerChildren, styles.score)}>
        <Text style={styles.score}>{currentScore}</Text>
      </View>
      <Interval repeat={() => onRepeat()} interval={1000}></Interval>
      <View style={styles.centerChildren}>
        <Text style={styles.display}>{number}</Text>
      </View>
    </View>
  );
};

export default IntroComponent;
