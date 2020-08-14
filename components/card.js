import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Card = props =>{

  const removeTask=task=>{
    props.delTask(task);
    console.log("delete activated");
  }
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onLongPress={removeTask.bind(this, props.task)}>
        <Text style={styles.card}>{props.task.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    marginVertical:10,
    fontSize:18,
    color: 'black',
    textAlign:"center",

  },
  cardContainer: {
    backgroundColor:"white",
    borderColor: "black",
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.00,

    elevation: 3,
    width: '70%',
    marginTop: 15,
  }
});


export default Card;
