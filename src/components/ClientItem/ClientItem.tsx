import { FC, useEffect, useState } from 'react'
import { IClient } from '../../types'
import classes from './style.module.scss'
import { useNavigate } from 'react-router-dom'
import AppButton from '../UI/AppButton/AppButton'
import { routerPaths } from '../../router'
import getFormattedDate from '../../utlis/getFormattedDate'

interface ClientItemProps {
	client: IClient
	onRemove: (id: string) => void
}

const ClientItem: FC<ClientItemProps> = ({ client, onRemove }) => {
	const [statusValueClass, setStatusValueClass] = useState(classes.default)
	const formattedCreatedAt = getFormattedDate(client.created_at)
	const navigate = useNavigate()

	useEffect(() => {
		const { statusValue } = client
		setStatusValueClass(classes[statusValue])
	}, [client])

	const goToClientPage = () => {
		const path = routerPaths.client.replace(':id', String(client.id))
		navigate(path)
	}

	return (
		<article className={classes.clientCard}>
			<div className={classes.clientHead}>
				<h4 className={classes.clientFullName}>
					<span
						className={[
							classes.clientStatus,
							statusValueClass,
						].join(' ')}
					></span>
					{client.fullname}
				</h4>
				<div className={classes.clientActions}>
					<div className={classes.clientActionsItem}>
						<AppButton onClick={() => goToClientPage()}>
							Страница клиента
						</AppButton>
					</div>

					<div className={classes.clientActionsItem}>
						<AppButton>Изменить</AppButton>
					</div>

					<div
						onClick={() => onRemove(client.id)}
						className={classes.clientActionsItem}
					>
						<AppButton>Удалить</AppButton>
					</div>
				</div>
			</div>
			<ul className={classes.clientDetails}>
				<li>id: {client.id}</li>
				<li>region: {client.region}</li>
				<li>phone: {client.phone}</li>
				<li>created at: {formattedCreatedAt}</li>
			</ul>
		</article>
	)
}

export default ClientItem
