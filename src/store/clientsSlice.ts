import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IClient, IFilter } from '../types'

export interface ClientsState {
	clients: IClient[]
	filter: IFilter
}

const initialState: ClientsState = {
	clients: [],
	filter: { query: '', status: '' },
}

export const clientsSlice = createSlice({
	name: 'clients',
	initialState,
	reducers: {
		setClients: (state, action: PayloadAction<IClient[]>) => {
			state.clients = action.payload
		},
		pushClient: (state, action: PayloadAction<IClient>) => {
			state.clients.push(action.payload)
		},
		removeClientByID: (state, action: PayloadAction<string>) => {
			state.clients = state.clients.filter(
				(client) => client.id !== action.payload,
			)
		},
		setFilter: (state, action: PayloadAction<IFilter>) => {
			state.filter = action.payload
		},
	},
})

export const { setClients, pushClient, removeClientByID, setFilter } =
	clientsSlice.actions

export default clientsSlice.reducer
