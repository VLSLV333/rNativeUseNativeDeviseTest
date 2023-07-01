import { Text, View, StyleSheet, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function PlaceItem({ title, photo, id }) {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate('ManageFavoritePlaces', { id });
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
      onPress={pressHandler}
    >
      <View>
        <Text>{photo}</Text>
        <Text>{title}</Text>
        <Text>And so on</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  pressed: {
    backgroundColor: 'yellow',
  },
});
