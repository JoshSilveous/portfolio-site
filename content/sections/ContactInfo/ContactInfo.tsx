import { EmailIcon, GitHubIcon, LinkedInIcon, PhoneIcon } from '@/assets'
import { TextWithIcon } from '@/components'
import './ContactInfo.scss'

export function ContactInfo() {
	return (
		<div className='section contact-info'>
			<a className='anchor' id='contact-info' />
			<h1>Contact Info</h1>
			<div>
				<TextWithIcon Icon={GitHubIcon} href='https://github.com/JoshSilveous' newWindow>
					<div className='container'>
						<div>GitHub</div>
						<div>-</div>
						<div>JoshSilveous</div>
					</div>
				</TextWithIcon>
				<TextWithIcon Icon={EmailIcon} href='mailto:Joshua@silveo.us' newWindow>
					<div className='container'>
						<div>Email</div>
						<div>-</div>
						<div>Joshua@silveo.us</div>
					</div>
				</TextWithIcon>
				<TextWithIcon
					Icon={LinkedInIcon}
					href='https://www.linkedin.com/in/joshua-silveous/'
					newWindow
				>
					<div className='container'>
						<div>LinkedIn</div>
						<div>-</div>
						<div>JoshSilveous</div>
					</div>
				</TextWithIcon>
				<TextWithIcon Icon={PhoneIcon} href='tel:+14197089217'>
					<div className='container'>
						<div>Phone</div>
						<div>-</div>
						<div>+1 (419) 708-9217</div>
					</div>
				</TextWithIcon>
				<p>
					Note: I have been getting <strong>a lot</strong> of spam calls since registering
					this domain, so if I do not answer right away, please leave a message!
				</p>
			</div>
		</div>
	)
}
