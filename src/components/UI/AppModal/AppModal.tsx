import React, { FC } from 'react'
import classes from './style.module.scss'
import { createPortal } from 'react-dom'

interface AppModalProps {
	isVisible: boolean
	setVisible: (value: boolean) => void
	renderBody?: () => React.ReactNode
	renderActions?: () => React.ReactNode
}
const AppModal: FC<AppModalProps> = ({
	isVisible,
	setVisible,
	renderBody,
	renderActions,
}) => {
	const rootClasses = [classes.appModal]

	if (isVisible) {
		rootClasses.push(classes.active)
	}

	return createPortal(
		<div
			className={rootClasses.join(' ')}
			onClick={() => setVisible(false)}
		>
			<form
				className={classes.appModalContent}
				onClick={(e) => e.stopPropagation()}
				onSubmit={(e) => e.preventDefault()}
			>
				{renderBody && (
					<div className={classes.appModalBody}>
						{renderBody && renderBody()}
					</div>
				)}

				{renderActions && (
					<div className={classes.appModalActions}>
						{renderActions()}
					</div>
				)}
			</form>
		</div>,
		document.body,
	)
}

export default AppModal
