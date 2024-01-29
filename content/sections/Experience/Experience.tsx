import { FoldSwitcher } from '@/components'
import {
	cashierLomaLindas,
	itSupportSwanton,
	itSupportThermaTru,
	packageHandlerFedEx,
	sysAdminContractor,
	webDevContractor,
} from './fold_content'
import './Experience.scss'

export function Experience() {
	const folds: FoldSwitcherContent[] = [
		{
			title: (
				<div className='title-wrapper'>
					<div className='job-title'>
						<h2>Web Developer</h2>
					</div>
					<div className='company'>Freelance</div>
					<div className='timeframe'>
						<div className='start-month'>Feb 2021</div>
						<div className='divider'>-</div>
						<div className='end-month'>Present</div>
					</div>
				</div>
			),
			content: webDevContractor,
			anchor: 'experience/web-developer-freelance',
		},
		{
			title: (
				<div className='title-wrapper'>
					<div className='job-title'>
						<h2>IT Systems Admin</h2>
					</div>
					<div className='company'>Freelance</div>
					<div className='timeframe'>
						<div className='start-month'>Dec 2023</div>
						<div className='divider'>-</div>
						<div className='end-month'>Present</div>
					</div>
				</div>
			),
			content: sysAdminContractor,
			anchor: 'experience/system-admin-freelance',
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
			content: itSupportThermaTru,
			anchor: 'experience/it-support-therma-tru',
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
			content: itSupportSwanton,
			anchor: 'experience/it-support-swanton-schools',
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
			content: packageHandlerFedEx,
			anchor: 'experience/package-handler-fedex',
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
			content: cashierLomaLindas,
			anchor: 'experience/cashier-loma-lindas',
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
