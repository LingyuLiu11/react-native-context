import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context as BlogContext } from "./BlogContext";
import { EvilIcons, AntDesign } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, addpost, deletepost } = useContext(BlogContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <View>
          <Text>Posts</Text>
        </View>
        
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "#f4511e", //Set Header color
      },
    });
  }, [navigation]);
  // console.log("posts " + blogPosts);
  return (
    <View>
      {/* <TouchableOpacity onPress={() => navigate('Create')}>
        <AntDesign name="pluscircleo" size={24} color="black" />
      </TouchableOpacity> */}
      <Button title=" Add Post " onPress={addpost}></Button>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.content}
                </Text>
                <TouchableOpacity onPress={() => deletepost(item.id)}>
                  <EvilIcons name="trash" style={styles.icon}></EvilIcons>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
