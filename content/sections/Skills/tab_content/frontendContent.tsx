import {
	CSSIcon,
	HTMLIcon,
	JavaScriptIcon,
	ReactRouterIcon,
	ReactIcon,
	SassIcon,
	TypeScriptIcon,
	LottieIcon,
	ProjectsIcon,
	LinkIcon,
	NextIcon,
} from '@/assets'
import { TextWithIcon } from '@/components'
export const frontendContent: SkillSectionInfo[] = [
	{
		name: 'HTML',
		icon: <HTMLIcon />,
		description:
			'HTML (Hypertext Markup Language) is the foundation of web development, used to structure and present content on the internet.',
		additional_content: (
			<>
				I have been working with HTML for years. I had mild exposure during high school,
				when I was loosely teaching myself about Python and Django. College classes have also
				taught me a lot, but much of my HTML experience comes from self-learning and project
				experience.
			</>
		),
	},
	{
		name: 'CSS',
		icon: <CSSIcon />,
		description:
			"CSS (Cascading Style Sheets) is responsible for styling web pages controlling layout and enhancing the visual appeal of websites. CSS goes hand-in-hand with HTML to create a page's UI.",
		additional_content: (
			<>
				CSS is fairly simple to use effectively, but there is a lot of nuances you can learn
				to create beautiful and interesting pages. I have experience with all display models
				(block, flexbox and grid), variables, animations/transitions, responsive design
				(media queries), and many pseudo-classes.
			</>
		),
	},
	{
		name: 'JavaScript',
		icon: <JavaScriptIcon />,
		description:
			'JavaScript is a versatile programming language that adds interactivity and dynamic behavior to web applications. JavaScript can also be used as a back-end service (using Node.js), allowing applications, APIs, and server programs to be built on JavaScript.',
		additional_content: (
			<>
				JavaScript is the backbone of modern interactivity on the web, and usually the most
				important language in a web developer's arsenal. I have been working with JavaScript
				for years, and have a very strong understanding of modern JavaScript principles
				(array methods, objects, functional programming, etc.).
			</>
		),
	},
	{
		name: 'TypeScript',
		icon: <TypeScriptIcon />,
		description:
			'TypeScript brings type safety to JavaScript, providing reliable code and developer productivity.',
		additional_content: (
			<>
				I love TypeScript and I use it exclusively in my personal JavaScript projects.
				Whenever I write code, I like to write as if somebody else will be using it later
				on (making sure that my code is clean and well-documented). TypeScript supports that
				goal, allowing me to explain functions with much more depth than vanilla JavaScript,
				create interfaces to define object structures, and write convenient documentation
				for my code through JSDocs, which integrates itself into most modern editors.
			</>
		),
	},
	{
		name: 'React',
		icon: <ReactIcon />,
		description:
			'React is a popular JavaScript library for building user interfaces, offering a component-based architecture and efficient rendering.',
		additional_content: (
			<>
				I have been working with React for years, using it almost exclusively to develop my
				web applications. Developing applications with React isn't always the best choice,
				but it is much better than vanilla HTML & JS for most interactive web applications.
				React's component-based development architecture has allowed me to develop complex
				applications, such as my
				<TextWithIcon Icon={ProjectsIcon} href='#projects/guitar-visualizer' inline>
					Guitar Visualizer
				</TextWithIcon>
				, with much less boilerplate.
			</>
		),
	},
	{
		name: 'React Router',
		icon: <ReactRouterIcon />,
		description:
			'React Router is a routing library for React applications, streamlining navigation and URL route handling in a single-page application.',
		additional_content: (
			<>
				I have gone through some courses (mostly on{' '}
				<TextWithIcon Icon={LinkIcon} href='https://scrimba.com/' inline newWindow>
					Scrimba.com
				</TextWithIcon>
				) learning how React Router works, and have implemented it on a few small projects
				for learning purposes. Also, I am currently implementing it into my{' '}
				<TextWithIcon Icon={ProjectsIcon} href='#projects/finance-tracker' inline>
					Finance Tracker
				</TextWithIcon>{' '}
				application.
			</>
		),
	},
	{
		name: 'Next',
		icon: <NextIcon style={{ color: 'white' }} />,
		description:
			'Next.js is a React framework that enables functionalities such as server-side rendering and generating static websites, aiming to improve performance and development experience. It offers features like file-based routing, API routes, and built-in CSS modules support to streamline the process of building web applications',
		additional_content: (
			<>
				Next.js is one of the newest tools I've added to my toolbelt. I have gone through
				tutorials and crash courses to learn how Next's routing and unique features work.
				<br />
				<br />
				This Portfolio website runs on Next.js, and I have done a bunch of little exercises
				to learn multi-page routing and keeping state/data between URL routes.
			</>
		),
	},

	{
		name: 'Sass',
		icon: <SassIcon />,
		description:
			'Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that simplifies stylesheet authoring with variables, mixins, nested styles, and more.',
		additional_content: (
			<>
				Sass is fairly simple, and doesn't have much of a learning curve. I primarily use it
				because it allows nested selectors, but I understand how to use mixins,
				calculations, loops, and Sass's variables (though I prefer using CSS native
				variables).
			</>
		),
	},
	{
		name: 'Lottie',
		icon: <LottieIcon />,
		description:
			'Lottie is an animation library that allows the integration of high-quality animations into web and mobile applications with ease.',
		additional_content: (
			<>
				I have experience with creating animated vector graphics with Adobe Illustrator and
				After Effects (noted in the <strong>Other</strong> tab), and Lottie allows you to
				use those skills to create awesome graphics for web applications. Lottie's
				JavaScript also library provides a ton of functionality, which allowed me to create
				a dynamically animated hover effect, as shown in my{' '}
				<TextWithIcon Icon={ProjectsIcon} href='#projects/advanced-lottie-viewer' inline>
					Advanced Lottie Viewer
				</TextWithIcon>{' '}
				project.
			</>
		),
	},
]
