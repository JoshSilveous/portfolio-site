import { ReactNode, useEffect, useState } from 'react'
import { FoldComponent } from '..'

interface FoldSwitcherProps {
	folds: FoldSwitcherContent[]
	defaultFoldIndex?: number
}
export function FoldSwitcher({ folds, defaultFoldIndex }: FoldSwitcherProps) {
	const [activeFoldIndex, setActiveFoldIndex] = useState(
		defaultFoldIndex === undefined ? NaN : defaultFoldIndex
	)

	useEffect(() => {
		const anchorsArray = folds.map((fold) => '#' + fold.anchor)
		function focusFoldSpecifiedInURL() {
			const indexOfURLDirectedFold = anchorsArray.indexOf(window.location.hash)
			if (indexOfURLDirectedFold !== -1) {
				setActiveFoldIndex(indexOfURLDirectedFold)
			}
		}
		window.addEventListener('popstate', focusFoldSpecifiedInURL)
		return () => {
			window.removeEventListener('popstate', focusFoldSpecifiedInURL)
		}
	}, [])

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
				anchor={fold.anchor}
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
		anchor?: string
	}
}
