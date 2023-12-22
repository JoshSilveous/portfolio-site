import { FoldSwitcher } from '../../../../components'
import * as sections from './fold_content'
export function Projects() {
	const folds: FoldSwitcherContent[] = [
		{
			title: 'Guitar Visualizer',
			content: sections.guitarVisualizerContent,
			anchor: 'projects/guitar-visualizer',
		},
		{
			title: 'Finance Tracker',
			content: sections.financeTrackerContent,
			anchor: 'projects/finance-tracker',
		},
		{
			title: 'Grading Application',
			content: sections.gradingApplicationContent,
			anchor: 'projects/grading-application',
		},
		{
			title: 'Advanced Lottie Viewer',
			content: sections.advancedLottieViewerContent,
			anchor: 'projects/advanced-lottie-viewer',
		},
		{
			title: 'Excel-lent Finance Tracker',
			content: sections.excellentFinanceTrackerContent,
			anchor: 'projects/excellent-finance-tracker',
		},
	]
	return (
		<div className='section projects'>
			<a className='anchor' id='projects' />
			<h1>Projects</h1>

			<FoldSwitcher folds={folds} />
		</div>
	)
}
