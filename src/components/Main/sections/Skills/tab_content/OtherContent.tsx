import { useState } from 'react'
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
} from '../../../../../assets'
export function OtherContent() {
	const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

	const sections: SkillSectionInfo[] = [
		{
			name: 'Photoshop',
			icon: <PhotoshopIcon />,
			description:
				'Adobe Photoshop is a powerful graphics editing software used for image manipulation, design, and digital art creation.',
			paragraph:
				'I have used Photoshop countless times. In regards to web development, I have used it to place consistent graphics on images and repair minor imperfections.',
		},
		{
			name: 'After Effects',
			icon: <AfterEffectsIcon />,
			description:
				'Adobe After Effects is a motion graphics and visual effects software used for creating animations, compositing, and video post-production.',
			paragraph: (
				<>
					I have pretty advanced hobby experience with After Effects, such as 3D motion
					tracking and compositing. In high school, I would use it with Blender to create
					awesome CGI effects, such as this CGI Monkey animation:
					<br />
					<div
						className='iframe_wrapper'
						style={{
							display: 'flex',
							justifyContent: 'center',
							margin: '15px 0 15px 0',
						}}
					>
						<iframe
							style={{
								width: '500px',
								height: '281px',
								minWidth: '250px',
								minHeight: '140px',
								border: 'none',
								boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.34)',
							}}
							loading='lazy'
							src='https://www.youtube.com/embed/2OkpcVEsZBo'
							title='After Effects + Blender CGI Demonstration'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
						/>
					</div>
					<br />I also use After Effects to animate Lottie SVG graphics for websites, such
					as those shown in my{' '}
					<a href='#projects/advanced-lottie-viewer'>Advanced Lottie Viewer</a> project.
				</>
			),
		},
		{
			name: 'Illustrator',
			icon: <IllustratorIcon />,
			description:
				'Adobe Illustrator is a vector graphics design software used for creating scalable and high-quality illustrations, logos, and graphics.',
			paragraph: (
				<>
					I mainly use Illustrator to create and edit SVG designs, such as those shown in
					my <a href='#projects/advanced-lottie-viewer'>Advanced Lottie Viewer</a>{' '}
					project.
					<br />I have also used Illustrator to create complex print designs, such as the
					posterboard and brochures for my college capstone project:
					<div style={{ display: 'flex', gap: '10px' }}>
						<div style={{ width: '50%', textAlign: 'center' }}>
							<h3>Brochure</h3>
							<BrochureFrontImage style={{ width: '100%' }} />
							<BrochureBackImage style={{ width: '100%' }} />
						</div>
						<div style={{ width: '50%', textAlign: 'center' }}>
							<h3>Posterboard</h3>
							<PosterboardImage style={{ width: '100%' }} />
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
			paragraph: (
				<>
					I picked up Blender animation for fun in high school, and have spent many hours
					learning to do neat things with it. Most of my time was spent learning rendering
					techniques and photorealistic design for CGI, but I've also used blender to
					create models for many 3D printing projects.
					<br />
					<br />
					In regards to web development, I could use this skill to create complex Three.js
					screens or other 3D graphics for web applications. Though admittedly, I haven't
					dabbled with it yet, but I'm sure I could learn Three.js if needed.
					<br />
					<br />
					Below are some examples of stuff I've created with Blender.
				</>
			),
		},
		{
			name: 'Office',
			icon: <OfficeIcon />,
			description:
				'Microsoft Office is a suite of productivity software, including applications like Word, Excel, PowerPoint, and Outlook, widely used for document creation, data analysis, and communication.',
			paragraph: '',
		},
		{
			name: 'VBA',
			icon: <VBAIcon />,
			description:
				'VBA is a programming language developed by Microsoft for automating tasks within applications like Excel, Word, and Access.',
			paragraph: '',
		},
	]
	return (
		<div className='content'>
			<div className='icon-row'>
				{sections.map((section, index) => {
					return (
						<div
							className={`icon-container ${
								index === currentSectionIndex ? 'active' : ''
							}`}
							onClick={() => setCurrentSectionIndex(index)}
						>
							{section.icon}
							<div className='label'>{section.name}</div>
						</div>
					)
				})}
			</div>
			<div className='description'>
				<h2>{sections[currentSectionIndex].name}</h2>
				<p>{sections[currentSectionIndex].description}</p>
				<p>{sections[currentSectionIndex].paragraph}</p>
			</div>
		</div>
	)
}
