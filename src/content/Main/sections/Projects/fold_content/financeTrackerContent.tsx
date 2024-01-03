import {
	ExpressIcon,
	GitHubIcon,
	JestIcon,
	NodeIcon,
	ReactIcon,
	SQLIcon,
	SassIcon,
	TypeScriptIcon,
} from '../../../../../assets'

export const financeTrackerContent = (
	<div className='fold guitar-visualizer'>
		<div className='col'>
			<div className='links'>
				<h3>Links</h3>
				<a href='https://github.com/JoshSilveous/money-tracker-server' target='_blank'>
					<GitHubIcon />
					GitHub (Server)
				</a>
				<a href='https://github.com/JoshSilveous/money-tracker-client' target='_blank'>
					<GitHubIcon />
					GitHub (Frontend)
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
					<SQLIcon />
					SQL
				</div>
				<div className='item'>
					<NodeIcon />
					Node
				</div>
				<div className='item'>
					<ExpressIcon />
					Express
				</div>
				<div className='item'>
					<JestIcon />
					Jest
				</div>
			</div>
		</div>
		<div className='description'>
			<p>
				This project is my first <i>real</i> foray into developing API routes to connect a
				server to a client application. I spent some time learning Node.js and Express.js
				beforehand, but the scale of this project is much larger than anything else I'd
				done.
			</p>
			<p>
				Right now, I use Microsoft Excel to track my own finances (using my{' '}
				<a href='#projects/excellent-finance-tracker'>Excel-lent Finance Tracker</a>). It
				works really well for my own needs, but I wished there was a tool with a web
				interface that allowed me to track transactions in a similar style. Pre-existing
				apps like RocketMoney never really did what I wanted, so I decided to build my
				"dream finance tracker" app myself.
			</p>
			<h3>Back end</h3>
			<p>
				Right now, I've got the database structure and API routes built. For this first
				prototype, a series of SQLite databases are used (one file per user). A node
				instance, running with Express.js, connects all of the HTTP methods to database
				queries and other methods (such as creating/destroying the DB files for each user).
			</p>
			<p>
				This first iteration uses a <strong>very</strong> rudimentary username/password
				database for authentication. Ideally, I'd like to use third-party authorization
				systems (including OAuth), but I decided to wait to learn that until I've got a
				working prototype.
			</p>
			<p>
				All of the API routes are type-safe, using a library called Joi. Also, the entire
				backend has full test coverage, using Jest testing suite. These tests create a mock
				user profile, and tests every API route, including testing for expected errors.
			</p>
			<h3>Front end</h3>
			<p>
				The Front end for this project is currently being worked on. I have a rough UI
				built, but there's a lot of styling needed. I put a pause on this project to work on
				building this portfolio site, as I figured this portfolio would be more important in
				my job search.
			</p>
		</div>
	</div>
)
