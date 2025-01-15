'use client'
import { TileData } from '@/components/TestFinanceTrackerImport/Dashboard/tiles'
let tilesDef: TileData[] = [
	{
		id: 'f3e3a40a-45d4-4cd3-8a19-e1c389d4fe7b',
		type: 'transaction_manager',
		zIndex: 1,
		position: {
			top: 30,
			left: 30,
		},
		size: {
			width: 750,
			height: 690,
		},
		options: null,
	},
	{
		id: '2ef54019-c9d0-4316-954d-c11050531372',
		type: 'simple_values',
		zIndex: 3,
		position: {
			top: 270,
			left: 810,
		},
		size: {
			width: 240,
			height: 180,
		},
		options: {
			show: 'accounts',
			title: 'Account Change since Paycheck',
			exclude: [],
			customDay: '2024-12-29',
			showTitle: true,
			showDataFor: 'per_two_weeks',
		},
	},
	{
		id: 'a54aabd1-0942-437e-8d12-e6f3409a776e',
		type: 'simple_values',
		zIndex: 4,
		position: {
			top: 480,
			left: 810,
		},
		size: {
			width: 240,
			height: 240,
		},
		options: {
			show: 'categories',
			title: 'Category Change since Paycheck',
			exclude: [],
			customDay: '2025-01-14',
			showTitle: true,
			showDataFor: 'per_two_weeks',
		},
	},
	{
		id: '189dd16c-ac4f-40f7-a158-317b8c7ef53a',
		type: 'simple_values',
		zIndex: 2,
		position: {
			top: 30,
			left: 810,
		},
		size: {
			width: 240,
			height: 210,
		},
		options: {
			show: 'accounts',
			title: 'Current Account Values',
			exclude: [],
			customDay: '2025-01-14',
			showTitle: true,
			showDataFor: 'all_time',
		},
	},
]

export async function fetchTileData() {
	return tilesDef
}

export async function upsertTiles(tiles: TileData[]) {
	tiles.forEach((tile) => {
		const curIndex = tilesDef.findIndex((ti) => ti.id === tile.id)
		if (curIndex !== -1) {
			tilesDef[curIndex] = structuredClone(tile)
		} else {
			tilesDef.push(tile)
		}
	})

	return
}

export async function deleteTiles(ids: string[]) {
	ids.forEach((id) => {
		const curIndex = tilesDef.findIndex((ti) => ti.id === id)
		if (curIndex !== -1) {
			tilesDef.splice(curIndex, 1)
		}
	})
	return
}
