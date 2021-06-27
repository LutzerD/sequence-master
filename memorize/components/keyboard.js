import React, { useState, useEffect, Component } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import styles from "./styles";

export const WatchedKeyboard = (props) => {
  const setKeyboardVisible = props.setKeyboardVisible;
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        props.setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        props.setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <TextInput
      autoFocus={true}
      style={props.invisible ? styles.invisible : null}
      onChangeText={(text) => props.onChangeText(text)}
      editable
      keyboardType="numeric"
      value={props.inputValue || ""}
      onBlur={Keyboard.dismiss}
      blurOnSubmit={false}
    />
  );
};

export const NumberKeyboard = (props) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(true);
  const [text, setText] = useState(props.inputValue || "");

  function updateText(newText) {
    if (props.updateText){
        const newval = props.updateText(newText, text)
        console.log(newval)
        setText(newval)
    }else{
        setText(newText)
    }
  }

  function validateChange(newText) {
    newText = newText.toString();
    var numericChars = newText.replace(/[^0-9]/g, ""); //remove numeric charactesr
    if (numericChars != newText) {
      updateText(numericChars);
    } else {
      updateText(newText);
    }
  }

  function keyboardVisibility(value) {
    setKeyboardVisible(value);
  }

  if (!isKeyboardVisible) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            setKeyboardVisible(true);
          }}
        >
          <Text
            style={{
              fontSize: 28,
              textAlign: "center",
              margin: 10,
              justifyContent: "center",
              alignItems: "center",
              height: 60,
              width: "80%",
              backgroundColor: "yellow",
            }}
          >
            Open Keyboard
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View>
        <WatchedKeyboard
          inputValue={text}
          onChangeText={validateChange}
          setKeyboardVisible={keyboardVisibility}
        />
      </View>
    );
  }
};

export default NumberKeyboard;
