import React from "react";
import { StyleSheet, Text, View, Button} from "react-native";

const Header = (props) => {
  const onAdd = () => {
    props.searchclose();
    props.adder();
  };
  const onSearch = () => {
    props.adderclose();
    props.searcher();
  };
  const resetSearch = () => {
    console.log("search reset")
    props.resetsearch();
  };

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title} onPress={resetSearch}>To-Do List App</Text>

      <View style={styles.btn}>
        <Button title="search" color="blue" onPress={onSearch}/>
      </View>
      <View style={styles.btn}>
        <Button title="add" color="blue" onPress={onAdd} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingLeft:100,
    marginVertical: 10,
    textAlign: "center",
    alignItems: "center",
    width: "60%",
    fontSize: 20,
    color: "black",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    backgroundColor: "skyblue",
  },
  btn: {

    width: "18%",
    textDecorationColor:"white",
  },
});

export default Header;
