'use client'
import { TileData } from '@/components/TestFinanceTrackerImport/app/p/dashboard/Dashboard/tiles'
import {
	createClient,
	getUserID,
} from '@/components/TestFinanceTrackerImport/database/supabase/client'

const supabase = createClient()

export async function fetchTileData() {
	const { data, error } = await supabase
		.from('tiles')
		.select('id, top, left, height, width, type, options, zIndex')

	if (error) {
		throw new Error(error.message)
	}
	const structuredData: TileData[] = data.map((tile) => ({
		id: tile.id,
		type: tile.type,
		zIndex: tile.zIndex,
		position: { top: tile.top, left: tile.left },
		size: { width: tile.width, height: tile.height },
		options: tile.options,
	}))
	return structuredData
}

export async function upsertTiles(tiles: TileData[]) {
	const user_id = await getUserID()
	const tilesWithUserID = tiles.map((tile) => ({
		id: tile.id.split('||')[0] === 'PENDING_CREATION' ? undefined : tile.id,
		height: tile.size.height,
		width: tile.size.width,
		top: tile.position.top,
		left: tile.position.left,
		type: tile.type,
		options: tile.options,
		zIndex: tile.zIndex,
		user_id: user_id,
	}))

	const { error } = await supabase.from('tiles').upsert(tilesWithUserID, {
		defaultToNull: false,
		onConflict: 'id',
		ignoreDuplicates: false,
	})

	if (error) {
		throw new Error(error.message)
	}

	return
}

export async function deleteTiles(ids: string[]) {
	if (!ids.length) {
		return
	}

	const { error } = await supabase.from('tiles').delete().in('id', ids)

	if (error) {
		throw new Error(error.message)
	}

	return
}
