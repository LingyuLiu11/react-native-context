import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState, useContext } from "react";

const BlogForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);

  const [content, setContent] = useState(initialValues.content);
  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      ></TextInput>
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      ></TextInput>

      <Button title="Save post" onPress={() => onSubmit(title, content)}></Button>
    </View>
  );
};

BlogForm.defaultProps = {
    initialValues: {
        title: "",
        content: ""
    }
}

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
export default BlogForm;
