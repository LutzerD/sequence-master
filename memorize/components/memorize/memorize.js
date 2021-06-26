import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RECITE_NEXT_NUMBER } from "../../constants/actions";
import * as Speech from "expo-speech";

const Timer = (props) => {
  const [flip, setFlip] = useState(false); //used to ensure that the loop continues if no state change occurs.
  const { repeat, interval } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      repeat();
      setFlip(!flip);
    }, interval);
    return () => clearInterval(timer);
  });

  return <></>;
};

const MemorizeComponent = (props) => {
  const { number, currentScore } = props;
  useEffect(() => {
    // Speech.speak(number) //TODO: enable if you want to hear the number.
  });

  return (
    <View style={styles.centerChildren}>
      <View style={styles.centerChildren, styles.score}>
        <Text style={styles.score}>{currentScore}</Text>
      </View>
      <Timer
        repeat={() => {
          props.dispatch({ type: RECITE_NEXT_NUMBER });
        }}
        interval={1000}
      ></Timer>
      <View style={styles.centerChildren}>
        <Text style={styles.display}>{number.current}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerChildren: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  score: {
    padding: 8,
    fontSize: 30,
  },
  display: {
    paddingVertical: 8,
    fontSize: 120,
    fontWeight: "bold",
  },
});

export default MemorizeComponent;
