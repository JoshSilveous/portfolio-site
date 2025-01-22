'use client'

import { delay } from '../utils'
import dummyData from './dummyData'
const { categories, accounts, transactions } = dummyData

export interface FetchedCategory {
	id: string
	name: string
	order_position: number
}

export async function fetchCategoryData() {
	await delay(200)
	return categories as FetchedCategory[]
}

export async function getCategoryCount() {
	await delay(200)
	return categories.length
}

export async function getCategoryCountAssocWithTransaction(category_id: string) {
	await delay(200)
	return transactions.reduce(
		(count, txn) =>
			count + txn.items.filter((item) => item.category_id === category_id).length,
		0
	)
}

export interface InsertCategoryEntry {
	name: string
	order_position: number
}
export async function insertCategory(category: InsertCategoryEntry) {
	await delay(200)
	const newId = `cat${categories.length + 1}`
	categories.push({ id: newId, ...category })
	return newId
}

export interface UpsertCategoryEntry {
	id: string
	name: string
	order_position: number
}
export async function upsertCategories(categoryUpdates: UpsertCategoryEntry[]) {
	await delay(200)
	categoryUpdates.forEach((update) => {
		const index = categories.findIndex((cat) => cat.id === update.id)
		if (index !== -1) {
			categories[index] = { ...categories[index], ...update }
		} else {
			categories.push(update)
		}
	})
}

export async function deleteCategoryAndTransactions(category_id: string) {
	await delay(200)
	transactions.forEach((txn) => {
		txn.items = txn.items.filter((item) => item.category_id !== category_id)
	})
	const index = categories.findIndex((cat) => cat.id === category_id)
	if (index !== -1) categories.splice(index, 1)
}

export async function deleteCategoryAndSetNull(category_id: string) {
	await delay(200)
	transactions.forEach((txn) => {
		txn.items.forEach((item) => {
			if (item.category_id === category_id) item.category_id = ''
		})
	})
	const index = categories.findIndex((cat) => cat.id === category_id)
	if (index !== -1) categories.splice(index, 1)
}

export async function deleteCategoryAndReplace(
	category_id: string,
	new_category_id: string
) {
	await delay(200)
	transactions.forEach((txn) => {
		txn.items.forEach((item) => {
			if (item.category_id === category_id) item.category_id = new_category_id
		})
	})
	const index = categories.findIndex((cat) => cat.id === category_id)
	if (index !== -1) categories.splice(index, 1)
}

export interface CategoryTotal {
	category_id: string
	total_amount: number
}
export async function fetchCategoryTotals() {
	await delay(200)
	const totals: Record<string, number> = {}
	transactions.forEach((txn) => {
		txn.items.forEach((item) => {
			totals[item.category_id] = (totals[item.category_id] || 0) + item.amount
		})
	})
	return Object.entries(totals).map(([category_id, total_amount]) => ({
		category_id,
		total_amount,
	}))
}

export async function fetchCategoryTotalsWithinDateRange(
	startDate: string,
	endDate: string
) {
	await delay(200)
	const totals: Record<string, number> = {}
	transactions
		.filter((txn) => txn.date >= startDate && txn.date <= endDate)
		.forEach((txn) => {
			txn.items.forEach((item) => {
				totals[item.category_id] = (totals[item.category_id] || 0) + item.amount
			})
		})
	return Object.entries(totals).map(([category_id, total_amount]) => ({
		category_id,
		total_amount,
	}))
}
