import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'London',
    photo: 'string lul1',
  },
  {
    id: 2,
    title: 'New York',
    photo: 'string kek2',
  },
  {
    id: 3,
    title: 'Kyiv',
    photo: 'string lul3',
  },
];

const favoritePlacesSlice = createSlice({
  initialState,
  name: 'favoritePlaces',
  reducers: {
    addNewPlace: (state, { payload }) => {
      state.unshift({ ...payload });
    },
    editPlace: (state, { payload }) => {
      const indexOfGivenPlace = state.findIndex(
        (place) => place.id === +payload.id
      );
      state.splice(indexOfGivenPlace, 1, payload);
    },
  },
});

export default favoritePlacesSlice.reducer;

export const { addNewPlace, editPlace } = favoritePlacesSlice.actions;
