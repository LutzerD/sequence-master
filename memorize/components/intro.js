import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { INTRO_NEXT_NUMBER, RECITE_START } from "../constants/actions";
import * as Speech from "expo-speech";
import styles from "./styles";
import Interval from "./interval";
import Environment from "../../environment";

const IntroComponent = (props) => {
  const { number, settings } = props;
  if (settings.tts || !Environment.prod) {
    useEffect(() => {
      const char = '' + number.current
      console.log(char, typeof(char))
      Speech.speak(char); //TODO: settings / enable if you want to hear the number.
    });
  }

  function onRepeat() {
    if (number.currentScore >= number.targetScore) {
      props.dispatch({ type: RECITE_START });
    } else {
      props.dispatch({ type: INTRO_NEXT_NUMBER });
    }
  }

  return (
    <View style={styles.centerChildren}>
      <View style={(styles.centerChildren, styles.score)}>
        <Text style={styles.score}>
          {number.currentScore}/{number.targetScore}
        </Text>
      </View>
      <Interval repeat={() => onRepeat()} interval={Environment.prod ? 2000 : 500}></Interval>
      <View style={styles.centerChildren}>
        <Text style={styles.display}>{number.current}</Text>
      </View>
    </View>
  );
};

export default IntroComponent;
