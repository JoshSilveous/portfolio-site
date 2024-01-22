import { GitHubIcon, JavaScriptIcon, HTMLIcon, CSSIcon, LottieIcon, LinkIcon } from '@/assets'
import { TextWithIcon } from '@/components'
import { LottieViewerIntegration } from './LottieViewerIntegration'

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
					href='https://advanced-lottie-viewer.silveo.us/'
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
			<h3>Example</h3>
			<div className='hover-supported'>
				Below is an example of what I'm talking about.
				<br /> Try <strong>hovering</strong> your mouse over this image and removing it.
				Notice that the different "segments" play different animations when you remove your
				mouse, depending on which segment you're in.
			</div>
			<div className='hover-not-supported'>
				Below is an example of what I'm talking about, however this{' '}
				<span className='warn'>will not work correctly on your device</span>. This is
				because you are using a <span className='warn'>touchscreen device</span>, which
				doesn't allow for a mouse-hovering effect to occur. However, you can tap on the
				image to trigger the animation, and tap somewhere else to exit.
				<br />
				If you'd like to check out this effect properly, visit this website on a device with{' '}
				<strong>a mouse</strong>, and hover it over this image.
			</div>
			<LottieViewerIntegration />
			<br />
			<p>
				This project is <strong>really old</strong>. I created it as I was first learning
				web development, so a lot of the code isn't exactly top notch. But, it works.
			</p>
			<p>
				Check out the player{' '}
				<TextWithIcon
					Icon={LinkIcon}
					href='https://advanced-lottie-viewer.silveo.us/'
					inline
					newWindow
				>
					here
				</TextWithIcon>
				, it contains another example and some more controls. You can also find the code
				repository{' '}
				<TextWithIcon
					Icon={GitHubIcon}
					href='https://github.com/JoshSilveous/advanced-lottie-viewer'
					inline
					newWindow
				>
					here
				</TextWithIcon>
				.
			</p>
		</div>
	</div>
)
