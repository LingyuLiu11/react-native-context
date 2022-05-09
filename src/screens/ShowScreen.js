import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Context as BlogContext } from "./BlogContext";
import { AntDesign } from '@expo/vector-icons';

const ShowScreen = ({ navigation, route: {params} }) => {
  const { state } = useContext(BlogContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <View>
          <Text>Posts</Text>
        </View>
        
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "#f4511e", //Set Header color
      },
    });
  }, [navigation]);
  
  const post = state.find((post) => post.id === params.id);

  return (
    <View>
      <Text>show screen</Text>
      <Text>{post.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
