import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import classes from './style.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { IClient } from '../../types'
import getFormattedDate from '../../utlis/getFormattedDate'

type ClientPageParams = {
	id: string
}
const ClientPage: FC = () => {
	const { id } = useParams() as ClientPageParams
	const clients = useSelector((state: RootState) => state.clients.clients)
	const [client, setClient] = useState<IClient | null>(null)

	useEffect(() => {
		const [client] = clients.filter((client) => client.id === id)
		setClient(client)
	}, [id, clients])

	const renderPageContent = () => {
		if (!client) {
			return <p>Клиент загружается</p>
		} else {
			return (
				<>
					<h1 className={classes.title}>
						Детальная страница клиента{' '}
						<strong>{client?.fullname}</strong>
					</h1>
					<ul className={classes.details}>
						<li>
							Дата создания аккаунта:{' '}
							<strong>
								{getFormattedDate(client?.created_at)}
							</strong>
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
				</>
			)
		}
	}

	return <div className={classes.clientPage}>{renderPageContent()}</div>
}

export default ClientPage
