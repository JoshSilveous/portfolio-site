'use client'

import { delay } from '../utils'
import dummyData from './dummyData'
const { categories, accounts, transactions } = dummyData

export interface FetchedAccount {
	id: string
	name: string
	order_position: number
	starting_amount: number
}

export async function fetchAccountData() {
	await delay(200)
	return accounts.sort((a, b) => a.order_position - b.order_position) as FetchedAccount[]
}

export async function getAccountsCount() {
	await delay(200)
	return accounts.length
}

export interface InsertAccountEntry {
	name: string
	starting_amount: number
	order_position: number
}
export async function insertAccount(account: InsertAccountEntry) {
	await delay(200)
	const newAccount = {
		...account,
		id: `acc${accounts.length + 1}`,
	}
	accounts.push(newAccount)
	return newAccount.id
}

export interface UpsertAccountEntry {
	id: string
	name: string
	starting_amount: number
	order_position: number
}
export async function upsertAccounts(accountUpdates: UpsertAccountEntry[]) {
	await delay(200)
	for (const update of accountUpdates) {
		const index = accounts.findIndex((acc) => acc.id === update.id)
		if (index !== -1) {
			accounts[index] = { ...accounts[index], ...update }
		} else {
			accounts.push(update)
		}
	}
	return
}

export async function getAccountCountAssocWithTransaction(account_id: string) {
	await delay(200)
	const count = transactions.reduce((acc, txn) => {
		return acc + txn.items.filter((item) => item.account_id === account_id).length
	}, 0)
	return count
}

export async function deleteAccountAndTransactions(account_id: string) {
	await delay(200)
	for (const txn of transactions) {
		txn.items = txn.items.filter((item) => item.account_id !== account_id)
	}
	const index = accounts.findIndex((acc) => acc.id === account_id)
	if (index !== -1) {
		accounts.splice(index, 1)
	}
	return
}

export async function deleteAccountAndSetNull(account_id: string) {
	await delay(200)
	for (const txn of transactions) {
		for (const item of txn.items) {
			if (item.account_id === account_id) {
				item.account_id = ''
			}
		}
	}
	const index = accounts.findIndex((acc) => acc.id === account_id)
	if (index !== -1) {
		accounts.splice(index, 1)
	}
	return
}

export async function deleteAccountAndReplace(account_id: string, new_account_id: string) {
	await delay(200)
	for (const txn of transactions) {
		for (const item of txn.items) {
			if (item.account_id === account_id) {
				item.account_id = new_account_id
			}
		}
	}
	const index = accounts.findIndex((acc) => acc.id === account_id)
	if (index !== -1) {
		accounts.splice(index, 1)
	}
	return
}

export interface AccountTotal {
	account_id: string
	total_amount: number
}
export async function fetchAccountTotals() {
	await delay(200)
	return accounts.map((account) => {
		const total_amount = transactions.reduce((sum, txn) => {
			return (
				sum +
				txn.items
					.filter((item) => item.account_id === account.id)
					.reduce((acc, item) => acc + item.amount, 0)
			)
		}, 0)
		return { account_id: account.id, total_amount }
	})
}

export async function fetchAccountTotalsWithinDateRange(startDate: string, endDate: string) {
	await delay(200)
	return accounts.map((account) => {
		const total_amount = transactions.reduce((sum, txn) => {
			const date = new Date(txn.date)
			const start = new Date(startDate)
			const end = new Date(endDate)
			if (date >= start && date <= end) {
				return (
					sum +
					txn.items
						.filter((item) => item.account_id === account.id)
						.reduce((acc, item) => acc + item.amount, 0)
				)
			}
			return sum
		}, 0)
		return { account_id: account.id, total_amount }
	})
}
