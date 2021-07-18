import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import { GOTO_HOME_SCREEN } from "../constants/actions";
import styles from "./styles";
import { connect } from "react-redux";

const SuccessComponent = (props) => {
  const [progress, setProgress] = useState("")

  function onRepeat() {
      props.dispatch({ type: GOTO_HOME_SCREEN });
  }

  useEffect(()=>{
    setProgress(props.number.history.join(""))
  },[])

  return (
    <View style={styles.centerChildren}>
      <View style={styles.centerChildren}>
        <Text style={styles.display}>{":)"}</Text>
        <View style={styles.centerChildren,styles.row}>
          <Text style={styles.score, {color: "green"}}>{progress}</Text>
        </View>
        <Button
          title="OK"
          onPress={() => props.dispatch({ type: GOTO_HOME_SCREEN })}
        ></Button>
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
