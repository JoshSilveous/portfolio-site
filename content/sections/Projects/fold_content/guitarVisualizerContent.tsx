import {
	FretboardVis1Image,
	FretboardVis2Image,
	FretboardVis3Image,
	GitHubIcon,
	LinkIcon,
	ReactIcon,
	SassIcon,
	TypeScriptIcon,
} from '@/assets'
import { TextWithIcon } from '@/components'
import './fold_content.scss'
export const guitarVisualizerContent = (
	<div className='fold guitar-visualizer'>
		<div className='col'>
			<div className='links'>
				<h3>Links</h3>
				<TextWithIcon Icon={LinkIcon} href='https://guitar.silveo.us/' newWindow>
					Deployment
				</TextWithIcon>
				<TextWithIcon
					Icon={GitHubIcon}
					href='https://github.com/JoshSilveous/Guitar-Visualizer'
					newWindow
				>
					GitHub
				</TextWithIcon>
			</div>
			<div className='tech'>
				<h3>Technologies</h3>
				<TextWithIcon Icon={TypeScriptIcon}>TypeScript</TextWithIcon>
				<TextWithIcon Icon={ReactIcon}>React</TextWithIcon>
				<TextWithIcon Icon={SassIcon}>Sass</TextWithIcon>
			</div>
		</div>
		<div className='description'>
			<h3>The First Implementation</h3>
			<p>
				When COVID-19 caused a national lockdown back in 2020, I decided to teach
				myself to play guitar. After a few months of my fingers hurting, I eventually
				got fairly good at it, and started diving into music theory. I find music
				theory quite interesting, as learning it really shows you that a ton of music
				concepts (scales, chords, progressions) are really all based in mathematic
				formulas. However, I really dreaded the idea of memorizing scales, so I
				decided to <i>cheat</i>, and build a calculator that would allow you to
				select any musical scale, and generate a fretboard that shows you all notes
				that fit within the scale (as well as list out chords).
			</p>
			<p>
				This was around the time I was initially getting into web development, and
				the first implementation of this idea was rather... <i>ugly</i>.
			</p>
			<FretboardVis1Image style={{ maxWidth: '400px', margin: '0 auto' }} />
			<p>
				Despite that, it worked really well. Whenever I wanted to jam out to a song,
				I can just google what scale the song uses, plug that in here, and know
				exactly what notes would sound good to play alongside it. This tool
				wasn&apos;t for an assignment or anything, I just did it because I enjoyed
				it.
			</p>
			<p>
				<i>However</i>, the code is a complete mess. I didn&apos;t really know
				anything about JavaScript (or high-level programming concepts) when I was
				creating this, so there&apos;s a lot of weird nesting and amateurish
				decisions in my code.
			</p>
			<p>
				If you&apos;d like to check this old version out, I&apos;ve deployed it{' '}
				<TextWithIcon
					Icon={LinkIcon}
					href='https://old-fretboard-visualizer.silveo.us/'
					newWindow
					inline
				>
					here
				</TextWithIcon>
				, and the GitHub repository can be found{' '}
				<TextWithIcon
					Icon={GitHubIcon}
					href='https://github.com/JoshSilveous/old-fretboard-visualizer'
					newWindow
					inline
				>
					here
				</TextWithIcon>
				. Again, please don&apos;t judge.
			</p>
			<h3>The Second Implementation</h3>
			<p>
				During the summer of 2022, I spent a lot of time diving deeper into React. I
				decided to revisit my guitar visualization idea with a new project, titled{' '}
				<strong>MusiqTools</strong>.
			</p>
			<FretboardVis2Image style={{ maxWidth: '400px', margin: '0 auto' }} />
			<p>
				I took a learn-as-you-go approach to this project, so it wasn&apos;t very
				well planned out. While it was a significant improvement over the first
				iteration, I ended up refactoring/rewriting code quite often, as I discovered
				better ways to accomplish certain things.
			</p>
			<p>
				Eventually, I decided to axe this project. I decided it&apos;d be better to
				start from scratch with all the insight I&apos;d gained throughout this
				project. However, if you&apos;d like to take a look, you can find the GitHub
				repository{' '}
				<TextWithIcon
					Icon={GitHubIcon}
					href='https://github.com/JoshSilveous/old-musiqtools'
					newWindow
					inline
				>
					here
				</TextWithIcon>
				, and the deployment{' '}
				<TextWithIcon
					Icon={LinkIcon}
					href='https://old-musiqtools.silveo.us/'
					newWindow
					inline
				>
					here
				</TextWithIcon>
				.
			</p>
			<h3>The Third (current) Implementation</h3>
			<p>
				This time around, there&apos;s a ton that has improved. For starters,
				I&apos;m now using Sass for precise styling (instead of using inline styles,
				like the previous iteration). I also decided a file structure before
				beginning the project, making it much easier for me to jump back in and work
				on this.
			</p>
			<FretboardVis3Image
				style={{
					maxWidth: '400px',
					margin: '0 auto',
				}}
			/>
			<p>
				Visually, it doesn&apos;t look too different from the previous iteration
				(besides the color scheme). However, the code itself is much more readable,
				efficient, and modular. Right now, I&apos;m taking a hiatus from developing
				this to focus on back-end skills, but eventually I&apos;d like to add
				different instruments, barre chord highlighting, and many other features.
			</p>
			<p>
				The GitHub repository for this final version can be found{' '}
				<TextWithIcon
					Icon={GitHubIcon}
					href='https://github.com/JoshSilveous/guitar-visualizer'
					newWindow
					inline
				>
					here
				</TextWithIcon>
				, and the deployment{' '}
				<TextWithIcon
					Icon={LinkIcon}
					href='https://guitar.silveo.us/'
					newWindow
					inline
				>
					here
				</TextWithIcon>
				.
			</p>
		</div>
	</div>
)
