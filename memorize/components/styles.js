import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centerChildren: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  centerText:{
    textAlign: 'center', 
  },
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  rowDirection: {
    flexDirection: "row",
  },
  columnDirection: {
    flexDirection: "column",
  },
  row: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  invisible: {
    opacity: 0,
  },
  score: {
    color: 'rgba(0,0,0,0.5)',
    padding: 8,
    fontSize: 50,
  },
  button: {
  },
  display: {
    paddingVertical: 8,
    fontSize: 120,
    fontWeight: "bold",
  },
});
export default styles;
