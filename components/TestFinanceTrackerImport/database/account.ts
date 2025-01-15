'use client'
import {
	createClient,
	getUserID,
} from '@/components/TestFinanceTrackerImport/database/supabase/client'
const supabase = createClient()

export interface FetchedAccount {
	id: string
	name: string
	order_position: number
	starting_amount: number
}
export async function fetchAccountData() {
	const { data, error } = await supabase
		.from('accounts')
		.select('id, name, order_position, starting_amount')
		.order('order_position')

	if (error) {
		throw new Error(error.message)
	}
	return data as FetchedAccount[]
}

export async function getAccountsCount() {
	const { count, error } = await supabase
		.from('accounts')
		.select('*', { count: 'exact', head: true })
	if (error) {
		throw new Error(error.message)
	}
	return count as number
}

export interface InsertAccountEntry {
	name: string
	starting_amount: number
	order_position: number
}
export async function insertAccount(account: InsertAccountEntry) {
	const user_id = await getUserID()

	const numOfAccounts = await getAccountsCount()

	const newAccount = {
		...account,
		user_id: user_id,
	}

	const { data, error } = await supabase.from('accounts').insert([newAccount]).select('id')

	if (error) {
		throw new Error(error.message)
	}
	return data[0].id as string
}

export interface UpsertAccountEntry {
	id: string
	name: string
	starting_amount: number
	order_position: number
}
export async function upsertAccounts(accountUpdates: UpsertAccountEntry[]) {
	const user_id = await getUserID()

	const accountUpdatesWithUserID = accountUpdates.map((item) => {
		return {
			...item,
			user_id: user_id,
		}
	})

	const { error } = await supabase.from('accounts').upsert(accountUpdatesWithUserID, {
		defaultToNull: false,
		onConflict: 'id',
		ignoreDuplicates: false,
	})
	if (error) {
		throw new Error(error.message)
	}

	return
}

export async function getAccountCountAssocWithTransaction(account_id: string) {
	const { count, error } = await supabase
		.from('transaction_items')
		.select('*', { count: 'exact', head: true })
		.eq('account_id', account_id)
	if (error) {
		throw new Error(error.message)
	}
	return count as number
}

export async function deleteAccountAndTransactions(account_id: string) {
	const { error } = await supabase.rpc('delete_account_and_associated_items', {
		account_id_input: account_id,
	})

	if (error) {
		throw new Error(error.message)
	}

	return
}

export async function deleteAccountAndSetNull(account_id: string) {
	const { error } = await supabase.rpc('delete_account_and_null_associated_items', {
		account_id_input: account_id,
	})

	if (error) {
		throw new Error(error.message)
	}

	return
}

export async function deleteAccountAndReplace(account_id: string, new_account_id: string) {
	const { error } = await supabase.rpc('delete_account_and_replace_associated_items', {
		account_id_input: account_id,
		new_account_id,
	})

	if (error) {
		throw new Error(error.message)
	}

	return
}

export interface AccountTotal {
	account_id: string
	total_amount: number
}
export async function fetchAccountTotals() {
	const { data, error } = await supabase.rpc('get_totals_by_account')
	if (error) {
		throw new Error(error.message)
	}
	return data as AccountTotal[]
}

/**
 * Within those two dates INCLUDING startDate and endDate
 * @param startDate
 * @param endDate
 * @returns
 */
export async function fetchAccountTotalsWithinDateRange(startDate: string, endDate: string) {
	const { data, error } = (await supabase.rpc('get_totals_by_account_within_dates', {
		start_date: startDate,
		end_date: endDate,
	})) as {
		data: AccountTotal[]
		error: any
	}

	if (error) {
		throw new Error(error.message)
	}

	return data.map((item) =>
		item.account_id === null ? { account_id: '', total_amount: item.total_amount } : item
	) as AccountTotal[]
}
