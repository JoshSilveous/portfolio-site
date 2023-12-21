import { ReactNode, useState } from 'react'
import { FoldComponent } from '../../components'

export function useFoldSwitcher(folds: FoldSwitcherContent[], defaultFoldIndex?: number) {
	const [activeFoldIndex, setActiveFoldIndex] = useState(
		defaultFoldIndex === undefined ? NaN : defaultFoldIndex
	)

	// check to make sure specified defaultFoldIndex actually exists in provided array
	if (defaultFoldIndex !== undefined && defaultFoldIndex >= folds.length) {
		throw new Error(
			`defaultTabIndex "${defaultFoldIndex} specified, but array indexes only go up to '${
				folds.length - 1
			}!`
		)
	}
	const foldComponents = folds.map((fold, index) => {
		function handleToggle() {
			if (index === activeFoldIndex) {
				setActiveFoldIndex(NaN)
			} else {
				setActiveFoldIndex(index)
			}
		}
		return (
			<FoldComponent
				title={fold.title}
				folded={index !== activeFoldIndex}
				handleToggle={handleToggle}
			>
				{fold.content}
			</FoldComponent>
		)
	})

	return <div className='fold-switcher-component'>{foldComponents}</div>
}

declare global {
	interface FoldSwitcherContent {
		title: string
		content: ReactNode
	}
}
