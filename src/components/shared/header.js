
import React from "react";
import { StyleSheet, Text, View, Button, Pressable, TouchableOpacity, SafeAreaView} from "react-native";


  const Header = (props) => {
  // const onAdd = () => {
  //   props.searchclose();
  //   props.adder();
  // };
  // const onSearch = () => {
  //   props.adderclose();
  //   props.searcher();
  // };
  // const resetSearch = () => {
  //   // console.log("search reset")
  //   props.resetsearch();
  //   props.adderclose();
  //   props.searchclose();
  // };

  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <TouchableOpacity activeOpacity={0.1}>
          <Text style={styles.titleText}>To-Do List App</Text>
        </TouchableOpacity>

        {/* <View style={styles.btn}>
        <Button title="search" color="blue" onPress={onSearch} />
      </View>
      <View style={styles.btn}>
        <Button title="add" color="blue" onPress={onAdd} />
      </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText:{
    fontSize:20
  },
  title: {
    paddingLeft:100,
    marginVertical: 10,
    textAlign: "center",
    alignItems: "center",
    width: "60%",
    color: "black",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    minHeight:50,
    backgroundColor: "white",
  },
  btn: {

    width: "18%",
    textDecorationColor:"white",
  },
});

export default Header;
