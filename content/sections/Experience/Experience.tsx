import { FoldSwitcher } from '@/components'
import './Experience.scss'

export function Experience() {
	const folds: FoldSwitcherContent[] = [
		{
			title: (
				<div className='title-wrapper'>
					<div className='job-title'>
						<h2>Web Developer</h2>
					</div>
					<div className='company'>Contractor</div>
					<div className='timeframe'>
						<div className='start-month'>May 2019</div>
						<div className='divider'>-</div>
						<div className='end-month'>Jun 2020</div>
					</div>
				</div>
			),
			content: 'hello!',
			anchor: 'experience/therma-tru',
		},
		{
			title: (
				<div className='title-wrapper'>
					<div className='job-title'>
						<h2>IT Systems Admin</h2>
					</div>
					<div className='company'>Contractor</div>
					<div className='timeframe'>
						<div className='start-month'>Dec 2023</div>
						<div className='divider'>-</div>
						<div className='end-month'>Present</div>
					</div>
				</div>
			),
			content: 'hello!',
			anchor: 'experience/therma-tru',
		},
		{
			title: (
				<div className='title-wrapper'>
					<div className='job-title'>
						<h2>IT Support</h2>
					</div>
					<div className='company'>Therma-Tru</div>
					<div className='timeframe'>
						<div className='start-month'>May 2022</div>
						<div className='divider'>-</div>
						<div className='end-month'>Present</div>
					</div>
				</div>
			),
			content: 'hello!',
			anchor: 'experience/therma-tru',
		},
		{
			title: (
				<div className='title-wrapper'>
					<div className='job-title'>
						<h2>IT Support</h2>
					</div>
					<div className='company'>Swanton Local Schools</div>
					<div className='timeframe'>
						<div className='start-month'>Jun 2016</div>
						<div className='divider'>-</div>
						<div className='end-month'>Aug 2019</div>
					</div>
				</div>
			),
			content: 'hello!',
			anchor: 'experience/therma-tru',
		},
		{
			title: (
				<div className='title-wrapper'>
					<div className='job-title'>
						<h2>Package Handler</h2>
					</div>
					<div className='company'>FedEx Ground</div>
					<div className='timeframe'>
						<div className='start-month'>Jun 2020</div>
						<div className='divider'>-</div>
						<div className='end-month'>May 2022</div>
					</div>
				</div>
			),
			content: 'hello!',
			anchor: 'experience/therma-tru',
		},
		{
			title: (
				<div className='title-wrapper'>
					<div className='job-title'>
						<h2>Cashier</h2>
					</div>
					<div className='company'>Loma Linda's Mexican Restaurant</div>
					<div className='timeframe'>
						<div className='start-month'>Feb 2019</div>
						<div className='divider'>-</div>
						<div className='end-month'>May 2020</div>
					</div>
				</div>
			),
			content: 'hello!',
			anchor: 'experience/therma-tru',
		},
	]

	return (
		<div className='section experience'>
			<a className='anchor' id='experience' />
			<h1>Experience</h1>

			<FoldSwitcher folds={folds} />
		</div>
	)
}
