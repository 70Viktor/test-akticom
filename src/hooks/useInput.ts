import { ChangeEvent, useState } from 'react'

export interface IUseInput {
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export default function useInput(initialValue: string): IUseInput {
	const [value, setValue] = useState(initialValue)

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	return {
		value,
		onChange,
	}
}
