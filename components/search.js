import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const searchInputHandler = (value) => {
    setSearchInput(value);
  };
  const searchBtnHandler = () => {
    for (let i in searchInput) {
      if (searchInput[i] !== " ") {
        props.searchtasks(searchInput.trim());
        setSearchInput("");
        props.searchclose();
        break;
      }
    }
  };
  return (
    <View style={styles.searchContainer}>

        <TextInput
          placeholder="Search for tasks"
          style={styles.input}
          value={searchInput}
          onChangeText={searchInputHandler}
        />

      <View style={styles.buttonContainer}>
        <Button title="search" onPress={searchBtnHandler} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "75%",
    marginVertical: 5,
    textAlign: "center",
  },
  inputContainer:{
  },
  input: {
    width: "65%",
    height: 35,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal:10,
  },
  buttonContainer: {
    width: "25%",
  },
});
export default Search;
