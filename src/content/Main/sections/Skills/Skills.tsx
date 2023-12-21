import './Skills.scss'

import { backendContent, frontendContent, otherContent } from './tab_content'
import { SkillSectionContent } from './SkillSectionContent'
import { TabSwitcher } from '../../../../components'
export function Skills() {
	const tabs: TabSwitcherContent[] = [
		{
			name: 'Front End',
			content: <SkillSectionContent sections={frontendContent} />,
		},
		{
			name: 'Back End',
			content: <SkillSectionContent sections={backendContent} />,
		},
		{
			name: 'Other',
			content: <SkillSectionContent sections={otherContent} />,
		},
	]

	return (
		<div className='section skills'>
			<a className='anchor' id='skills' />
			<h1>Skills</h1>
			<TabSwitcher tabs={tabs} />
		</div>
	)
}
