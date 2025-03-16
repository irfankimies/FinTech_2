import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import StartPage from "@/components/StartPage";



const logInPage = () => {
  return (
    <View style={styles.container}>
      <StartPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default logInPage;
