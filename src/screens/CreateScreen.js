import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useContext, useState } from "react";
import { Context as BlogContext } from "./BlogContext";
import { NavigationContainer } from "@react-navigation/native";
import BlogForm from "../components/BlogFrom";

const CreateScreen = ({ navigation }) => {

  const { addpost } = useContext(BlogContext);

  return (
      <BlogForm/>
    // <View>
    //   <Text style={styles.label}>Title</Text>
    //   <TextInput
    //     style={styles.input}
    //     value={title}
    //     onChangeText={(text) => setTitle(text)}
    //   ></TextInput>
    //   <Text style={styles.label}>Content</Text>
    //   <TextInput
    //     style={styles.input}
    //     value={content}
    //     onChangeText={(text) => setContent(text)}
    //   ></TextInput>

    //   <Button
    //     title="Add post"
    //     onPress={() => {
    //       addpost(title, content, () => {
    //           navigation.navigate('Details');
    //       });
    //     }}
    //   ></Button>
    // </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 5,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default CreateScreen;
