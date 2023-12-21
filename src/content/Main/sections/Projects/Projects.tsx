import { FoldComponent, FoldSwitcher } from '../../../../components'
import '../sections.scss'
export function Projects() {
	const folds: FoldSwitcherContent[] = [
		{
			title: 'Guitar Visualizer',
			content: (
				<>
					<a
						className='anchor'
						id='projects/guitar-visualizer'
						style={{ top: '-150px' }}
					/>
					Some text Some text Some text Some text Some text Some text Some text Some text
					Some text Some text Some text Some text Some text Some text Some text Some text
					Some text Some text
				</>
			),
		},
		{
			title: 'Finance Tracker',
			content: (
				<>
					<a className='anchor' id='projects/finance-tracker' style={{ top: '-150px' }} />
					Some text Some text Some text Some text Some text Some text Some text Some text
					Some text Some text Some text Some text Some text Some text Some text Some text
					Some text Some text
				</>
			),
		},
		{
			title: 'Grading Application',
			content: (
				<>
					<a
						className='anchor'
						id='projects/grading-application'
						style={{ top: '-150px' }}
					/>
					Some text Some text Some text Some text Some text Some text Some text Some text
					Some text Some text Some text Some text Some text Some text Some text Some text
					Some text Some text
				</>
			),
		},
		{
			title: 'Advanced Lottie Viewer',
			content: (
				<>
					<a
						className='anchor'
						id='projects/advanced-lottie-viewer'
						style={{ top: '-150px' }}
					/>
					Some text Some text Some text Some text Some text Some text Some text Some text
					Some text Some text Some text Some text Some text Some text Some text Some text
					Some text Some text
				</>
			),
		},
		{
			title: 'Excel-lent Finance Tracker',
			content: (
				<>
					<a
						className='anchor'
						id='projects/excellent-finance-tracker'
						style={{ top: '-150px' }}
					/>
					Some text Some text Some text Some text Some text Some text Some text Some text
					Some text Some text Some text Some text Some text Some text Some text Some text
					Some text Some text
				</>
			),
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
