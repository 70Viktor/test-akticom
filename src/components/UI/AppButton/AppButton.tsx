import React, { FC } from 'react'
import classes from './style.module.scss'

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	isAccent?: boolean
}
const AppButton: FC<AppButtonProps> = ({ children, isAccent, ...props }) => {
	const rootClasses = [classes.appButton]

	if (isAccent) {
		rootClasses.push(classes.accent)
	}

	return (
		<button className={rootClasses.join(' ')} {...props}>
			{children}
		</button>
	)
}

export default AppButton
