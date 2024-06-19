import { configureStore } from '@reduxjs/toolkit'
import mafiaReducer from './reducers/mafiaReducer'

const store = configureStore({
  reducer: mafiaReducer,
})

export type RootState = ReturnType<typeof store.getState>

export default store
