import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.tital}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  tital: {
    fontFamily:'jet-brains-bold',
    marginTop: 18,
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
