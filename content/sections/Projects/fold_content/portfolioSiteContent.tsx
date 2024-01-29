import {
	GitHubIcon,
	LinkIcon,
	LinkedInIcon,
	NextIcon,
	PhoneIcon,
	ReactIcon,
	SassIcon,
	TypeScriptIcon,
} from '@/assets'
import { Code, TextWithIcon } from '@/components'
import './fold_content.scss'
export const portfolioSiteContent = (
	<div className='fold guitar-visualizer'>
		<div className='col'>
			<div className='links'>
				<h3>Links</h3>
				<TextWithIcon Icon={LinkIcon} href='https://silveo.us/' newWindow>
					Deployment
				</TextWithIcon>
				<TextWithIcon
					Icon={GitHubIcon}
					href='https://github.com/JoshSilveous/portfolio-site'
					newWindow
				>
					GitHub
				</TextWithIcon>
			</div>
			<div className='tech'>
				<h3>Technologies</h3>
				<TextWithIcon Icon={NextIcon}>Next</TextWithIcon>
				<TextWithIcon Icon={TypeScriptIcon}>TypeScript</TextWithIcon>
				<TextWithIcon Icon={ReactIcon}>React</TextWithIcon>
				<TextWithIcon Icon={SassIcon}>Sass</TextWithIcon>
			</div>
		</div>
		<div className='description'>
			<p>
				Now that I'm searching for a career in web development, I figured it'd be a good
				idea to put together a portfolio site. The goal was to create a centralized place to
				view all of my qualifications and experience, without having to bounce around
				through my LinkedIn, GitHub, etc.
			</p>
			<p>
				This site allows me to show off a bit of style, personality, and my competence with
				UI design. Also, I managed to snag a domain that is literally just my last name
				(silveo.us) for only $20 per year, which is awesome.
			</p>
			<p>
				I also took this as an opportunity to use Next.js on a large project. This entire
				portfolio is a single-page application, so I didn't really use Next's router too
				much, but I got to take advantage of server-side rendering and some other Next.js
				features.
			</p>
			<p>
				Everything on this site (besides most icons, provided by{' '}
				<TextWithIcon Icon={LinkIcon} href='https://www.svgrepo.com/' inline newWindow>
					SVGRepo
				</TextWithIcon>
				), is custom code. I put a lot of thought into the components here as well. Here's a
				couple examples of components I created for this site:
			</p>
			<h2>
				<Code style={{ fontSize: '24px', marginTop: '30px' }}>
					&#60;<div className='comp'>FoldSwitcher</div> /&#62;
				</Code>
			</h2>
			<p>
				These folding sections used under the <strong>Projects</strong> and{' '}
				<strong>Experience</strong> sections took a lot of thought to create.
			</p>
			<p>
				To open up one of these folds, I cannot just set the element's height to auto,
				because CSS cannot transition between{' '}
				<Code>
					<div className='val'>0px</div>
				</Code>{' '}
				and{' '}
				<Code>
					<div className='val'>auto</div>
				</Code>
				. Instead, my code calculates what the{' '}
				<Code>
					<div className='prop'>height</div>
				</Code>{' '}
				will be when open, sets the{' '}
				<Code>
					<div className='prop'>height</div>
				</Code>{' '}
				px value to that number, then switches it to{' '}
				<Code>
					<div className='val'>auto</div>
				</Code>{' '}
				afterwards to allow proper page resizing.
			</p>
			<p>
				On top of that, other folds are closed when one is opened to prevent cluttering the
				page. Also, each section is automatically opened when navigated to via{' '}
				<Code>
					&#60;<div className='elem'>a</div> /&#62;
				</Code>{' '}
				tag.
			</p>
			<p>
				Also, when you navigate to a fold using an{' '}
				<Code>
					&#60;<div className='elem'>a</div> /&#62;
				</Code>{' '}
				tag, your browser scrolls to the position of the element with the matching{' '}
				<Code>
					<div className='prop'>id</div>
				</Code>{' '}
				. However, since these folds open/close automatically, your browser may scroll you
				to the position of the id <i>prior</i> to an element above it closing, causing your
				position to be incorrect.
				<br />
				To prevent this, I implemented behavior that calculates where to top of the element
				with a matching{' '}
				<Code>
					<div className='prop'>id</div>
				</Code>{' '}
				<i>will be</i>, after the animation, and it scrolls you to that position instead.
			</p>
			<p>
				As you can see, <i>a lot</i> of detail work went into this component.
			</p>
			<h2>
				<Code style={{ fontSize: '24px', marginTop: '30px' }}>
					&#60;<div className='comp'>TextWithIcon</div> /&#62;
				</Code>
			</h2>
			<p>
				I like the functional/aesthetic purposes of these{' '}
				<TextWithIcon Icon={LinkIcon} inline>
					little icons
				</TextWithIcon>
				, and I use them all over this site, so I created a component for it.
			</p>
			<p>
				You just add the svg icon as a prop, and the text/content as children to the
				component. You can also add a{' '}
				<Code>
					<div className='prop'>href</div>
				</Code>{' '}
				property to turn it into a link, and use the{' '}
				<Code>
					<div className='prop'>inline</div>
				</Code>{' '}
				and{' '}
				<Code>
					<div className='prop'>newWindow</div>
				</Code>{' '}
				boolean properties to control those values.
			</p>
			<p>
				For example, here's the code for a link to my{' '}
				<TextWithIcon
					Icon={LinkedInIcon}
					href='https://www.linkedin.com/in/joshua-silveous/'
					newWindow
					inline
				>
					LinkedIn
				</TextWithIcon>{' '}
				page:
				<br />
				<br />
				<Code style={{ display: 'block', overflowX: 'auto' }}>
					&#60;<div className='comp'>TextWithIcon</div>
					<br />
					&nbsp; &nbsp;
					<div className='prop'>Icon</div>=<div className='prop'>&#123;</div>
					<div className='val'>LinkedInIcon</div>
					<div className='prop'>&#125;</div>
					<br />
					&nbsp; &nbsp;
					<div className='prop'>href</div>=
					<div className='str'>'https://www.linkedin.com/in/joshua-silveous/'</div>
					<br />
					<div className='prop'>
						&nbsp; &nbsp;inline
						<br />
						&nbsp; &nbsp;newWindow
					</div>
					<br />
					&#62;
					<br />
					&nbsp; &nbsp;LinkedIn
					<br />
					&#60;/<div className='comp'>TextWithIcon</div>&#62;
				</Code>
			</p>
			<p style={{ marginTop: '60px' }}>
				There are more components used in this site, like the{' '}
				<Code>
					&#60;<div className='comp'>TabSwitcher</div> /&#62;
				</Code>{' '}
				component and the{' '}
				<Code>
					&#60;<div className='comp'>Code</div> /&#62;
				</Code>{' '}
				component used to style these code sections, but I don't think all of that is
				necessary to explain here. I figured I'd just provide a couple of examples for those
				who are curious.
			</p>
		</div>
	</div>
)
