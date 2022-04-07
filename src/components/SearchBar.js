import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
//if you want to use expo vector icons, just remember to import the name of the library they are taken from
//for example : Fontawesome, Feather, Entypo, etc.
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      {/*how to call expo vector icons that you want to use*/}
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        //onEndEditing is a function that is called when the user is done editing the text input
        onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
        //SHORTENING THE FUNCTION IF THE VALUE IS ALREADY MET THE REQUIREMENTS
        onChangeText={onTermChange}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "red",
    height: 50,
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
  },
});

export default SearchBar;
