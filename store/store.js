import { configureStore } from '@reduxjs/toolkit';

import favoritePlacesSlice from './favoritePlacesSlice';

export default configureStore({
  reducer: {
    favoritePlacesSlice,
  },
});
