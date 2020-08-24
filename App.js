import routes from './src/routes/routes';
export default routes;


// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, Text, ScrollView } from "react-native";
// import Card from "./components/card";
// import Header from "./components/header";
// import TaskAdder from "./components/taskadder";
// import Search from "./components/search";
// import { Firestore } from "./config/firebase";

// export default function App() {
//   const [searchedTasks, setSearchedTasks] = useState([]);
//   const [tasks, setTasks] = useState([]);
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [adderVisible, setAdderVisible] = useState(false);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     const tasksRef = Firestore.collection("tasks");
//     const snapshot = await tasksRef.get();
//     const fetchedTasks = [];
//     await snapshot.forEach((doc) => {
//       let task = {};
//       task.id = doc.id;
//       task.name = doc.data().name;
//       task.priority = doc.data().priority;
//       fetchedTasks.push(task);
//     });
//     setTasks([...fetchedTasks]);
//   };

//   const taskAdderHandler = (task) => {
//     let obj = {
//       name: task.trim(),
//       priority: 1,
//     };
//     Firestore.collection("tasks").add(obj);
//     obj.id = Math.floor(Math.random() * 99999 + 1).toString();
//     setTasks([...tasks, obj]);
//   };

//   const addercloser = () => {
//     setAdderVisible(false);
//   };

//   const adderopener = () => {
//     setAdderVisible(true);
//   };

//   const searchcloser = () => {
//     setSearchVisible(false);
//   };

//   const searchopener = () => {
//     setSearchVisible(true);
//   };

//   const resetSearchHandler = () => {
//     setSearchedTasks([]);
//   };

//   const delTaskHandler = async (task) => {
//     // console.log("deleting",task)
//     let updatedtasks = tasks.filter((t) => t!== task);
//     setTasks([...updatedtasks]);
//     if(searchedTasks.length>0){
//       let updateSearchedtasks = searchedTasks.filter((t) => t !== task);
//       setSearchedTasks([...updateSearchedtasks]);
//     }

//     let querySnapshot = await Firestore
//       .collection("tasks")
//       .where("name", "==", task.name).get();
//     querySnapshot.forEach(doc=>{
//       doc.ref.delete();
//     })
//   };

//   const taskSearchHandler = (task) => {
//     const items = [];
//     for (let t of tasks) {
//       if (t.name.toLowerCase().includes(task.toLowerCase())) {
//         items.push(t);
//       }
//     }
//     setSearchedTasks([...items]);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.centered}>
//         <Header
//           adder={adderopener}
//           searcher={searchopener}
//           adderclose={addercloser}
//           searchclose={searchcloser}
//           resetsearch={resetSearchHandler}
//         />

//         {adderVisible && (
//           <TaskAdder
//             addtask={taskAdderHandler}
//             tasks={tasks}
//             visibility={adderVisible}
//             adderclose={addercloser}
//           />
//         )}
//         {searchVisible && (
//           <Search
//             searchtasks={taskSearchHandler}
//             visibility={searchVisible}
//             searchclose={searchcloser}
//           />
//         )}
//       </View>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {searchedTasks.length > 0 ? (
//           searchedTasks.map((taskitem) => (
//             <Card key={taskitem.id} task={taskitem} delTask={delTaskHandler} />
//           ))
//         ) : tasks.length > 0 ? (
//           tasks.map((taskitem) => (
//             <Card key={taskitem.id} task={taskitem} delTask={delTaskHandler} />
//           ))
//         ) : (
//           <View style={styles.noItems}>
//             <Text>No items Present</Text>
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingVertical: 40,

//   },
//   centered:{
//     alignItems:"center",
//   },
//   scrollContainer:{
//     alignItems:"center",
//     minWidth:1
//   },
//   noItems: {
//     flex: 1,
//     justifyContent: "center",
//   },
// });
