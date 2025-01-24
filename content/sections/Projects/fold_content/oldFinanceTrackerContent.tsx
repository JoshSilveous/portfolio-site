import {
	ExpressIcon,
	GitHubIcon,
	JestIcon,
	JoiIcon,
	NodeIcon,
	ProjectsIcon,
	ReactIcon,
	SQLIcon,
	SassIcon,
	TypeScriptIcon,
} from '@/assets'
import { TextWithIcon } from '@/components'

export const oldFinanceTrackerContent = (
	<div className='fold guitar-visualizer'>
		<div className='col'>
			<div className='links'>
				<h3>Links</h3>
				<TextWithIcon
					Icon={GitHubIcon}
					href='https://github.com/JoshSilveous/money-tracker-server'
					newWindow
				>
					GitHub (Server)
				</TextWithIcon>
				<TextWithIcon
					Icon={GitHubIcon}
					href='https://github.com/JoshSilveous/money-tracker-client'
					newWindow
				>
					GitHub (Frontend)
				</TextWithIcon>
			</div>
			<div className='tech'>
				<h3>Technologies</h3>
				<TextWithIcon Icon={TypeScriptIcon}>TypeScript</TextWithIcon>
				<TextWithIcon Icon={ReactIcon}>React</TextWithIcon>
				<TextWithIcon Icon={SassIcon}>Sass</TextWithIcon>
				<TextWithIcon Icon={SQLIcon}>SQL</TextWithIcon>
				<TextWithIcon Icon={NodeIcon}>Node</TextWithIcon>
				<TextWithIcon Icon={ExpressIcon}>Express</TextWithIcon>
				<TextWithIcon Icon={JestIcon}>Jest</TextWithIcon>
				<TextWithIcon Icon={JoiIcon}>Joi</TextWithIcon>
			</div>
		</div>
		<div className='description'>
			<p>
				This project is my first <i>real</i> foray into developing API routes to
				connect a server to a client application. I spent some time learning Node.js
				and Express.js beforehand, but the scale of this project is much larger than
				anything else I&apos;d done.
			</p>
			<p>
				Right now, I use Microsoft Excel to track my own finances (using my{' '}
				<TextWithIcon
					Icon={ProjectsIcon}
					href='#projects/excellent-finance-tracker'
					inline
				>
					Excel-lent Finance Tracker
				</TextWithIcon>{' '}
				project). It works quite well for my own needs, but I wished there was a tool
				with a web interface that allowed me to track transactions in a similar
				style. Pre-existing apps like RocketMoney never really did what I wanted, so
				I decided to build my &quot;dream finance tracker&quot; app myself.
			</p>
			<h3>Back End</h3>
			<p>
				Right now, I&apos;ve got the database structure and API routes built. For
				this first prototype, a series of SQLite databases are used (one file per
				user). A node instance, running with Express.js, connects all of the HTTP
				methods to database queries and other methods (such as creating/destroying
				the DB files for each user).
			</p>
			<p>
				This first iteration uses a <strong>very</strong> rudimentary
				username/password database for authentication. Ideally, I&apos;d like to use
				third-party authorization systems (including OAuth), but I decided to wait to
				learn that until I&apos;ve got a working prototype.
			</p>
			<p>
				All of the API routes are type-safe, using a library called Joi. Also, the
				entire backend has full test coverage, using Jest testing suite. These tests
				create a mock user profile, and tests every API route, including testing for
				expected errors.
			</p>
			<h3>Front end</h3>
			<p>
				The Front end for this project is currently being worked on. I have a rough
				UI built, but there&apos;s a lot of styling needed. I put a pause on this
				project to work on building this portfolio site, as I figured this portfolio
				would be more important in my job search.
			</p>
		</div>
	</div>
)
