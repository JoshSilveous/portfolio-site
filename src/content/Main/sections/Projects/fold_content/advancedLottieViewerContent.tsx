import {
	GitHubIcon,
	JavaScriptIcon,
	HTMLIcon,
	CSSIcon,
	LottieIcon,
	LinkIcon,
} from '../../../../../assets'
import { TextWithIcon } from '../../../../../components'

export const advancedLottieViewerContent = (
	<div className='fold advanced-lottie-viewer'>
		<div className='col'>
			<div className='links'>
				<h3>Links</h3>
				<TextWithIcon
					Icon={GitHubIcon}
					href='https://github.com/JoshSilveous/advanced-lottie-viewer'
					newWindow
				>
					GitHub
				</TextWithIcon>
				<TextWithIcon
					Icon={LinkIcon}
					href='https://advanced-lottie-viewer.vercel.app/'
					newWindow
				>
					Deployment
				</TextWithIcon>
			</div>
			<div className='tech'>
				<h3>Technologies</h3>
				<TextWithIcon Icon={LottieIcon}>Lottie</TextWithIcon>
				<TextWithIcon Icon={JavaScriptIcon}>JavaScript</TextWithIcon>
				<TextWithIcon Icon={HTMLIcon}>HTML</TextWithIcon>
				<TextWithIcon Icon={CSSIcon}>CSS</TextWithIcon>
			</div>
		</div>
		<div className='description'>
			<p>
				A few years ago, I discovered a technology called <strong>Lottie</strong>, which
				provides a way to create lightweight vector animations using Adobe After Effects.
				The effect is similar to a typical animated SVG, but Lottie gives you far more
				control over the animation.
			</p>
			<p>
				In this project, I created a JavaScript function that allows you to customize Lottie
				animations by dividing a linear animation into different "segments" that have
				different entry/exit points. In the case of an animation that plays when a user
				hovers their mouse over the image, this function allows animators to change how the
				animation behaves when the user stops hovering.
			</p>
			<br />
			<div className='hover-supported'>
				Below is an example of what I'm talking about. Try moving your mouse over this image
				and removing it. Notice that the different "segments" play different animations when
				you remove your mouse, depending on which segment you're in.
			</div>
			<div className='hover-not-supported'>
				Below is an example of what I'm talking about, however this{' '}
				<span className='warn'>will not work on your device</span>. This is because you are
				using a touchscreen. If you'd like to check out this effect properly, visit this
				website on a device with <strong>a mouse</strong>, and hover it over this image.
			</div>
		</div>
	</div>
)
