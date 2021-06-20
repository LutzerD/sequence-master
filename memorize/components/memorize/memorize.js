import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const MemorizeComponent = (props) => {
    let { number } = props;
    number = number || "4";
  return (
    <View >
        <Text>{number}</Text>
    </View>
  );
};

export default MemorizeComponent;
