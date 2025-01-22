'use client'

import { delay } from '../utils'
import dummyData from './dummyData'
const { categories, accounts, transactions } = dummyData.dummyData

export interface FetchedTransaction {
	id: string
	date: string
	name: string
	order_position: number
	items: {
		id: string
		account_id: string
		category_id: string
		name: string
		amount: number
		order_position: number
	}[]
}

let transactionsData = [...transactions]

export async function fetchTransactionData(startingDate: string) {
	await delay(200)
	const filteredData = transactionsData.filter(
		(transaction) => transaction.date >= startingDate
	)
	return filteredData.map((transaction) => ({
		id: transaction.id,
		date: transaction.date,
		name: transaction.name,
		order_position: transaction.order_position,
		items: transaction.items,
	}))
}

export async function getTransactionsCount(date?: string) {
	await delay(200)
	if (date) {
		return transactionsData.filter((transaction) => transaction.date === date).length
	}
	return transactionsData.length
}

export interface InsertTransactionEntry {
	name: string
	date: string
	items: {
		name: string
		amount: string
		category_id: string
		account_id: string
	}[]
}

export async function insertTransactionAndItems(transaction: InsertTransactionEntry) {
	await delay(200)
	if (transaction.name.trim() === '') {
		throw new Error('Transaction Name cannot be empty!')
	} else if (transaction.date.trim() === '') {
		throw new Error('Transaction Date cannot be empty!')
	} else if (transaction.items.length === 0) {
		throw new Error('Transaction must have at least one item!')
	} else if (transaction.items.length !== 1) {
		transaction.items.forEach((item, index) => {
			if (item.name.trim() === '') {
				throw new Error(`Item #${index + 1}'s name cannot be empty!`)
			}
			if (item.amount.trim() === '') {
				throw new Error(`Item #${index + 1}'s amount cannot be empty!`)
			}
		})
	}

	const order_position = (await getTransactionsCount()) + 1
	const newTransaction = {
		id: `txn${transactionsData.length + 1}`,
		date: transaction.date,
		name: transaction.name,
		order_position,
		items: transaction.items.map((item, index) => ({
			id: `item${Math.random().toString(36).substr(2, 9)}`,
			account_id: item.account_id,
			category_id: item.category_id,
			name: item.name,
			amount: Number(item.amount),
			order_position: index + 1,
		})),
	}

	transactionsData.push(newTransaction)
	return newTransaction
}

export interface UpsertTransactionEntry {
	id?: string
	name: string
	date: string
	order_position?: number
}

export interface UpsertItemEntry {
	id?: string
	name: string
	amount: string
	category_id: string
	account_id: string
	order_position?: number
	transaction_id: string
}

export async function upsertTransactionsAndItems(
	transactions: UpsertTransactionEntry[],
	items: UpsertItemEntry[]
) {
	await delay(200)

	transactions.forEach((transaction) => {
		if (transaction.id) {
			const index = transactionsData.findIndex((t) => t.id === transaction.id)
			if (index !== -1) {
				transactionsData[index] = {
					...transactionsData[index],
					...transaction,
				}
			}
		} else {
			const newTransaction = {
				id: `txn${transactionsData.length + 1}`,
				...transaction,
				order_position: transactionsData.length + 1,
				items: [],
			}
			transactionsData.push(newTransaction)
		}
	})

	items.forEach((item, index) => {
		const transaction = transactionsData.find((t) => t.id === item.transaction_id)
		if (transaction) {
			if (item.id) {
				const index = transaction.items.findIndex((i) => i.id === item.id)
				if (index !== -1) {
					transaction.items[index] = {
						...transaction.items[index],
						...item,
						amount: Number(item.amount),
					}
				}
			} else {
				transaction.items.push({
					id: `item${Math.random().toString(36).substr(2, 9)}`,
					...item,
					amount: Number(item.amount),
					order_position: index,
				})
			}
		}
	})
}

export interface InsertItemEntry {
	name: string
	amount: string
	category_id: string
	account_id: string
	transaction_id: string
	order_position?: number
}

export async function insertItems(items: InsertItemEntry[]) {
	await delay(200)

	items.forEach((item) => {
		const transaction = transactionsData.find((t) => t.id === item.transaction_id)
		if (transaction) {
			transaction.items.push({
				id: `item${Math.random().toString(36).substr(2, 9)}`,
				...item,
				amount: Number(item.amount),
				order_position: transaction.items.length + 1,
			})
		}
	})
}

export async function deleteItems(ids: string[]) {
	await delay(200)

	transactionsData.forEach((transaction) => {
		transaction.items = transaction.items.filter((item) => !ids.includes(item.id))
	})
}

export async function deleteTransactions(ids: string[]) {
	await delay(200)

	transactionsData = transactionsData.filter(
		(transaction) => !ids.includes(transaction.id)
	)
}
