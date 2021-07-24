import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import styles from "./styles";
import { GOTO_HOME_SCREEN } from "../constants/actions";

export const FinishComponent = (props) => {
  const [progress, setProgress] = useState("");
  const [missed, setMissed] = useState("");

  useEffect(() => {
    setProgress(
      props.number.history.slice(0, props.number.historyIndex).join("")
    );
    setMissed(
      props.number.history.slice(props.number.historyIndex).join("")
    );
  })

  return (
    <View style={styles.centerChildren}>
      <View style={styles.centerChildren}>
        <View style={{flex: 1}}></View>
        <Text style={styles.display}>{props.number.historyIndex >= props.number.history.length ? ":)" : ":("}</Text>
        <View style={[styles.centerChildren, styles.row]}>
          <Text style={[styles.score, {color: "green"}]}>{progress}</Text>
          <Text style={[styles.score, { color: "red" }]}>{missed}</Text>
        </View>
        <View style={{flex:1}}></View>
        <Button
          title="OK"
          style={styles.button}
          onPress={() => props.dispatch({ type: GOTO_HOME_SCREEN })}
        ></Button>
        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
};
