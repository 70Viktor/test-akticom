import { FC, useState } from 'react'
import classes from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import useClients from '../../hooks/useFilteredClients'
import { removeClientByID } from '../../store/clientsSlice'
import AppButton from '../UI/AppButton/AppButton'
import ClientItem from '../ClientItem/ClientItem'
import AppModal from '../UI/AppModal/AppModal'

const ClientsList: FC = () => {
	const [isVisible, setVisible] = useState(false)
	const [removingID, setRemovingID] = useState<string>('')
	const filteredClients = useClients()
	const clients = useSelector((state: RootState) => state.clients.clients)
	const isLoading = useSelector((state: RootState) => state.clients.isLoading)
	const dispatch = useDispatch<AppDispatch>()

	const confirmRemove = (id: string) => {
		setRemovingID(id)
		setVisible(true)
	}

	const remove = () => {
		setVisible(false)
		dispatch(removeClientByID(removingID))
	}

	const renderBody = (id: string) => {
		const fullName = filteredClients.find(
			(client) => client.id === id,
		)?.fullname

		return (
			<p>
				Вы уверены в том, что хотите удалить клиента{' '}
				<strong>{fullName}</strong>?
			</p>
		)
	}
	const renderActions = () => (
		<>
			<AppButton isAccent={true} onClick={() => remove()}>
				Удалить
			</AppButton>
			<AppButton onClick={() => setVisible(false)}>Отмена</AppButton>
		</>
	)

	if (isLoading) {
		return <p className={classes.message}>Клиенты загружаются...</p>
	}

	if (!clients.length) {
		return <p className={classes.message}>Клиентов нет</p>
	}

	return (
		<>
			<AppModal
				isVisible={isVisible}
				setVisible={setVisible}
				renderActions={() => renderActions()}
				renderBody={() => renderBody(removingID)}
			/>
			<div className={classes.clientsList}>
				{!!filteredClients.length &&
					filteredClients.map((client) => (
						<ClientItem
							key={client.id}
							client={client}
							onRemove={(id) => confirmRemove(id)}
						/>
					))}

				{!filteredClients.length && (
					<p className={classes.message}>Клиентов не найдено</p>
				)}
			</div>
		</>
	)
}

export default ClientsList
