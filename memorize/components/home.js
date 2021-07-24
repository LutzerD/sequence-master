import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import * as Speech from "expo-speech";
import { GOTO_SETTINGS, INTRO_START } from "../constants/actions";
import styles from "./styles";
import { HighScores } from "./highscores";
import Icon from "react-native-vector-icons/FontAwesome";

const ToolBar = (props) => {
  return (
    <View style={[styles.rowDirection, { padding: 10 }]}>
      <View style={{flex:1}}></View>
      
      <Button
        icon={<Icon name="cog" size={15} color="white" />}
        title="Settings"
        style={HomeStyles.topRight}
        onPress={() => props.dispatch({ type: GOTO_SETTINGS })}
      ></Button>
    </View>
  );
};

const HomeComponent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ToolBar {...props} />
      <View style={[styles.centerChildren]}>
        <View style={{ flex: 1 }} />
        <HighScores
          style={{ flex: 3, backgroundColor: "red" }}
          highScores={props.number.highScores}
        ></HighScores>
        <Button
          style={{ flex: 1 }}
          title="Start Introduction"
          onPress={() => props.dispatch({ type: INTRO_START })}
          style={styles.button}
        ></Button>
        <View style={{ flex: 1 }} />
      </View>
    </View>
  );
};

const HomeStyles = StyleSheet.create({
  topRight: {
    marginTop: -5,
    position: "absolute",
    alignSelf: "flex-end",
  },
});

export default HomeComponent;
