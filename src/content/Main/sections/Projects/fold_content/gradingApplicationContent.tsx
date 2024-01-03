import {
	ElectronIcon,
	GitHubIcon,
	NodeIcon,
	PDFIcon,
	ReactIcon,
	SQLIcon,
	SassIcon,
	TypeScriptIcon,
} from '../../../../../assets'

export const gradingApplicationContent = (
	<div className='fold guitar-visualizer'>
		<div className='col'>
			<div className='links'>
				<h3>Links</h3>
				<a href='https://github.com/JoshSilveous/grading-application' target='_blank'>
					<GitHubIcon />
					GitHub
				</a>
				<a
					href='https://github.com/JoshSilveous/grading-application/blob/master/Report.pdf'
					target='_blank'
				>
					<PDFIcon />
					Report
				</a>
			</div>
			<div className='tech'>
				<h3>Technologies</h3>
				<div className='item'>
					<TypeScriptIcon />
					TypeScript
				</div>
				<div className='item'>
					<ReactIcon />
					React
				</div>
				<div className='item'>
					<SassIcon />
					Sass
				</div>
				<div className='item'>
					<ElectronIcon />
					Electron
				</div>
				<div className='item'>
					<NodeIcon />
					Node
				</div>
				<div className='item'>
					<SQLIcon />
					SQL
				</div>
			</div>
		</div>
		<div className='description'></div>
	</div>
)
