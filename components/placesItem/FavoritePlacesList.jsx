import { FlatList } from 'react-native';

import PlaceItem from './PlaceItem';

function renderOutput({ item }) {
  return <PlaceItem photo={item.photo} title={item.title} id={item.id}/>;
}

export default function FavoritePlacesList({ arr }) {
  return <FlatList data={arr} renderItem={renderOutput} />;
}
