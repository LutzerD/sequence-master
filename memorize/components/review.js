import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  RECITE_NEXT_NUMBER,
  RECITE_COMPLETE_FAIL,
  RECITE_COMPLETE_SUCCESS,
} from "../constants/actions";
import * as Speech from "expo-speech";
import styles from "./styles";
import Interval from "./interval";
import NumberKeyboard from "./keyboard";

const ReviewComponent = (props) => {
  const { number } = props;

  function scoreInput(text) {
    if (text && text.length == 1) {
      const expectedChar = number.history[number.historyIndex];
      if (text == expectedChar) {
        const complete = number.historyIndex + 1 >= number.history.length;
        if (complete) {
          props.dispatch({ type: RECITE_COMPLETE_SUCCESS });
        } else {
          props.dispatch({ type: RECITE_NEXT_NUMBER });
        }
      } else {
        props.dispatch({ type: RECITE_COMPLETE_FAIL });
      }
    }
    return ""
  }

  return (
    <View style={styles.centerChildren}>
      <Text>Review?</Text>

      <View style={(styles.centerChildren, styles.score)}>
        <Text style={styles.score}>Target: {number.targetScore}</Text>
        <Text style={styles.score}>Current: {number.historyIndex + 1}</Text>
      </View>
      <View style={styles.centerChildren}>
        <Text style={styles.display}>{number.current}</Text>
      </View>
      <NumberKeyboard updateText={scoreInput} />
    </View>
  );
};

export default ReviewComponent;
