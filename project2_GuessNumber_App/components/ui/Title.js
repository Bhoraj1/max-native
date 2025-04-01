import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.tital}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  tital: {
    fontFamily: "jet-brains-bold",
    marginTop: 18,
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth:Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
