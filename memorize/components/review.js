import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RECITE_END, RECITE_NEXT_NUMBER } from "../constants/actions";
import * as Speech from "expo-speech";
import styles from "./styles";
import Interval from "./Interval";

const ReviewComponent = (props) => {
  const { number } = props;

  function onRepeat() {
    if (number.historyIndex + 1 >= number.history.length) {
      props.dispatch({ type: RECITE_END });
    } else {
      props.dispatch({ type: RECITE_NEXT_NUMBER });
    }
  }

  return (
    <View style={styles.centerChildren}>
      <View style={(styles.centerChildren, styles.score)}>
      <Text style={styles.score}>Target: {number.targetScore}</Text>
        <Text style={styles.score}>Current: {number.historyIndex + 1}</Text>
      </View>
      <Interval repeat={() => onRepeat()} interval={1000}></Interval>
      <View style={styles.centerChildren}>
        <Text style={styles.display}>{number.current}</Text>
      </View>
    </View>
  );
};

export default ReviewComponent;
