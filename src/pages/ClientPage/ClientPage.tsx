import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import classes from './style.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { IClient } from '../../types'
import getFormattedDate from '../../utlis/getFormattedDate'
import { NavLink } from 'react-router-dom'
import { routerPaths } from '../../router'

type ClientPageParams = {
	id: string
}
const ClientPage: FC = () => {
	const { id } = useParams() as ClientPageParams
	const clients = useSelector((state: RootState) => state.clients.clients)
	const isLoading = useSelector((state: RootState) => state.clients.isLoading)
	const [client, setClient] = useState<IClient | null>(null)
	let pageContent: React.ReactNode

	useEffect(() => {
		const [client] = clients.filter((client) => client.id === id)
		setClient(client)
	}, [id, clients])

	if (isLoading) {
		pageContent = <p>Клиент загружается...</p>
	} else if (!client) {
		pageContent = (
			<>
				<p>Нет такого клиента</p>
				<NavLink to={routerPaths.main}>Вернуться на главную</NavLink>
			</>
		)
	} else {
		pageContent = (
			<ul className={classes.details}>
				<li>
					Дата создания аккаунта:{' '}
					<strong>{getFormattedDate(client?.created_at)}</strong>
				</li>
				<li>
					Текущий статус: <strong>{client?.status}</strong>
				</li>
				<li>
					ID: <strong>{client?.id}</strong>
				</li>
				<li>
					Город: <strong>{client?.region}</strong>
				</li>
				<li>
					Телефон: <strong>{client?.phone}</strong>
				</li>
			</ul>
		)
	}

	return (
		<div className={classes.clientPage}>
			<h1 className={classes.title}>
				Детальная страница клиента{' '}
				<strong>{client?.fullname || '...'}</strong>
			</h1>
			{pageContent}
		</div>
	)
}

export default ClientPage
