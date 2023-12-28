import { ReactNode, useEffect, useRef, useState } from 'react'
import { FoldComponent } from '..'

interface FoldSwitcherProps {
	folds: FoldSwitcherContent[]
	defaultFoldIndex?: number
}
export function FoldSwitcher({ folds, defaultFoldIndex }: FoldSwitcherProps) {
	const foldSwitchContainerRef = useRef<HTMLDivElement>(null)
	const [activeFoldIndex, setActiveFoldIndex] = useState(
		defaultFoldIndex === undefined ? NaN : defaultFoldIndex
	)

	function scrollToFold(foldIndex: number) {
		const foldSwitcherContainer = foldSwitchContainerRef.current! as HTMLDivElement
		const foldSwitcherTop = foldSwitcherContainer.offsetTop - 80 // offset for NavBar

		// using <a id="..." /> elements causes a visual bug, where when a fold higher-on the page is closing, it offsets the scrollTo position of the <a> element
		// this method preemptively calculates where the top of the fold will be, and scrolls the user to it, regardless of open/close animation state
		let scrollToPosition = foldSwitcherTop
		folds.some((_fold, index) => {
			if (index === foldIndex) {
				return true
			} else {
				const thisFoldTitle = foldSwitcherContainer.childNodes[index]
					.childNodes[0] as HTMLDivElement
				scrollToPosition += thisFoldTitle.clientHeight
				console.log(scrollToPosition)
				return false
			}
		})
		window.scrollTo(0, scrollToPosition)
	}

	// If user clicks a href that focuses on a fold section, close other folds, open the specified fold, and scroll to it's position
	useEffect(() => {
		const anchorsArray = folds.map((fold) => '#' + fold.anchor)

		function scrollToFoldSpecifiedInURL() {
			const indexOfURLDirectedFold = anchorsArray.indexOf(window.location.hash)
			scrollToFold(indexOfURLDirectedFold)
			setActiveFoldIndex(indexOfURLDirectedFold)
		}

		window.addEventListener('popstate', scrollToFoldSpecifiedInURL)
		return () => {
			window.removeEventListener('popstate', scrollToFoldSpecifiedInURL)
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
				scrollToFold(index)
				setActiveFoldIndex(index)
			}
		}
		return (
			<FoldComponent
				title={fold.title}
				folded={index !== activeFoldIndex}
				handleToggle={handleToggle}
				key={index}
			>
				{fold.content}
			</FoldComponent>
		)
	})

	return (
		<div className='fold-switcher-component' ref={foldSwitchContainerRef}>
			{foldComponents}
		</div>
	)
}

declare global {
	interface FoldSwitcherContent {
		title: string
		content: ReactNode
		anchor?: string
	}
}
