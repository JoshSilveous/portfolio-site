import {
	NodeIcon,
	ExpressIcon,
	SQLIcon,
	ElectronIcon,
	PHPIcon,
	JestIcon,
	ProjectsIcon,
	JoiIcon,
} from '@/assets'
import { TextWithIcon } from '@/components'

export const backendContent: SkillSectionInfo[] = [
	{
		name: 'Node.js',
		icon: <NodeIcon />,
		description:
			'Node.js is a server-side JavaScript runtime environment that enables building scalable and efficient network applications (APIs).',
		additional_content: (
			<>
				I have used Node.js to build processes for Electron applications, and to build
				servers/APIs for full-stack projects, such as my{' '}
				<TextWithIcon Icon={ProjectsIcon} href='#projects/finance-tracker' inline>
					Finance Tracker
				</TextWithIcon>{' '}
				and{' '}
				<TextWithIcon Icon={ProjectsIcon} href='#projects/grading-application' inline>
					Grading Application
				</TextWithIcon>{' '}
				projects.
			</>
		),
	},
	{
		name: 'Express.js',
		icon: <ExpressIcon />,
		description:
			'Express.js is a web application framework for Node.js, simplifying the development of APIs with robust routing and middleware.',
		additional_content: (
			<>
				I have used Express.js in most of my Node applications that involve API routing,
				such as my{' '}
				<TextWithIcon Icon={ProjectsIcon} href='#projects/finance-tracker' inline>
					Finance Tracker
				</TextWithIcon>{' '}
				project.
			</>
		),
	},
	{
		name: 'SQL',
		icon: <SQLIcon />,
		description:
			'SQL (Structured Query Language) is a domain-specific language for managing and querying relational databases.',
		additional_content: (
			<>
				I have taken multiple advanced classes covering SQL database design, normalization
				rules, and more complex topics such as Views. Whenever I need a robust database in a
				project, I'll usually reach for SQL solutions, such as SQLite, PostgreSQL, or Oracle
				Database.
				<br />I designed a SQLite database structure for my{' '}
				<TextWithIcon Icon={ProjectsIcon} href='#projects/finance-tracker' inline>
					Finance Tracker
				</TextWithIcon>{' '}
				and{' '}
				<TextWithIcon Icon={ProjectsIcon} href='#projects/grading-application' inline>
					Grading Application
				</TextWithIcon>{' '}
				projects.
			</>
		),
	},
	{
		name: 'Jest',
		icon: <JestIcon />,
		description:
			'Jest is a popular JavaScript testing framework that simplifies the process of writing and running unit and integration tests for your code, ensuring its reliability and robustness.',
		additional_content: (
			<>
				My{' '}
				<TextWithIcon Icon={ProjectsIcon} href='#projects/finance-tracker' inline>
					Finance Tracker
				</TextWithIcon>{' '}
				project is the first time I've build an API, and it's a fairly complex API with a
				lot of endpoints. While I was building the API, I realized that using Postman to
				manually test my code was taking up a lot of time. When looking into alternatives, I
				discovered Jest, and spent some time writing up tests to ensure that every function
				of my API behaves appropriately.
			</>
		),
	},
	{
		name: 'Joi',
		icon: <JoiIcon />,
		description:
			'Joi is a powerful schema description language and data validator for Node.js and Express.js. It allows developers to create blueprints or schemas for JavaScript objects, such as those received by APIs, to ensure validation of key information.',
		additional_content: (
			<>
				After spending time trying to come up with my own data validation system for my{' '}
				<TextWithIcon Icon={ProjectsIcon} href='#projects/finance-tracker' inline>
					Finance Tracker
				</TextWithIcon>{' '}
				project, I decided to do some research and discovered Joi. This library allows you
				to strictly enforce the format of JSON objects that hit your API, and requires very
				little code to do so. You simply create a schema, then create middleware functions
				for your API routes that validate objects against it (and methods to handle
				different validation outcomes).
			</>
		),
	},
	{
		name: 'Electron',
		icon: <ElectronIcon />,
		description:
			'Electron is a framework for building cross-platform desktop applications using web technologies and architecture. An Electron application has a renderer (front-end) process, built with HTML / CSS / JS, and a main (back-end) process, running Node.js.',
		additional_content: (
			<>
				Electron itself has a fairly minimal learning curve if you already know how to
				develop frontends and backends. I used Electron to create my{' '}
				<TextWithIcon Icon={ProjectsIcon} href='#projects/grading-application' inline>
					Grading Application
				</TextWithIcon>
				, a final project for one of my college classes.
			</>
		),
	},
	{
		name: 'PHP',
		icon: <PHPIcon />,
		description:
			'PHP is a time-tested server-side scripting language commonly used for web development, capable of creating dynamic and interactive web applications.',
		additional_content: (
			<>
				I have taken classes covering PHP, specifically using it to loop over data to
				generate HTML, such as MySQL Database Queries.
			</>
		),
	},
]
