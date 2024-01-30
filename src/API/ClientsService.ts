import axios from 'axios'
import { IClientInitial, typeStatus } from '../types'
import { clientsFallback } from '../static/clientsFallback'

type GetAllResponse = {
	data: IClientInitial[]
}

enum clientsUrl {
	getAll = 'http://localhost:3001/server-clients',
}
export default class ClientsService {
	static async getAll() {
		let response: GetAllResponse

		try {
			response = await axios.get(clientsUrl.getAll)
		} catch {
			// if JSON-server not running
			response = { data: clientsFallback }
		}

		return response.data.map((clientInitial) => {
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
