import {
	JButton,
	JInput,
	JNumberAccounting,
} from '@/components/TestFinanceTrackerImport/components/JForm'
import s from './NewTransactionForm.module.scss'
import { JDatePicker } from '@/components/TestFinanceTrackerImport/components/JForm/JDatePicker/JDatePicker'
import { RefObject, useCallback, useEffect, useRef, useState } from 'react'
import { JDropdown } from '@/components/TestFinanceTrackerImport/components/JForm/JDropdown/JDropdown'
import { DropdownOptions } from '../../../TransactionManager'
import { MultiItemGrid } from './MultiItemGrid'
import {
	delay,
	isStandardError,
	promptError,
	setKeyListenerContext,
	IsolatedKeyListener,
	addIsolatedKeyListeners,
	removeIsolatedKeyListeners,
	getCurDateString,
	createFocusLoop,
} from '@/components/TestFinanceTrackerImport/utils'
import { insertTransactionAndItems } from '@/components/TestFinanceTrackerImport/database'
import { JCheckbox } from '@/components/TestFinanceTrackerImport/components/JForm/JCheckbox/JCheckbox'

export interface TransactionFormData {
	name: string
	date: string
	items: {
		name: string
		amount: string
		category_id: string
		account_id: string
	}[]
}

interface NewTransactionFormProps {
	defaultDate?: string
	dropdownOptions: DropdownOptions
	forceClosePopup: () => void
	setRefreshRequired: () => void
}

type Type = 'transaction' | 'item'
type Key = 'name' | 'date' | 'amount' | 'category_id' | 'account_id'

