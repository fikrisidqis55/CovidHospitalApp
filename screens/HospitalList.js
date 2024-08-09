import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import axios from "axios";

const HospitalList = ({ navigation }) => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    axios
      .get("https://dekontaminasi.com/api/id/covid19/hospitals")
      .then((response) => setHospitals(response.data))
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("HospitalDetail", { hospital: item })}
    >
      <Image
        source={{ uri: "https://via.placeholder.com/60" }}
        style={styles.thumbnail}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.region}>{item.region}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={hospitals}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  card: {
    flexDirection: "row",
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  info: {
    justifyContent: "center",
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
    fontFamily: "Roboto_500Medium",
  },
  address: {
    fontSize: 14,
    color: "#757575",
    marginTop: 5,
    fontFamily: "Roboto_400Regular",
  },
  region: {
    fontSize: 12,
    color: "#9E9E9E",
    marginTop: 5,
    fontFamily: "Roboto_400Regular",
  },
});

export default HospitalList;
