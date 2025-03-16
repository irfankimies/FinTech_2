import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import transactions from "@/components/data";
import TransactionHistory from "@/components/TransactionHistory";
import { useAuth } from "@/context/context";

const HomeScreen = () => {
  const { isAuthenticated, onAuthenticate, setIsAuthenticated } = useAuth();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#d10000" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Transaction History</Text>
        <TouchableOpacity>
          <Text style={styles.tapToView}>Tab to view</Text>
        </TouchableOpacity>
      </View>
      <TransactionHistory />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tapToView: {
    color: "red",
    fontWeight: "600",
  },
});

export default HomeScreen;
