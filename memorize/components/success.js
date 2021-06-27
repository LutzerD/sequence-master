import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { GOTO_HOME_SCREEN } from "../constants/actions";
import styles from "./styles";
import Interval from "./interval";
import { connect } from "react-redux";

const SuccessComponent = (props) => {
  const [progress, setProgress] = useState("")
  const [missed, setMissed] = useState("")

  function onRepeat() {
      props.dispatch({ type: GOTO_HOME_SCREEN });
  }

  useEffect(()=>{
    setProgress(props.number.history.join(""))
  },[])

  return (
    <View style={styles.centerChildren}>
      <Interval repeat={() => onRepeat()} interval={3000}></Interval>
      <View style={styles.centerChildren}>
        <Text style={styles.display}>{":)"}</Text>
        <View style={styles.centerChildren,styles.row}>
          <Text style={styles.score, {color: "green"}}>{progress}</Text>
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

export default connect(mapStateToProps)(SuccessComponent);
