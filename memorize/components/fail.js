import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Interval from "./interval";
import { GOTO_HOME_SCREEN } from "../constants/actions";
import { connect } from "react-redux";
import { numberReducer } from "../reducers/reducer";

const FailComponent = (props) => {
  const [progress, setProgress] = useState("")
  const [missed, setMissed] = useState("")

  function onRepeat() {
      props.dispatch({ type: GOTO_HOME_SCREEN });
  }

  useEffect(()=>{
    setProgress(props.number.history.slice(0,props.number.historyIndex).join(""))
    setMissed(props.number.history.slice(props.number.historyIndex+1).join(""))
  },[])

  return (
    <View style={styles.centerChildren}>
      <Interval repeat={() => onRepeat()} interval={3000}></Interval>
      <View style={styles.centerChildren}>
        <Text style={styles.display}>{":("}</Text>
        <View style={styles.centerChildren, styles.row}>
          <Text style={styles.score}>{progress}</Text>
          <Text style={styles.score, {color: "red"}}>{missed}</Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return (state) => {
    return { 
      ...state
     };
  };
};

export default connect(mapStateToProps)(FailComponent);
