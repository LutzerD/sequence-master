import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import * as Speech from "expo-speech";
import { INTRO_START } from "../constants/actions";
import styles from "./styles";

const HomeComponent = (props) => {
  return (
    <View style={styles.centerChildren}>
      <Button
        title="Starto"
        onPress={() => props.dispatch({ type: INTRO_START })}
      ></Button>
    </View>
  );
};

export default HomeComponent;
