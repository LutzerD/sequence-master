import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export const HighScores = ({ highScores }) => {
  highScores = highScores || [];
  console.log(highScores);
  return highScores.map((highScore, index) => (
    <View key={index.toString()} style={styles.row}>
      <Text>{index+1}. {highScore.score} {highScore.date}</Text>
    </View>
  ));
};
