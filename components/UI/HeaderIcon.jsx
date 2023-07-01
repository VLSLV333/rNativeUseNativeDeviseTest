import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Pressable } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function HeaderIcon({ name, color, size, onPress }) {
  const navigation = useNavigation()

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={name} color={color} size={size} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 7,
  },
  pressed: {
    opacity: 0.7,
  },
});
