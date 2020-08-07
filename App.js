import React, { useState } from "react";
import { StyleSheet, View,Text, ImagePropTypes } from "react-native";
import Card from "./components/card";
import Header from "./components/header";
import TaskAdder from "./components/taskadder";
import Search from "./components/search";

export default function App() {
  const [searchedTasks, setSearchedTasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [searchVisible,setSearchVisible]=useState(false);
  const [adderVisible,setAdderVisible]=useState(false);
  const taskAdderHandler = (task) => {
    setTasks([...tasks, task.trim()]);
  };
  const addercloser=()=>{
    setAdderVisible(false);
  };
   const adderopener = () => {
     setAdderVisible(true);
   };
   const searchcloser=()=>{
     setSearchVisible(false)
   };
   const searchopener=()=>{
     setSearchVisible(true)
   };
  const resetSearchHandler=()=>{
    setSearchedTasks([]);
  };
  const delTaskHandler=(task)=>{
    console.log("deleting",task)
    const updatredtasks=tasks.filter(t=>t!==task);
    setTasks([...updatredtasks]);
  }
  const taskSearchHandler=task=>{
    const items=[];
    for (let t of tasks){
      if(t.toLowerCase().includes(task.toLowerCase())){
        items.push(t);
      }
    }
    setSearchedTasks([...searchedTasks,...items])
  }
  return (
    <View style={styles.container}>
      <Header
        adder={adderopener}
        searcher={searchopener}
        adderclose={addercloser}
        searchclose={searchcloser}
        resetsearch={resetSearchHandler}
      />

      {adderVisible && (
        <TaskAdder
          addtask={taskAdderHandler}
          tasks={tasks}
          visibility={adderVisible}
          adderclose={addercloser}
        />
      )}
      {searchVisible && (
        <Search
          searchtasks={taskSearchHandler}
          visibility={searchVisible}
          searchclose={searchcloser}
        />
      )}
      {searchedTasks.length > 0
        ? searchedTasks.map((taskitem) => (
            <Card key={taskitem} task={taskitem} />
          ))
        : tasks.map((taskitem) => (
            <Card key={taskitem} task={taskitem} delTask={delTaskHandler} />
          ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    alignItems: "center",
  },
});
