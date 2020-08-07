import { StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = props =>{
  const noItems="No items present";

  const removeTask=task=>{
    props.delTask(task);
    console.log("delete activated");
  }
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.card}
            onLongPress={removeTask.bind(this,props.task)}>
        {props.task}
      </Text>
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

    borderColor: "black",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.48,
    shadowRadius: 1.00,

    elevation: 3,
    width: '70%',
    marginTop: 15,
  }
});


export default Card;
