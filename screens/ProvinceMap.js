import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const ProvinceMap = ({ route }) => {
  const { province } = route.params;

  // Contoh koordinat provinsi, perlu diupdate sesuai dengan data provinsi sebenarnya
  const provinceCoordinates = {
    Aceh: { latitude: 5.54829, longitude: 95.323753 },
    Bali: { latitude: -8.409518, longitude: 115.188919 },
    // Tambahkan koordinat lainnya di sini
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
