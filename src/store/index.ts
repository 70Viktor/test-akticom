import { configureStore } from '@reduxjs/toolkit'
import clientsReducer from './clientsSlice'

const store = configureStore({
	reducer: {
		clients: clientsReducer,
	},
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
