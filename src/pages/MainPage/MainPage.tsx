import React, { FC } from 'react'
import classes from './style.module.scss'
import ClientsFilter from '../../components/ClientsFilter/ClientsFilter'
import ClientsList from '../../components/ClientsList/ClientsList'
import ClientForm from '../../components/ClientForm/ClientForm'

const MainPage: FC = () => {
	return (
		<div className={classes.clientsPage}>
			<ClientsFilter />
			<div className={classes.clientsPageList}>
				<ClientsList />
			</div>
			<ClientForm />
		</div>
	)
}

export default MainPage
