import './Skills.scss'
import { useTabSwitcher } from '../../../../functions/useTabSwitcher'
import { backendContent, frontendContent, otherContent } from './tab_content'
import { SkillSectionContent } from './tab_content/SkillSectionContent'
export function Skills() {
	const tabSwitcher = useTabSwitcher([
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
	])

	return (
		<div className='section skills'>
			<a className='anchor' id='skills' />
			<h1>Skills</h1>
			{tabSwitcher}
		</div>
	)
}
