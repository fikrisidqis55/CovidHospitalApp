import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HospitalDetail = ({ route, navigation }) => {
  const { hospital } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{hospital.name}</Text>
      <Text style={styles.address}>{hospital.address}</Text>
      <Text style={styles.phone}>{hospital.phone}</Text>
      <Button
        title="View Map"
        color="#43A047"
        onPress={() =>
          navigation.navigate("ProvinceMap", { province: hospital.province })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FAFAFA",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1E88E5",
    fontFamily: "Roboto_500Medium",
  },
  address: {
    fontSize: 16,
    marginBottom: 10,
    color: "#757575",
    fontFamily: "Roboto_400Regular",
  },
  phone: {
    fontSize: 16,
    marginBottom: 20,
    color: "#212121",
    fontFamily: "Roboto_400Regular",
  },
});

export default HospitalDetail;
