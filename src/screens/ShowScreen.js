import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { Context as BlogContext } from "./BlogContext";

const ShowScreen = ({ route: { params } }) => {
  const { state } = useContext(BlogContext);
  const {id} = params;
  const post = state.find((post) => post.id === params.id);

  return (
    <View>
      <Text>show screen</Text>
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;