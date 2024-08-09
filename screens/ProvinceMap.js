import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const ProvinceMap = ({ route }) => {
  const { province } = route.params;

  const provinceCoordinates = {
    Aceh: { latitude: 5.54829, longitude: 95.323753 },
    Bali: { latitude: -8.409518, longitude: 115.188919 },
    Banten: { latitude: -6.1202, longitude: 106.1502 },
    Bengkulu: { latitude: -3.7936, longitude: 102.2598 },
    Gorontalo: { latitude: 0.6996, longitude: 122.4467 },
    "DKI Jakarta": { latitude: -6.2088, longitude: 106.8456 },
    Jambi: { latitude: -1.4852, longitude: 102.4381 },
    "Jawa Barat": { latitude: -6.9175, longitude: 107.6191 },
    "Jawa Tengah": { latitude: -7.150975, longitude: 110.140259 },
    "Jawa Timur": { latitude: -7.250445, longitude: 112.768845 },
    "Kalimantan Barat": { latitude: -0.064582, longitude: 109.337937 },
    "Kalimantan Selatan": { latitude: -3.092641, longitude: 115.283759 },
    "Kalimantan Tengah": { latitude: -1.681487, longitude: 113.382355 },
    "Kalimantan Timur": { latitude: 0.538654, longitude: 116.419389 },
    "Kalimantan Utara": { latitude: 3.3262, longitude: 117.5785 },
    "Kepulauan Bangka Belitung": { latitude: -2.74105, longitude: 106.44059 },
    "Kepulauan Riau": { latitude: 3.9455, longitude: 108.1429 },
    Lampung: { latitude: -5.45, longitude: 105.2667 },
    Maluku: { latitude: -3.2385, longitude: 130.1453 },
    "Maluku Utara": { latitude: 1.570999, longitude: 127.808177 },
    "Nusa Tenggara Barat": { latitude: -8.65, longitude: 117.5 },
    "Nusa Tenggara Timur": { latitude: -8.6574, longitude: 121.0794 },
    Papua: { latitude: -4.269928, longitude: 138.080353 },
    "Papua Barat": { latitude: -0.8629, longitude: 134.064 },
    Riau: { latitude: 0.2933, longitude: 101.7068 },
    "Sulawesi Barat": { latitude: -2.7524, longitude: 119.2424 },
    "Sulawesi Selatan": { latitude: -5.1354, longitude: 119.4238 },
    "Sulawesi Tengah": { latitude: -0.8988, longitude: 119.8707 },
    "Sulawesi Tenggara": { latitude: -4.1296, longitude: 122.0162 },
    "Sulawesi Utara": { latitude: 1.4935, longitude: 124.891 },
    "Sumatera Barat": { latitude: -0.4371, longitude: 100.35 },
    "Sumatera Selatan": { latitude: -3.3194, longitude: 104.9146 },
    "Sumatera Utara": { latitude: 3.5852, longitude: 98.6756 },
    "DI Yogyakarta": { latitude: -7.7956, longitude: 110.3695 },
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: provinceCoordinates[province]?.latitude || -2.5,
          longitude: provinceCoordinates[province]?.longitude || 118.0,
          latitudeDelta: 2,
          longitudeDelta: 2,
        }}
      >
        {provinceCoordinates[province] && (
          <Marker coordinate={provinceCoordinates[province]} title={province} />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default ProvinceMap;