export function NewTransactionForm({
	defaultDate,
	dropdownOptions,
	forceClosePopup,
	setRefreshRequired,
}: NewTransactionFormProps) {
	if (defaultDate === undefined) {
		defaultDate = getCurDateString()
	}
	const [formData, setFormData] = useState<TransactionFormData>({
		name: '',
		date: defaultDate,
		items: [{ name: '', amount: '', category_id: '', account_id: '' }],
	})
	const firstFocusRef = useRef<HTMLElement | null>(null)
	const lastFocusRef = useRef<HTMLElement | null>(null)
	const [isMultiItems, setIsMultiItems] = useState(false)
	const [missingItems, setMissingItems] = useState<string[]>([])
	const [submitting, setSubmitting] = useState(false)
	const [creationFinished, setCreationFinished] = useState(false)

	useEffect(() => {
		if (!creationFinished) {
			firstFocusRef.current!.focus()
		}
	}, [creationFinished])

	useEffect(() => {
		if (firstFocusRef.current && lastFocusRef.current) {
			createFocusLoop(firstFocusRef.current, lastFocusRef.current)
		}
	})

	useEffect(() => {
		setKeyListenerContext('NewTransactionForm')
		firstFocusRef.current!.focus()

		const listeners: IsolatedKeyListener[] = [
			{
				context: 'NewTransactionForm',
				char: 'S',
				ctrlKey: true,
				shiftKey: false,
				run: () => {
					if (!creationFinished) {
						const saveButton = lastFocusRef.current! as HTMLButtonElement

						const clickEvent = new Event('click', {
							bubbles: true,
							cancelable: true,
						})

						saveButton.dispatchEvent(clickEvent)
					}
				},
				preventDefault: true,
			},
		]
		addIsolatedKeyListeners(listeners)

		return () => {
			removeIsolatedKeyListeners(listeners)
		}
	}, [])

	// check if form is ready to submit
	useEffect(() => {
		const updatedMissingItems = []
		if (formData.name.trim() === '') {
			updatedMissingItems.push('transaction-name')
		}
		if (formData.date.trim() === '') {
			updatedMissingItems.push('transaction-date')
		}
		if (!isMultiItems) {
			if (formData.items[0].amount === '') {
				updatedMissingItems.push(`item-amount-0`)
			}
		} else {
			formData.items.forEach((item, index) => {
				if (item.name.trim() === '') {
					updatedMissingItems.push(`item-name-${index}`)
				}
				if (item.amount === '') {
					updatedMissingItems.push(`item-amount-${index}`)
				}
			})
		}
		setMissingItems(updatedMissingItems)
	}, [formData, isMultiItems])

	const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> =
		useCallback((e) => {
			const [type, key, item_index] = e.target.id.split('-') as [Type, Key, string?]
			const val = e.target.value
			if (key === 'amount') {
				const actInput = e.currentTarget
				const actFormatted = actInput.parentElement!.childNodes[2] as HTMLDivElement
				actInput.classList.remove(s.error)
				actFormatted.classList.remove(s.error)
			} else {
				e.currentTarget.classList.remove(s.error)
			}

			if (type === 'transaction') {
				if (key === 'name' || key === 'date') {
					setFormData((prev) => {
						const clone = structuredClone(prev)
						clone[key] = val
						return clone
					})
				}
			} else if (
				type === 'item' &&
				item_index !== undefined &&
				!isNaN(parseInt(item_index))
			) {
				if (
					key === 'name' ||
					key === 'amount' ||
					key === 'account_id' ||
					key === 'category_id'
				) {
					setFormData((prev) => {
						const clone = structuredClone(prev)
						clone.items[parseInt(item_index)][key] = val
						return clone
					})
				}
			}
		}, [])

	const handleSubmit = async () => {
		if (!submitting && !creationFinished) {
			if (missingItems.length !== 0) {
				const createButtonNode = lastFocusRef.current!

				createButtonNode.classList.add(s.error_shake, s.error)
				missingItems.forEach((id) => {
					const key = id.split('-')[1] as Key
					if (key === 'amount') {
						const actInput = document.getElementById(id) as HTMLInputElement
						const actFormatted = actInput.parentElement!
							.childNodes[2] as HTMLDivElement
						actInput.classList.add(s.error_shake, s.error)
						actFormatted.classList.add(s.error_shake, s.error)
					} else {
						document.getElementById(id)!.classList.add(s.error_shake, s.error)
					}
				})

				delay(300).then(() => {
					missingItems.forEach((id) => {
						const key = id.split('-')[1] as Key
						if (key === 'amount') {
							const actInput = document.getElementById(id) as HTMLInputElement
							const actFormatted = actInput.parentElement!
								.childNodes[2] as HTMLDivElement
							actInput.classList.remove(s.error_shake)
							actFormatted.classList.remove(s.error_shake)
						} else {
							document.getElementById(id)!.classList.remove(s.error_shake)
						}
					})
					createButtonNode.classList.remove(s.error_shake, s.error)
				})
			} else {
				setSubmitting(true)
				try {
					await insertTransactionAndItems(formData)
					setSubmitting(false)
					if (setRefreshRequired) {
						setRefreshRequired()
					}
					setCreationFinished(true)
				} catch (e) {
					if (isStandardError(e)) {
						promptError(
							'Error occurred while creating your transaction.',
							e.message,
							'Check your internet connection, and try refreshing the page.'
						)
						console.error(e)
					}
				}
			}
		}
	}

	const handleCreateAnother = useCallback(() => {
		setFormData({
			name: '',
			date: defaultDate as string,
			items: [{ name: '', amount: '', category_id: '', account_id: '' }],
		})
		setCreationFinished(false)
	}, [])

	return (
		<div className={s.main}>
			<h2>Create New Transaction</h2>
			{!creationFinished ? (
				<>
					<form>
						<div className={s.split_col}>
							<div className={s.name_container}>
								<label htmlFor='transaction-name'>Name:</label>
								<JInput
									id='transaction-name'
									onChange={handleChange}
									value={formData.name}
									ref={(node) => {
										firstFocusRef.current = node as HTMLElement
									}}
								/>
							</div>
							<div className={s.date_container}>
								<label htmlFor='transaction-date'>Date:</label>
								<JDatePicker
									id='transaction-date'
									onChange={handleChange}
									value={formData.date}
								/>
							</div>
						</div>
						<div className={s.multiple_toggle_container}>
							<label htmlFor='multiple-items'>Multiple Items?</label>
							<JCheckbox
								bgColor='#3d3d3d'
								id='multiple-items'
								checked={isMultiItems}
								onChange={(e) => setIsMultiItems(e.target.checked)}
							/>
						</div>
						{isMultiItems ? (
							<MultiItemGrid
								{...{ formData, handleChange, dropdownOptions, setFormData }}
							/>
						) : (
							<div className={s.items_container}>
								<div className={s.item}>
									<div>
										<label htmlFor='item-amount-0'>Amount:</label>
										<JNumberAccounting
											id='item-amount-0'
											value={formData.items[0].amount}
											onChange={handleChange}
										/>
									</div>
									<div>
										<label htmlFor='item-category_id-0'>Category:</label>
										<JDropdown
											id='item-category_id-0'
											options={dropdownOptions.category}
											value={formData.items[0].category_id}
											onChange={handleChange}
										/>
									</div>
									<div>
										<label htmlFor='item-account_id-0'>Account:</label>
										<JDropdown
											id='item-account_id-0'
											options={dropdownOptions.account}
											value={formData.items[0].account_id}
											onChange={handleChange}
										/>
									</div>
								</div>
							</div>
						)}
					</form>
					<div className={s.button_container}>
						<JButton jstyle='secondary' onClick={forceClosePopup}>
							Go Back
						</JButton>
						<JButton
							jstyle={missingItems.length !== 0 ? 'secondary' : 'primary'}
							onClick={handleSubmit}
							loading={submitting}
							ref={(node) => {
								lastFocusRef.current = node as HTMLElement
							}}
						>
							Create
						</JButton>
					</div>
				</>
			) : (
				<>
					<h3>Transaction successfully created.</h3>
					<div className={s.button_container}>
						<JButton
							jstyle='secondary'
							onClick={forceClosePopup}
							ref={(node) => {
								firstFocusRef.current = node as HTMLElement
							}}
						>
							Exit
						</JButton>
						<JButton
							jstyle='primary'
							onClick={handleCreateAnother}
							ref={(node) => {
								lastFocusRef.current = node as HTMLElement
							}}
						>
							Create Another
						</JButton>
					</div>
				</>
			)}
		</div>
	)
}
