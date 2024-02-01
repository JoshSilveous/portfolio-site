import {
	PhotoshopIcon,
	AfterEffectsIcon,
	IllustratorIcon,
	VBAIcon,
	OfficeIcon,
	BlenderIcon,
	BrochureFrontImage,
	BrochureBackImage,
	PosterboardImage,
	ColaImage,
	VaseImage,
	ProjectsIcon,
} from '@/assets'
import { TextWithIcon } from '@/components'
export const otherContent: SkillSectionInfo[] = [
	{
		name: 'Photoshop',
		icon: <PhotoshopIcon />,
		description:
			'Adobe Photoshop is a powerful graphics editing software used for image manipulation, design, and digital art creation.',
		additional_content: (
			<>
				I have used Photoshop countless times. Regarding web development, I have used it
				to place consistent graphics on images and repair minor imperfections.
			</>
		),
	},
	{
		name: 'After Effects',
		icon: <AfterEffectsIcon />,
		description:
			'Adobe After Effects is a motion graphics and visual effects software used for creating animations, compositing, and video post-production.',
		additional_content: (
			<>
				I have advanced hobby experience with After Effects, such as 3D motion
				tracking and compositing. In high school, I would use it with Blender to create
				awesome CGI effects, such as this CGI Monkey animation:
				<br />
				<div className='iframe-wrapper' style={{ maxWidth: '500px', margin: '20px auto' }}>
					<iframe
						loading='lazy'
						src='https://www.youtube.com/embed/2OkpcVEsZBo'
						title='After Effects + Blender CGI Demonstration'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					/>
				</div>
				<br />I also use After Effects to animate Lottie SVG graphics for websites, such as
				those shown in my{' '}
				<TextWithIcon Icon={ProjectsIcon} href='#projects/advanced-lottie-viewer' inline>
					Advanced Lottie Viewer
				</TextWithIcon>{' '}
				project.
			</>
		),
	},
	{
		name: 'Illustrator',
		icon: <IllustratorIcon />,
		description:
			'Adobe Illustrator is a vector graphics design software used for creating scalable and high-quality illustrations, logos, and graphics.',
		additional_content: (
			<>
				I mainly use Illustrator to create and edit SVG designs, such as those shown in my{' '}
				<TextWithIcon Icon={ProjectsIcon} href='#projects/advanced-lottie-viewer' inline>
					Advanced Lottie Viewer
				</TextWithIcon>{' '}
				project.
				<br />I have also used Illustrator to create complex print designs, such as the
				posterboard and brochures for my college capstone project:
				<div className='two-col-container'>
					<div className='col'>
						<h3>Brochure</h3>
						<BrochureFrontImage style={{ marginBottom: '10px' }} />
						<BrochureBackImage />
					</div>
					<div className='col'>
						<h3>Posterboard</h3>
						<PosterboardImage />
					</div>
				</div>
			</>
		),
	},
	{
		name: 'Blender',
		icon: <BlenderIcon />,
		description:
			'Blender is a versatile open-source 3D computer graphics software used for modeling, animation, rendering, and creating visual effects.',
		additional_content: (
			<>
				I picked up Blender animation for fun in high school, and I have spent many hours
				learning to do neat things with it. Most of my time was spent learning rendering
				techniques and photorealistic design for CGI, but I've also used blender to create
				models for many 3D printing projects.
				<br />
				<br />
				In regards to web development, I could use this skill to create complex Three.js
				screens or other 3D graphics for web applications. Though admittedly, I haven't
				dabbled with it yet, but I'm sure I could learn Three.js if needed.
				<br />
				<br />
				Below are some examples of stuff I've created with Blender.
				<br />
				<div className='two-col-container'>
					<div className='col'>
						<ColaImage style={{ marginBottom: '10px' }} />
						<div className='iframe-wrapper'>
							<iframe
								src='https://www.youtube.com/embed/BrXJomWK94Y'
								title='After Effects &amp; Blender CGI Demonstration - Interstellar TARS'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								allowFullScreen
							/>
						</div>
					</div>
					<div className='col'>
						<VaseImage style={{ marginBottom: '10px' }} />
						<div className='iframe-wrapper'>
							<iframe
								loading='lazy'
								src='https://www.youtube.com/embed/2OkpcVEsZBo'
								title='After Effects &amp; Blender CGI Demonstration - Monkey Head'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								allowFullScreen
							/>
						</div>
					</div>
				</div>
			</>
		),
	},
	{
		name: 'Office',
		icon: <OfficeIcon />,
		description:
			'Microsoft Office is a suite of productivity software, including applications like Word, Excel, PowerPoint, and Outlook, widely used for document creation, data analysis, and communication.',
		additional_content: (
			<>
				I have an advanced knowledge of Microsoft Office products, especially Excel. I have
				used excel for many reasons, such as tracking personal finances or graphing data.
			</>
		),
	},
	{
		name: 'VBA',
		icon: <VBAIcon />,
		description:
			'VBA is a programming language developed by Microsoft for automating tasks within applications like Excel, Word, and Access.',
		additional_content: (
			<>
				I took a deep dive into VBA for a few months, with the goal of creating a personal
				finance tracker in Excel that would automatically generate new pages per interval
				(weekly, biweekly, etc.), and automatically update all formulas, so the end user
				never has to.
				<br />
				<br />I know how to create dialog / model popups, perform complex loops, and
				automate rigorous tasks within Excel using VBA. Check out my{' '}
				<TextWithIcon Icon={ProjectsIcon} href='#projects/excellent-finance-tracker' inline>
					Excel-lent Finance Tracker
				</TextWithIcon>{' '}
				project for a closer look at my VBA skills.
			</>
		),
	},
]
