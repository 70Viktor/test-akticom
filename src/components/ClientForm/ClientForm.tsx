import { FC, useState } from 'react'
import classes from './style.module.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { IClient } from '../../types'
import { pushClient } from '../../store/clientsSlice'
import AppInput from '../UI/AppInput/AppInput'
import AppButton from '../UI/AppButton/AppButton'
import AppModal from '../UI/AppModal/AppModal'

interface IClientForm {
	fullname: string
	region: string
	phone: string
}

const initialClient: IClientForm = {
	fullname: '',
	region: '',
	phone: '',
}
const ClientForm: FC = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [client, setClient] = useState<IClientForm>(initialClient)
	const [showErrors, setShowErrors] = useState(false)

	const dispatch = useDispatch<AppDispatch>()

	const addClient = () => {
		const newClient: IClient = {
			...client,
			status: 'Активен',
			statusValue: 'active',
			id: String(Date.now()),
			created_at: String(new Date()),
		}

		dispatch(pushClient(newClient))
	}

	const clickButtonAddHandler = () => {
		let hasEmptyValue = false

		for (const value of Object.values(client)) {
			if (value === '') hasEmptyValue = true
		}

		if (hasEmptyValue) {
			setShowErrors(true)
			return
		}

		addClient()
		setIsVisible(false)
		setClient(initialClient)
		setShowErrors(false)
	}

	const clickButtonResetHandler = () => {
		setClient(initialClient)
		setShowErrors(false)
	}
	const renderBody = () => (
		<>
			<AppInput
				type="text"
				label="ФИО *"
				value={client.fullname}
				error={showErrors && !client.fullname}
				onChange={(e) =>
					setClient({ ...client, fullname: e.target.value })
				}
			/>

			<AppInput
				type="text"
				label="Город *"
				value={client.region}
				error={showErrors && !client.region}
				onChange={(e) =>
					setClient({ ...client, region: e.target.value })
				}
			/>

			<AppInput
				type="text"
				label="Номер *"
				value={client.phone}
				error={showErrors && !client.phone}
				onChange={(e) =>
					setClient({ ...client, phone: e.target.value })
				}
			/>
		</>
	)

	const renderActions = () => (
		<>
			<AppButton
				type="submit"
				isAccent={true}
				onClick={() => clickButtonAddHandler()}
			>
				Добавить
			</AppButton>
			<AppButton type="reset" onClick={() => clickButtonResetHandler()}>
				Очистить
			</AppButton>
		</>
	)
	return (
		<div className={classes.clientFormTrigger}>
			<AppButton isAccent={true} onClick={() => setIsVisible(true)}>
				Добавить клиента
			</AppButton>
			<AppModal
				isVisible={isVisible}
				setVisible={setIsVisible}
				renderBody={() => renderBody()}
				renderActions={() => renderActions()}
			></AppModal>
		</div>
	)
}

export default ClientForm
