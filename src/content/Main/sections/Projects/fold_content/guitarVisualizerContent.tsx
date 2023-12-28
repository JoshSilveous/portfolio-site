import {
	FretboardVis1Image,
	FretboardVis2Image,
	GitHubIcon,
	LinkIcon,
	ReactIcon,
	SassIcon,
	TypeScriptIcon,
} from '../../../../../assets'
import './fold_content.scss'
export const guitarVisualizerContent = (
	<div className='fold guitar-visualizer'>
		<div className='col'>
			<div className='links'>
				<h3>Links</h3>
				<a href='https://guitar-visualizer.vercel.app/' target='_blank'>
					<LinkIcon />
					Deployment
				</a>
				<a href='https://github.com/JoshSilveous/Guitar-Visualizer' target='_blank'>
					<GitHubIcon />
					GitHub
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
			</div>
		</div>
		<div className='description'>
			<h3>The First Implementation</h3>
			<p>
				When COVID-19 caused a national lockdown back in 2020, I decided to teach myself to
				play guitar. After a few months of my fingers hurting, I eventually got pretty good
				at it, and started diving into music theory. I find music theory quite interesting,
				as learning it really shows you that a ton of music concepts (scales, chords,
				progressions) are really all based in mathematic formulas. However, I really dreaded
				the idea of memorizing scales, so I decided to <i>cheat</i>, and build a calculator
				that would allow you to select any musical scale, and generate a fretboard that
				shows you all notes that fit within the scale (as well as list out chords).
			</p>
			<p>
				This was around the time I was initially getting into web development, and the first
				implementation of this idea was rather... <i>ugly</i>.
			</p>
			<FretboardVis1Image style={{ maxWidth: '400px', margin: '0 auto' }} />
			<p>
				Dispite that, it worked really well. Whenever I wanted to jam out to a song, I can
				just google what scale the song uses, plug that in here, and know exactly what notes
				would sound good to play alongside it. This tool wasn't for an assignment or
				anything, I just did it because I enjoyed it.
			</p>
			<p>
				<i>However</i>, the code is a complete mess. I didn't really know anything about
				JavaScript (or high-level programming concepts) when I was creating this, so there's
				a lot of weird nesting and amateurish decisions in my code.
			</p>
			<p>
				If you'd like to check this old version out, I've deployed it{' '}
				<a href='https://old-fretboard-visualizer.vercel.app/' target='_blank'>
					here
				</a>
				, and the GitHub repository can be found{' '}
				<a href='https://github.com/JoshSilveous/old-fretboard-visualizer' target='_blank'>
					here.
				</a>{' '}
				Again, please don't judge.
			</p>
			<h3>The Second Implementation</h3>
			<p>
				During the summer of 2022, I spent a lot of time diving deeper into React. I decided
				to revisit my guitar visualization idea with a new project, titled{' '}
				<strong>MusiqTools</strong>.
			</p>
			<FretboardVis2Image style={{ maxWidth: '400px', margin: '0 auto' }} />
			<p>
				I took a learn-as-you-go approach to this project, so it wasn't very well planned
				out. While it was a significant improvement over the first iteration, I ended up
				refactoring/rewriting code quite often, as I discovered better ways to accomplish
				certain things.
			</p>
			<p>
				Eventually, I decided to axe this project. I determined it'd be better to start from
				scratch with all the insight I'd gained throughout this project. However, if you'd
				like to take a look, you can find the GitHub repository{' '}
				<a href='https://github.com/JoshSilveous/old-musiqtools'>here</a>, and the
				deployment <a href='https://old-musiqtools.vercel.app/'>here</a>.
			</p>
			<h3>The Third Implementation</h3>
		</div>
	</div>
)
