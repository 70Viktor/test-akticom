import { FC, useState } from 'react'
import classes from './style.module.scss'
import { NavLink } from 'react-router-dom'
import { sidebarLinks } from '../../static/sidebarLinks'

const Sidebar: FC = () => {
	const [isOpen, setOpen] = useState(false)

	const rootClasses = [classes.sidebar]

	if (isOpen) rootClasses.push(classes.open)

	return (
		<>
			<button
				className={classes.sidebarButtonOpen}
				onClick={() => setOpen(true)}
			>
				Open sidebar
			</button>
			<div className={rootClasses.join(' ')}>
				<button
					className={classes.sidebarButtonClose}
					onClick={() => setOpen(false)}
				>
					Close sidebar
				</button>
				{sidebarLinks.map((link) => (
					<NavLink
						onClick={() => setOpen(false)}
						key={link.label}
						to={link.href}
						className={classes.sidebarLink}
					>
						{link.label}
					</NavLink>
				))}
			</div>
		</>
	)
}

export default Sidebar
