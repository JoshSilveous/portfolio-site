import './Skills.scss'
import { useTabSwitcher } from '../../../../functions/useTabSwitcher'
import { FrontEndContent, BackEndContent, OtherContent } from './tab_content'
export function Skills() {
	const tabSwitcher = useTabSwitcher([
		{
			name: 'Front End',
			id: 'front-end',
			content: <FrontEndContent />,
		},
		{
			name: 'Back End',
			id: 'back-end',
			content: <BackEndContent />,
		},
		{
			name: 'Other',
			id: 'other',
			content: <OtherContent />,
		},
	])

	return (
		<div className='section skills'>
			<a className='anchor' id='skills' />
			<h1>Skills</h1>
			{tabSwitcher}
			<p>
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah
			</p>
		</div>
	)
}
