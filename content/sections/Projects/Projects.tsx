import {
	CSSIcon,
	ElectronIcon,
	ExpressIcon,
	HTMLIcon,
	JavaScriptIcon,
	JestIcon,
	JoiIcon,
	LottieIcon,
	NextIcon,
	NodeIcon,
	OfficeIcon,
	ReactIcon,
	SassIcon,
	SQLIcon,
	TypeScriptIcon,
	VBAIcon,
} from '@/assets'
import { FoldSwitcher } from '@/components'
import * as sections from './fold_content'
import './Projects.scss'
export function Projects() {
	const folds: FoldSwitcherContent[] = [
		{
			title: (
				<div className='title-wrapper'>
					<h2>Portfolio Site</h2>
					<div className='icon-container'>
						<NextIcon />
						<TypeScriptIcon />
						<ReactIcon />
						<SassIcon />
					</div>
				</div>
			),
			content: sections.portfolioSiteContent,
			anchor: 'projects/guitar-visualizer',
		},
		{
			title: (
				<div className='title-wrapper'>
					<h2>Guitar Visualizer</h2>
					<div className='icon-container'>
						<TypeScriptIcon />
						<ReactIcon />
						<SassIcon />
					</div>
				</div>
			),
			content: sections.guitarVisualizerContent,
			anchor: 'projects/guitar-visualizer',
		},
		{
			title: (
				<div className='title-wrapper'>
					<h2>Finance Tracker</h2>
					<div className='icon-container'>
						<TypeScriptIcon />
						<ReactIcon />
						<SassIcon />
						<SQLIcon />
						<NodeIcon />
						<ExpressIcon />
						<JestIcon />
						<JoiIcon />
					</div>
				</div>
			),
			content: sections.financeTrackerContent,
			anchor: 'projects/finance-tracker',
		},
		{
			title: (
				<div className='title-wrapper'>
					<h2>Grading Application</h2>
					<div className='icon-container'>
						<TypeScriptIcon />
						<ReactIcon />
						<SassIcon />
						<ElectronIcon />
						<NodeIcon />
						<SQLIcon />
					</div>
				</div>
			),
			content: sections.gradingApplicationContent,
			anchor: 'projects/grading-application',
		},
		{
			title: (
				<div className='title-wrapper'>
					<h2>Advanced Lottie Viewer</h2>
					<div className='icon-container'>
						<LottieIcon />
						<JavaScriptIcon />
						<HTMLIcon />
						<CSSIcon />
					</div>
				</div>
			),
			content: sections.advancedLottieViewerContent,
			anchor: 'projects/advanced-lottie-viewer',
		},
		{
			title: (
				<div className='title-wrapper'>
					<h2>Excel-lent Finance Tracker</h2>
					<div className='icon-container'>
						<OfficeIcon />
						<VBAIcon />
					</div>
				</div>
			),
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
