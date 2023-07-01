import { View, Text, StyleSheet, TextInput } from 'react-native';

import MyButton from '../components/UI/MyButton';

import { useSelector, useDispatch } from 'react-redux';

import { useState } from 'react';

import { editPlace, addNewPlace } from '../store/favoritePlacesSlice';

export default function ManageFavoritePlaces({ route, navigation }) {
  const selectedId = route?.params?.id;

  const dispatch = useDispatch();

  const thisFavoritePlace = useSelector(
    (state) => state.favoritePlacesSlice
  ).find((item) => item.id === selectedId);

  const [inputValues, setInputValues] = useState({
    title: thisFavoritePlace ? thisFavoritePlace.title : '',
    photo: thisFavoritePlace ? thisFavoritePlace.photo : '',
  });

  const inputChangeHandler = (which, value) => {
    if (which === 'title') {
      setInputValues((state) => ({ ...state, title: value }));
    } else if (which === 'photo') {
      setInputValues((state) => ({ ...state, photo: value }));
    }
  };

  const editHandler = () => {
    dispatch(editPlace({ ...inputValues, id: selectedId }));
    navigation.goBack();
  };

  const addHandler = () => {
    dispatch(addNewPlace({ ...inputValues, id: Math.random() }));
    navigation.goBack();
  };

  return (
    <View>
      <Text>Title Label</Text>
      <TextInput
        placeholder="type label!"
        value={inputValues.title}
        onChangeText={inputChangeHandler.bind(this, 'title')}
      />
      <Text>Photo label</Text>
      <TextInput
        placeholder="type photo!"
        value={inputValues.photo}
        onChangeText={inputChangeHandler.bind(this, 'photo')}
      />
      {selectedId && <MyButton onPress={editHandler}>Edit!</MyButton>}
      {!selectedId && <MyButton onPress={addHandler}>Add!</MyButton>}
    </View>
  );
}

const styles = StyleSheet.create({});
