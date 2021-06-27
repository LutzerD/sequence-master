import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Interval from "./interval";
import { GOTO_HOME_SCREEN } from "../constants/actions";
import { connect } from "react-redux";

const FailComponent = (props) => {
  function onRepeat() {
      props.dispatch({ type: GOTO_HOME_SCREEN });
  }

  return (
    <View style={styles.centerChildren}>
      <Interval repeat={() => onRepeat()} interval={3000}></Interval>
      <View style={styles.centerChildren}>
        <Text style={styles.display}>{":("}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return (state) => {
    return { 
      // ...state
     };
  };
};

export default connect(mapStateToProps)(FailComponent);
