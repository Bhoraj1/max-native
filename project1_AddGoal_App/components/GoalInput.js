import { useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttomContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHanlder} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 16,
    borderRadius:6

  },
  buttomContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
