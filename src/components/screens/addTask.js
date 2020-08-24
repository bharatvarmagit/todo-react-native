import React, { useState } from 'react';
import {StyleSheet,View} from 'react-native';
import {Content,Form,Item,Label,Input, Picker,Button,Text, Grid} from 'native-base'
import { AntDesign} from "@expo/vector-icons";

export function AddTask({navigation}){
  const [newTask, setNewTask] =useState({});
  const [taskValid,setTaskValid]=useState(false);
  const [priorityValid,setPriorityValid]=useState(false);

  const onChangeTask=async(task)=>{
    setNewTask({...newTask,task:task.nativeEvent.text});
    for (let char of task.nativeEvent.text){
      if(char!==" "){
        setTaskValid(true);
        return
      }
    }
    setTaskValid(false);
  }
  const onChangePriority=(value)=>{
    setPriorityValid(true);
    setNewTask({...newTask,priority : value})
    console.log("priority value is ",value);
  }
  const onSave=()=>{
    navigation.navigate("Home")
  }
  return (
    <Content contentContainerStyle={styles.formContainer}>
      <Form style={styles.formContainer}>
        <Item
          floatingLabel
          regular
          style={
            taskValid
              ? { ...styles.formInput, borderColor: "green" }
              : { ...styles.formInput }
          }
        >
          <Label> Enter text </Label>
          <Input
            placeholderTextColor="grey"
            value={newTask}
            onChange={onChangeTask}
          />
        </Item>
        <Item
          picker
          style={
            priorityValid
              ? { ...styles.formInput, borderColor: "green" }
              : { ...styles.formInput }
          }
        >
          <Picker
            mode="dropdown"
            iosIcon={<AntDesign name="downcircleo" size={24} color="black" />}
            placeholder="Pick Task Priority"
            placeholderStyle={{ color: "grey" }}
            onValueChange={onChangePriority}
            selectedValue={newTask.priority}
          >
            <Picker.Item label="High" value="1" />
            <Picker.Item label="Medium" value="2" />
            <Picker.Item label="Low" value="3" />
            <Picker.Item label="None" value="0"/>
          </Picker>
        </Item>
        <View style={styles.formInput}>
          <Button disabled={!taskValid||!priorityValid} success={taskValid&&priorityValid} onPress={onSave}>
            <Text style={{}}>save</Text>
          </Button>
        </View>
      </Form>
    </Content>
  );
}

const styles = StyleSheet.create({
  taskInput: {
    backgroundColor: "white",
    borderColor: "black",
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.0,

    elevation: 3,
    width: "50%",
    height: "3%",
  },
  formInput: {
    justifyContent:'center',
    alignItems:'center',
    marginVertical:30,

  },
  formContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'

  }
});
