import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { NEXT_MEMORIZE_NUMBER } from "../../constants/actions";
import * as Speech from 'expo-speech';

const Timer = (props) => {
  const [flip, setFlip] = useState(false); //used to ensure that the loop continues if no state change occurs.
  const { repeat, interval } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      repeat();
      setFlip(!flip);
    }, interval);
    return () => clearInterval(timer);
  });

  return <></>;
};

const MemorizeComponent = (props) => {
  const { number } = props;
  useEffect(() => {
    // Speech.speak(number) //TODO: enable if you want to hear the number.
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Timer
        repeat={() => {
          props.dispatch({ type: NEXT_MEMORIZE_NUMBER });
        }}
        interval={1000}
      ></Timer>
      <Text>{number}</Text>
    </View>
  );
};

export default MemorizeComponent;
