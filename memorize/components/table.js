import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";

const Column = ({ data, last }) => {
  const columnData = data.map((datum, index) => {
    return (
      <Text
        key={JSON.stringify(datum) + index}
        style={[
          TableStyles.cell,
          index < data.length - 1 ? TableStyles.bottomBorder : undefined,
        ]}
      >
        {datum}
      </Text>
    );
  });

  return (
    <View
      style={[
        styles.columnDirection,
        styles.centerText,
        last ? undefined : TableStyles.rightBorder,
      ]}
    >
      {columnData}
    </View>
  );
};

export const TableColumns = ({ data, size: flex }) => {
  if (!data) return null;
  const numColumns = data[0].length;
  if (!numColumns) return null;

  const transpose = (m) => m[0].map((x, i) => m.map((x) => x[i]));
  const dataByColumn = transpose(data);
  const columns = dataByColumn.map((columnData, index) => (
    <Column
      last={index >= dataByColumn.length - 1}
      key={columnData + index}
      data={columnData}
    ></Column>
  ));

  return <View style={[styles.rowDirection]}>{columns}</View>;
};

const TableStyles = StyleSheet.create({
  cell: {
    padding: 3,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderColor: "black",
  },
  rightBorder: {
    borderRightWidth: 1,
    borderColor: "black",
  },
});
