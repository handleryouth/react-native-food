import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  /*
        navigation getParam is a function that will get the parameter/props 
        from the navigation object that you passed before
    */
  const resultId = navigation.getParam("id");

  const getResult = useCallback(async (id) => {
    await yelp.get(`/${id}`).then((response) => {
      setResult(response.data);
    });
  }, []);

  useEffect(() => {
    getResult(resultId);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
  },
});

export default ResultsShowScreen;
