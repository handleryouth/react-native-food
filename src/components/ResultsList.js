import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  //with withNavigation, you can access navigation object in the component without passing it as a prop

  if (!results.length) {
    return null;
  }

  /*
  terakhir modul 11 udah selesai.
  langsung ke modul 12

  */

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        // to hide the horizontal scroll bar
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            //second argument in navigation.navigate is what props you want to pass to the next screen
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", {
                  id: item.id,
                })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});

/*
withNavigation is a higher order component that takes a component and returns a new component
withNavigation allows us to pass navigation prop to the component just like useContext but for navigation

*/

export default withNavigation(ResultsList);
