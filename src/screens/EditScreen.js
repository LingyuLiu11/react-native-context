import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState, useContext } from "react";
import { Context as BlogContext } from "./BlogContext";
import BlogForm from "../components/BlogFrom";

const EditScreen = ({ navigation, route: { params } }) => {
  const { state } = useContext(BlogContext);

  const post = state.find((post) => post.id === params.id);

  return (
    <BlogForm onSubmit={()=> {
        
    } }/>
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

export default EditScreen;
