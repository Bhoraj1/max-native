import { useState } from "react";
import { StyleSheet, Button, TextInput, View } from "react-native";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoals] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoals(enteredText);
  }

  function addGoalHanlder() {
    props.onAddGoal(enteredGoal);
    setEnteredGoals("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add Goal" onPress={addGoalHanlder} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
