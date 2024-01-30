import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IClient, IFilter } from '../types'

export interface ClientsState {
	clients: IClient[]
	filter: IFilter
	isLoading: boolean
}

const initialState: ClientsState = {
	clients: [],
	filter: { query: '', status: '' },
	isLoading: true,
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
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},
	},
})

export const {
	setClients,
	pushClient,
	removeClientByID,
	setFilter,
	setLoading,
} = clientsSlice.actions

export default clientsSlice.reducer
