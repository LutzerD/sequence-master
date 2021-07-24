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
      Speech.speak(char);
    });
  }
  
  const [barOn, setBarOn] = useState(true);
  

  function onRepeat() {
    console.log(barOn)
    setBarOn(!barOn)
    if(!barOn){
      if (number.currentScore >= number.targetScore) {
        props.dispatch({ type: RECITE_START });
      } else {
        props.dispatch({ type: INTRO_NEXT_NUMBER });
      }
    }
  }

  return (
    <View style={styles.centerChildren}>
      <View style={styles.centerChildren}>
        <Text style={styles.score}>
          {number.currentScore}/{number.targetScore}
        </Text>
      </View>
      <Interval repeat={() => onRepeat()} interval={Environment.prod ? 1000 : 250}></Interval>
      <View style={{flex:1}}></View>
      <View style={[styles.centerChildren,{
        borderBottomColor: barOn ?  "black" : 'transparent',
        borderBottomWidth: 5,
      }]}>
        <Text style={styles.display}>{number.current}</Text>
      </View>
      <View style={{flex:1}}></View>
    </View>
  );
};

export default IntroComponent;
