import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { IClient, typeFilterStatus } from '../types'

export const useSearchedClients = (
	clients: IClient[],
	query: string,
): IClient[] => {
	return clients.filter((client) =>
		client.fullname.toLowerCase().includes(query.toLowerCase()),
	)
}

export const useFilteredByStatusClients = (
	clients: IClient[],
	status: typeFilterStatus,
): IClient[] => {
	return clients.filter((client) => !status || client.statusValue === status)
}

export default function useClients() {
	const clients = useSelector((state: RootState) => state.clients.clients)
	const { query, status } = useSelector(
		(state: RootState) => state.clients.filter,
	)

	const searchedClients = useSearchedClients(clients, query)
	const filteredClients = useFilteredByStatusClients(searchedClients, status)
	return filteredClients
}
