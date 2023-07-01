import { Text, StyleSheet, View } from 'react-native';

import { useSelector } from 'react-redux';

import FavoritePlacesList from '../components/placesItem/FavoritePlacesList';

export default function AllPlacesScreen() {
  const allFavoritePlacesArray = useSelector(
    (state) => state.favoritePlacesSlice
  );

  if (allFavoritePlacesArray.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text>No places added yet - start adding:)</Text>
      </View>
    );
  }

  return <FavoritePlacesList arr={allFavoritePlacesArray} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
