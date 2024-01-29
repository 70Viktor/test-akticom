import { ChangeEvent, FC } from 'react'
import classes from './style.module.scss'

interface AppInputProps {
	type: 'text' | 'number' | 'email' | 'password'
	label: string
	value: string | number
	placeholder?: string
	error: boolean
	disabled?: boolean
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const AppInput: FC<AppInputProps> = ({
	type,
	label,
	value,
	placeholder,
	error,
	disabled,
	onChange,
}) => {
	return (
		<div className={classes.wrapper}>
			<label className={classes.label} htmlFor={label}>
				{label}
			</label>
			<input
				className={classes.input}
				type={type}
				id={label}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				disabled={disabled}
			/>
			{error && <p className={classes.error}>Это обязательное поле</p>}
		</div>
	)
}

export default AppInput
