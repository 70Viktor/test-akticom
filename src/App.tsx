import React, { FC, useEffect } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter } from 'react-router-dom'
import classes from './App.module.scss'
import AppRouter from './components/AppRouter'
import { useDispatch } from 'react-redux'
import ClientsService from './API/ClientsService'
import { setClients, setLoading } from './store/clientsSlice'
import { AppDispatch } from './store'

const App: FC = () => {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		const fetchClients = async () => {
			const clients = await ClientsService.getAll()
			dispatch(setClients(clients))
			dispatch(setLoading(false))
		}

		fetchClients()
	}, [])

	return (
		<BrowserRouter>
			<div className={classes.appLayout}>
				<Sidebar />

				<div className={classes.appContent}>
					<AppRouter />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
