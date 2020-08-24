import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

const TaskAdder = (props) => {
  const [newTask, SetNewTask] = useState("");
  const taskInputHandler = (task) => {
    SetNewTask(task);
  };
  const onAddClick = () => {
    for (let i in newTask) {
      if (newTask[i] !== " ") {
        props.addtask(newTask);
        SetNewTask("");
        props.adderclose();
        break;
      }
    }
  };
  return (
    <View style={styles.taskadderContainer}>
      <TextInput
        placeholder="Enter New Task"
        style={styles.input}
        value={newTask}
        onChangeText={taskInputHandler}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={onAddClick} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  taskadderContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "75%",
    marginVertical: 5,
    textAlign: "center",
  },
  input: {
    width: "65%",
    height: 35,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    textAlignVertical:"center"
  },
  buttonContainer: {
    width: "25%",
  },
});

export default TaskAdder;
