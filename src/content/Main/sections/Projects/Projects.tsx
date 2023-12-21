import { FoldComponent, FoldSwitcher } from '../../../../components'
import * as sections from './fold_content'
import '../sections.scss'
export function Projects() {
	const folds: FoldSwitcherContent[] = [
		{
			title: 'Guitar Visualizer',
			content: sections.guitarVisualizerContent,
		},
		{
			title: 'Finance Tracker',
			content: sections.financeTrackerContent,
		},
		{
			title: 'Grading Application',
			content: sections.gradingApplicationContent,
		},
		{
			title: 'Advanced Lottie Viewer',
			content: sections.advancedLottieViewerContent,
		},
		{
			title: 'Excel-lent Finance Tracker',
			content: sections.excellentFinanceTrackerContent,
		},
	]
	return (
		<div className='section projects'>
			<a className='anchor' id='projects' />
			<h1>Projects</h1>

			<FoldSwitcher folds={folds} />

			<p>
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah
			</p>
		</div>
	)
}
