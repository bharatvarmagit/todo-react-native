import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { MaterialIcons } from "@expo/vector-icons";

const exampleData = [...Array(20)].map((d, index) => ({
  key: `item-${index}`, // For example only -- don't use index as your key!
  label: index,
  backgroundColor: `rgb(${Math.floor(Math.random() * 3)}, ${
    index * 5
  }, ${132})`,
}));

class Draggable extends Component {
  state = {
    data: exampleData,
  };

  renderItem = ({ item, index, drag, isActive }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          height:60,
          alignItems: "center",
        }}
      >
        <View style={{ backgroundColor: "red", height:'85%',width:40,justifyContent:'center',alignItems:'center',shadowColor:'blue',shadowOffset:1}}>
          <TouchableOpacity
            onLongPress={drag}

          >
            <MaterialIcons name="drag-handle" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            height:'85%',
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            color: "white",
            backgroundColor: isActive ? "blue" : item.backgroundColor,
          }}
        >
          <Text style={{ fontSize: 30,paddingRight:20 }}>{item.label}</Text>
        </View>
      </View>
    );
  };

  render()
  {
    console.log(this.state.data);
    return (
      <View style={{ flex: 1 }}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          onDragEnd={({ data }) => this.setState({ data })}
        />
      </View>
    );
  }
}

export default Draggable;
