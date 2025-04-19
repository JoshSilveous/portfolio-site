import { FoldSwitcher } from '@/components'
import { lomaLindas, swanton, thermatru, fedex, freelance } from './fold_content'
import './Experience.scss'

export function Experience() {
	const folds: FoldSwitcherContent[] = [
		{
			title: (
				<div className='title-wrapper'>
					<div className='job-title'>
						<h2>Web Developer, IT Support Specialist</h2>
					</div>
					<div className='company'>Therma-Tru</div>
					<div className='timeframe'>
						<div className='start-month'>May 2022</div>
						<div className='divider'>-</div>
						<div className='end-month'>Present</div>
					</div>
				</div>
			),
			content: thermatru,
			anchor: 'experience/therma-tru',
		},
		{
			title: (
				<div className='title-wrapper'>
					<div className='job-title'>
						<h2>Web Developer & Systems Administrator</h2>
					</div>
					<div className='company'>Freelance</div>
					<div className='timeframe'>
						<div className='start-month'>May 2022</div>
						<div className='divider'>-</div>
						<div className='end-month'>Present</div>
					</div>
				</div>
			),
			content: freelance,
			anchor: 'experience/freelance',
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
			content: swanton,
			anchor: 'experience/swanton-local-schools',
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
			content: fedex,
			anchor: 'experience/fedex',
		},
		{
			title: (
				<div className='title-wrapper'>
					<div className='job-title'>
						<h2>Cashier</h2>
					</div>
					<div className='company'>Loma Linda&apos;s Mexican Restaurant</div>
					<div className='timeframe'>
						<div className='start-month'>Feb 2019</div>
						<div className='divider'>-</div>
						<div className='end-month'>May 2020</div>
					</div>
				</div>
			),
			content: lomaLindas,
			anchor: 'experience/loma-lindas',
		},
	]

	return (
		<div className='section experience'>
			<a className='anchor' id='experience' />
			<h1>Experience</h1>
			<p style={{ marginTop: 0 }}>
				<i>Sorted by relevance</i>
			</p>

			<FoldSwitcher folds={folds} />
		</div>
	)
}
