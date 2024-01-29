import axios from 'axios'
import { IClientInitial, typeStatus } from '../types'

type GetAllResponse = {
	data: IClientInitial[]
}

enum clientsUrl {
	getAll = 'http://localhost:3001/server-clients',
}
export default class ClientsService {
	static async getAll() {
		const clients: GetAllResponse = await axios.get(clientsUrl.getAll)

		return clients.data.map((clientInitial) => {
			let statusValue: typeStatus
			switch (clientInitial.status) {
				case 'Активен': {
					statusValue = 'active'
					break
				}
				case 'Приостановлен': {
					statusValue = 'paused'
					break
				}
				case 'Неактивен': {
					statusValue = 'inactive'
					break
				}
			}

			return { ...clientInitial, statusValue }
		})
	}
}
