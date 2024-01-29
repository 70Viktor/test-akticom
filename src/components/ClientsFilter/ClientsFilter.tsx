import { FC, useEffect, useState } from 'react'
import classes from './style.module.scss'
import { useDispatch } from 'react-redux'
import { typeFilterStatus } from '../../types'
import { AppDispatch } from '../../store'
import { setFilter } from '../../store/clientsSlice'
import useInput from '../../hooks/useInput'
import SearchInput from '../UI/SearchInput/SearchInput'
import AppSelect from '../UI/AppSelect/AppSelect'
import { selectOptions } from '../../static/selectOptions'

const ClientsFilter: FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { value: query, onChange: onChangeQuery } = useInput('')
	const [status, setStatus] = useState<typeFilterStatus>('')

	useEffect(() => {
		dispatch(setFilter({ status, query }))
	}, [dispatch, status, query])

	const onChangeSelect = (value: typeFilterStatus): void => {
		setStatus(value)
	}
	return (
		<form role="search" className={classes.filter}>
			<SearchInput value={query} onChange={(e) => onChangeQuery(e)} />
			<AppSelect
				value={status}
				placeholder="Статус не выбран"
				onChange={onChangeSelect}
				options={selectOptions}
			/>
		</form>
	)
}

export default ClientsFilter
