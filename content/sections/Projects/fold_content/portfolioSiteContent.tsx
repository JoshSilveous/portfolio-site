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
				Now that I&apos;m searching for a career in web development, I figured
				it&apos;d be a good idea to put together a portfolio site. The goal was to
				create a centralized place to view all of my qualifications and experience,
				without having to bounce around through my LinkedIn, GitHub, etc.
			</p>
			<p>
				This site allows me to show off a bit of style, personality, and my
				competence with UI design. Also, I managed to snag a domain that is literally
				just my last name (silveo.us) for only $20 per year, which is awesome.
			</p>
			<p>
				I also took this as an opportunity to use Next.js on a large project. This
				entire portfolio is a single-page application, so I didn&apos;t really use
				Next&apos;s router too much, but I got to take advantage of server-side
				rendering and some other Next.js features.
			</p>
			<p>
				Everything on this site (besides most icons, provided by{' '}
				<TextWithIcon
					Icon={LinkIcon}
					href='https://www.svgrepo.com/'
					inline
					newWindow
				>
					SVGRepo
				</TextWithIcon>
				), is custom code. I put a lot of thought into the components here as well.
				Here&apos;s a couple examples of components I created for this site:
			</p>
			<h2>
				<Code style={{ fontSize: '24px', marginTop: '30px' }}>
					&#60;<span className='comp'>FoldSwitcher</span> /&#62;
				</Code>
			</h2>
			<p>
				These folding sections used under the <strong>Projects</strong> and{' '}
				<strong>Experience</strong> sections took a lot of thought to create.
			</p>
			<p>
				To open one of these folds, I cannot just set the element&apos;s height to
				auto, because CSS cannot transition between{' '}
				<Code>
					<span className='val'>0px</span>
				</Code>{' '}
				and{' '}
				<Code>
					<span className='val'>auto</span>
				</Code>
				. Instead, my code calculates what the{' '}
				<Code>
					<span className='prop'>height</span>
				</Code>{' '}
				will be when open, sets the{' '}
				<Code>
					<span className='prop'>height</span>
				</Code>{' '}
				px value to that number, then switches it to{' '}
				<Code>
					<span className='val'>auto</span>
				</Code>{' '}
				afterwards to allow proper page resizing.
			</p>
			<p>
				On top of that, other folds are closed when one is opened to prevent
				cluttering the page. Also, each section is automatically opened when
				navigated to via{' '}
				<Code>
					&#60;<span className='elem'>a</span> /&#62;
				</Code>{' '}
				tag.
			</p>
			<p>
				Also, when you navigate to a fold using an{' '}
				<Code>
					&#60;<span className='elem'>a</span> /&#62;
				</Code>{' '}
				tag, your browser scrolls to the position of the element with the matching{' '}
				<Code>
					<span className='prop'>id</span>
				</Code>{' '}
				. However, since these folds open/close automatically, your browser may
				scroll you to the position of the id <i>prior</i> to an element above it
				closing, causing your position to be incorrect.
				<br />
				To prevent this, I implemented behavior that calculates where to top of the
				element with a matching{' '}
				<Code>
					<span className='prop'>id</span>
				</Code>{' '}
				<i>will be</i>, after the animation, and it scrolls you to that position
				instead.
			</p>
			<p>
				As you can see, <i>a lot</i> of detail work went into this component.
			</p>
			<h2>
				<Code style={{ fontSize: '24px', marginTop: '30px' }}>
					&#60;<span className='comp'>TextWithIcon</span> /&#62;
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
				You just add the SVG icon as a prop, and the text/content as children to the
				component. You can also add a{' '}
				<Code>
					<span className='prop'>href</span>
				</Code>{' '}
				property to turn it into a link, and use the{' '}
				<Code>
					<span className='prop'>inline</span>
				</Code>{' '}
				and{' '}
				<Code>
					<span className='prop'>newWindow</span>
				</Code>{' '}
				boolean properties to control those values.
			</p>
			<p>
				For example, here&apos;s the code for a link to my{' '}
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
					&#60;<span className='comp'>TextWithIcon</span>
					<br />
					&nbsp; &nbsp;
					<span className='prop'>Icon</span>=<span className='prop'>&#123;</span>
					<span className='val'>LinkedInIcon</span>
					<span className='prop'>&#125;</span>
					<br />
					&nbsp; &nbsp;
					<span className='prop'>href</span>=
					<span className='str'>
						&apos;https://www.linkedin.com/in/joshua-silveous/&apos;
					</span>
					<br />
					<span className='prop'>
						&nbsp; &nbsp;inline
						<br />
						&nbsp; &nbsp;newWindow
					</span>
					<br />
					&#62;
					<br />
					&nbsp; &nbsp;LinkedIn
					<br />
					&#60;/<span className='comp'>TextWithIcon</span>&#62;
				</Code>
			</p>
			<p style={{ marginTop: '60px' }}>
				There are more components used in this site, like the{' '}
				<Code>
					&#60;<span className='comp'>TabSwitcher</span> /&#62;
				</Code>{' '}
				component and the{' '}
				<Code>
					&#60;<span className='comp'>Code</span> /&#62;
				</Code>{' '}
				component used to style these code sections, but I don&apos;t think all of
				that is necessary to explain here. I figured I&apos;d just provide a couple
				of examples for those who are curious.
			</p>
		</div>
	</div>
)
