import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import {Context as BlogContext} from "./BlogContext";
import { EvilIcons } from '@expo/vector-icons';

const IndexScreen = () => {
  const {state, addpost} = useContext(BlogContext);
  // console.log("posts " + blogPosts);
  return (
    <View>
      <Button title=" Add Post " onPress={addpost}></Button>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (<View style={styles.row}>
            <Text style = {styles.title}>{item.title} - {item.id}</Text>
            <EvilIcons name = "trash" style = {styles.icon}></EvilIcons>
            </View>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth:1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
