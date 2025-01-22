import {
	BikeIcon,
	ControllerIcon,
	EducationIcon,
	ExerciseIcon,
	GeocachingIcon,
	HikingIcon,
	MusicIcon,
	NutritionIcon,
} from '@/assets'
import { TextWithIcon } from '@/components'
import './AboutMe.scss'
export function AboutMe() {
	return (
		<div className='section about-me'>
			<a className='anchor' id='about-me' />
			<h1>About Me</h1>
			<div>
				<p>Hi! 👋</p>
				<p>
					My interest in technology has always been a theme in my life. Starting
					with programming books in eighth grade and evolving into building
					computers and interning at my school&apos;s IT department, my knack for
					technology led me to pursue an Information Technology degree at the
					University of Toledo. There, I gained exposure to various tech fields,
					but it was web development that resonated with me the most.
				</p>
				<p>
					This interest grew into a passion as I taught myself advanced JavaScript
					and engaged in personal projects. Today, web development is more than a
					hobby; it&apos;s the path I want to take in my professional life. With a
					blend of formal education and self-directed learning, I&apos;m ready to
					start my career in the tech industry as a web developer.
				</p>
				<br />
				<p style={{ marginBottom: '0px' }}>
					<strong>
						So, are you a front-end developer? Or are you full stack?
					</strong>
				</p>
				<p style={{ marginTop: '5px' }}>
					I am a <u>front-end developer with back-end capabilities</u>. Much of my
					knowledge resides in front-end technologies (React, TypeScript, Sass,
					etc.), but I also know Relational Database tech (SQL) very well. I can
					also create type-safe APIs using Node.js and Express.js, though my
					back-end knowledge doesn&apos;t extend too far past that currently.
				</p>
			</div>
			<div className='col-container two'>
				<div className='col-right'>
					<h2>Education</h2>
					<TextWithIcon Icon={EducationIcon} iconStyle={{ marginRight: '10px' }}>
						<div>
							<div>
								<strong>Information Technology</strong>
							</div>
							<div style={{ fontSize: '14px' }}>Bachelor&apos;s Degree</div>
							<div style={{ fontSize: '14px' }}>
								<i>The University of Toledo</i>
							</div>
						</div>
					</TextWithIcon>
				</div>
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
			</div>
		</div>
	)
}
