import {
	NodeIcon,
	ExpressIcon,
	SQLIcon,
	ElectronIcon,
	PHPIcon,
	JestIcon,
} from '../../../../../assets'

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
				<a href='#projects/finance-tracker'>Finance Tracker</a> and{' '}
				<a href='#projects/grading-application'>Grading Application</a> projects.
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
				such as my <a href='#projects/finance-tracker'>Finance Tracker</a> project.
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
				<a href='#projects/finance-tracker'>Finance Tracker</a> and{' '}
				<a href='#projects/grading-application'>Grading Application</a> projects.
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
				My <a href='#projects/finance-tracker'>Finance Tracker</a> project is the first time
				I've build an API, and it's a fairly complex API with a lot of endpoints. While I
				was building the API, I realized that using Postman to manually test my code was
				taking up a lot of time. When looking into alternatives, I discovered Jest, and
				spent some time writing up tests to ensure that every function of my API behaves
				appropriately.
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
				<a href='#projects/grading-application'>Grading Application</a>, a final project for
				one of my college classes.
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
