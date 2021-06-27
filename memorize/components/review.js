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
  const [displayedNumbers, setDisplayedNumbers] = useState(""); //used to ensure that the loop continues if no state change occurs.

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
    return "";
  }

  const display_length = 4;
  useEffect(() => {
    let newVal = displayedNumbers;
    if (number.historyIndex > display_length) {
      newVal = number.history
        .slice(number.historyIndex - display_length, number.historyIndex)
        .join("");
    } else {
      newVal = number.history.slice(0, number.historyIndex).join("");
    }

    if (newVal != displayedNumbers) {
      setDisplayedNumbers(newVal);
    }
  }, [number.historyIndex]);

  return (
    <View style={styles.centerChildren}>
      <View style={(styles.centerChildren, styles.score)}>
        <Text style={styles.score}>
          {number.historyIndex}/{number.targetScore}
        </Text>
      </View>
      <View style={styles.centerChildren}>
        <Text style={styles.display}>{displayedNumbers}</Text>
      </View>
      <NumberKeyboard updateText={scoreInput} />
    </View>
  );
};

export default ReviewComponent;
