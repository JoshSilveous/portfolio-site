import {
	ElectronIcon,
	GitHubIcon,
	GradingAppUI1Image,
	GradingAppUI2Image,
	GradingAppUI3Image,
	NodeIcon,
	PDFIcon,
	ReactIcon,
	SQLIcon,
	SassIcon,
	TypeScriptIcon,
} from '@/assets'
import { TextWithIcon } from '@/components'

export const gradingApplicationContent = (
	<div className='fold guitar-visualizer'>
		<div className='col'>
			<div className='links'>
				<h3>Links</h3>
				<TextWithIcon
					Icon={GitHubIcon}
					href='https://github.com/JoshSilveous/grading-application'
					newWindow
				>
					GitHub
				</TextWithIcon>
				<TextWithIcon
					Icon={PDFIcon}
					href='https://github.com/JoshSilveous/grading-application/blob/master/Report.pdf'
					newWindow
				>
					Report
				</TextWithIcon>
			</div>
			<div className='tech'>
				<h3>Technologies</h3>
				<TextWithIcon Icon={TypeScriptIcon}>TypeScript</TextWithIcon>
				<TextWithIcon Icon={ReactIcon}>React</TextWithIcon>
				<TextWithIcon Icon={SassIcon}>Sass</TextWithIcon>
				<TextWithIcon Icon={ElectronIcon}>Electron</TextWithIcon>
				<TextWithIcon Icon={NodeIcon}>Node</TextWithIcon>
				<TextWithIcon Icon={SQLIcon}>SQL</TextWithIcon>
			</div>
		</div>
		<div className='description'>
			<p>
				This application was created for my final project in my Comparative Programming
				Languages course. This desktop application allows your to manage grades for multiple
				classes with multiple students and multiple assignments. There are also extra
				features, such as exempting assignments and extra credit.
			</p>
			<h3>Data Structure</h3>
			<p>
				Using SQLite, the user can keep track of multiple classes. Students can be enrolled
				in multiple classes, and classes can contain multiple students. Each class can have
				multiple assignments, categorized by <strong>Homework</strong> and{' '}
				<strong>Tests</strong>. Those assignments can be <strong>Extra Credit</strong>,
				meaning that they don't negatively impact the final grade. Individual users can be
				made <strong>Exempt</strong> from grades on specific assignments, for cases such as
				missing class on the day of a test.
			</p>
			<h3>Interface</h3>
			<p>
				The UI is built using React and SCSS, with the main interface being a table, and a
				custom popup system used for detailed database insertions, such as creating a new
				class.
			</p>
			<GradingAppUI1Image />
			<div
				style={{
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'space-around',
					gap: '10px',
					marginTop: '10px',
					flexWrap: 'wrap',
				}}
			>
				<GradingAppUI2Image style={{ width: '400px' }} />
				<GradingAppUI3Image style={{ width: '400px' }} />
			</div>
			<h3>Electron</h3>
			<p>
				This program was built with <strong>Electron</strong>, which allows me to build
				fully-featured OS applications using Node.js for OS functions, such as writing data,
				and React for building the UI. No internet connection needed.
			</p>
			<p>
				If you'd like more details on this project, check out the{' '}
				<TextWithIcon
					Icon={PDFIcon}
					href='https://github.com/JoshSilveous/grading-application/blob/master/Report.pdf'
					inline
				>
					Report
				</TextWithIcon>{' '}
				I wrote about this project, and the technologies used in it.
			</p>
		</div>
	</div>
)
