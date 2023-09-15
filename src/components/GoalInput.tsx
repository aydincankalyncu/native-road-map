import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image
} from "react-native";
import React, { useState } from "react";

type GoalInputProp = {
  addGoalHandler: (goalText: string, event: GestureResponderEvent) => void;
  endGoalHandler: ((event: GestureResponderEvent) => void)
  visible: boolean;
};

const GoalInput = (props: GoalInputProp) => {
  const [goalText, setGoalText] = useState<string>("");
  const goalInputHandler = (enteredText: string) => {
    setGoalText(enteredText);
  };

  const addGoalHandler = (e: GestureResponderEvent) => {
    props.addGoalHandler(goalText, e);
    setGoalText("");
  };
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../../assets/images/favicon.png')}/>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your Course Goals..."
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.endGoalHandler} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b"
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
