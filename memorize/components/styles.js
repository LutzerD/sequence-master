import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centerChildren: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  invisible: {
    opacity: 0,
  },
  score: {
    padding: 8,
    fontSize: 30,
  },
  display: {
    paddingVertical: 8,
    fontSize: 120,
    fontWeight: "bold",
  },
});
export default styles;
