import { ChangeEvent, FC } from 'react'
import classes from './style.module.scss'

interface searchInputProps {
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const SearchInput: FC<searchInputProps> = ({ value, onChange }) => {
	return (
		<input
			className={classes.search}
			type="search"
			placeholder="Найти..."
			onChange={onChange}
			value={value}
		/>
	)
}

export default SearchInput
