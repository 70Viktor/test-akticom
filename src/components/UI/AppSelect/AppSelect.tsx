import { FC } from 'react'
import { IOption, typeFilterStatus } from '../../../types'
import classes from './style.module.scss'

interface IAppSelect {
	value: string
	placeholder: string
	onChange: (value: typeFilterStatus) => void
	options: IOption[]
}

const AppSelect: FC<IAppSelect> = ({
	value,
	placeholder,
	onChange,
	options,
}) => {
	return (
		<select
			className={classes.appSelect}
			value={value}
			onChange={(event) =>
				onChange(event.target.value as typeFilterStatus)
			}
		>
			<option value="">{placeholder}</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	)
}

export default AppSelect
