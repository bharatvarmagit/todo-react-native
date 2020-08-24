import React from 'react';
import{View,Text,StyleSheet,Button} from 'react-native';
import Center from '../shared/center'

function Home({navigation}) {
  const tasks = [
    { id: 1, task: "task 1", priority: 1 },
    { id: 2, task: "task 2", priority: 2 },
    { id: 3, task: "task 3", priority: 3 },
    { id: 4, task: "task 4", priority: 1 },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Center>
        <Text> My Body </Text>
        <Button
          title="add task"
          onPress={() => navigation.navigate("AddTask")}
        />
        <Button
          title="go to draggable"
          onPress={() => navigation.navigate("Drag")}
        />
      </Center>
    </View>
  );
}

const styles=StyleSheet.create({
  Body : {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Home;
