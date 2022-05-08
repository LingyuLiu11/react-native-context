import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "./BlogContext";

const IndexScreen = () => {
  const {data, addpost} = useContext(BlogContext);
  // console.log("posts " + blogPosts);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title=" Add Post " onPress={addpost}></Button>
      <FlatList
        data={data}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
