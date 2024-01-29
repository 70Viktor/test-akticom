export type typeStatusInitial = 'Активен' | 'Неактивен' | 'Приостановлен'
export type typeStatus = 'active' | 'inactive' | 'paused'
export type typeFilterStatus = typeStatus | ''

export interface IClientInitial {
	id: string
	fullname: string
	created_at: string
	phone: string
	region: string
	status: typeStatusInitial
}

export interface IClient extends IClientInitial {
	statusValue: typeStatus
}

export interface IOption {
	value: string
	name: typeStatusInitial
}

export interface IFilter {
	query: string
	status: typeFilterStatus
}
