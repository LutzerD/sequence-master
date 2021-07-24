import React from "react";
import { Text } from "react-native";
import { TableColumns } from "./table";


export const HighScores = ({ highScores }) => {
  if (!highScores || !highScores.length) return null
  
  highScores = highScores || [];
  console.log("weeha");

  highScores = [
    ["#", "Score", "Date"],
    ...highScores.map((highScore, index) => [
      index + 1,
      highScore.score,
      highScore.date,
    ]),
  ];
  
  return (
    <Text style={{ flex: 1 }}>
      <TableColumns data={highScores} flex={[1, 3, 3]} />
    </Text>
  );
};
