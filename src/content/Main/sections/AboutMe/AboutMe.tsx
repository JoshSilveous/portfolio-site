import {
	// AboutMe1Image,
	BikeIcon,
	ControllerIcon,
	ExerciseIcon,
	GeocachingIcon,
	HikingIcon,
	MusicIcon,
	NutritionIcon,
} from '../../../../assets'
import { TextWithIcon } from '../../../../components'
import './AboutMe.scss'
export function AboutMe() {
	return (
		<div className='section about-me'>
			<a className='anchor' id='about-me' />
			<h1>About Me</h1>
			{/* <div className='col-container one'>
				<div className='col-left'> */}
			<div>
				<h2>Background</h2>
				<p>Hi! 👋</p>
				<p>
					My interest in technology has always been a theme in my life. Starting with
					programming books in eighth grade and evolving into building computers and
					interning at my school's IT department, my knack for technology led me to pursue
					an Information Technology degree at the University of Toledo. There, I gained
					exposure to various tech fields, but it was web development that resonated with
					me the most.
				</p>
				<p>
					This interest grew into a passion as I taught myself advanced JavaScript and
					engaged in personal projects. Today, web development is more than a hobby; it's
					the path I want to take in my professional life. With a blend of formal
					education and self-directed learning, I'm ready to start my career in the tech
					industry as a full-stack developer.
				</p>
			</div>
			{/* <div className='col-right'>
					<AboutMe1Image />
					<p>Note to self: take a more professional photo at some point</p>
				</div>
			</div> */}
			<div className='col-container two'>
				<div className='col-left'>
					<h2>Hobbies</h2>
					<TextWithIcon
						Icon={ExerciseIcon}
						iconStyle={{ marginRight: '10px' }}
						style={{ marginBottom: '5px' }}
					>
						Exercise
					</TextWithIcon>
					<TextWithIcon
						Icon={MusicIcon}
						iconStyle={{ marginRight: '10px' }}
						style={{ marginBottom: '5px' }}
					>
						Music Production
					</TextWithIcon>
					<TextWithIcon
						Icon={BikeIcon}
						iconStyle={{ marginRight: '10px' }}
						style={{ marginBottom: '5px' }}
					>
						Mountain Biking
					</TextWithIcon>
					<TextWithIcon
						Icon={HikingIcon}
						iconStyle={{ marginRight: '10px' }}
						style={{ marginBottom: '5px' }}
					>
						Hiking
					</TextWithIcon>
					<TextWithIcon
						Icon={ControllerIcon}
						iconStyle={{ marginRight: '10px' }}
						style={{ marginBottom: '5px' }}
					>
						Video Games
					</TextWithIcon>
					<TextWithIcon
						Icon={NutritionIcon}
						iconStyle={{ marginRight: '10px' }}
						style={{ marginBottom: '5px' }}
					>
						Nutrition
					</TextWithIcon>
					<TextWithIcon
						Icon={GeocachingIcon}
						iconStyle={{ marginRight: '10px' }}
						style={{ marginBottom: '5px' }}
					>
						Geocaching
					</TextWithIcon>
				</div>
				<div className='col-right'>
					<h2>Goals</h2>
					<p>
						Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
						Blah{' '}
					</p>
				</div>
			</div>
		</div>
	)
}
