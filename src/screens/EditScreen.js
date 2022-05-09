import { View, Text, StyleSheet } from "react-native";

const EditScreen = ({navigation, route: {params}}) => {
  return (
    <View>
      <Text>to edit id: {params.id}</Text>
    </View>
  );
};

export default EditScreen;
