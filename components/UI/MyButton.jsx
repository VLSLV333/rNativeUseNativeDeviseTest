import { Pressable, View, Text, StyleSheet } from 'react-native';

export default function MyButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
      onPress={onPress}
    >
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'green',
  },
  btnPressed: {
    backgroundColor: 'purple',
  },
});
