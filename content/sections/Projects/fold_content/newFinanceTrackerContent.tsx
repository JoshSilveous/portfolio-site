import {
	ExpressIcon,
	GitHubIcon,
	JestIcon,
	JoiIcon,
	NodeIcon,
	ProjectsIcon,
	ReactIcon,
	SQLIcon,
	SassIcon,
	TypeScriptIcon,
} from '@/assets'
import { TextWithIcon } from '@/components'

export const newFinanceTrackerContent = (
	<div className='fold finance-tracker'>
		<iframe
			src='/finance-tracker-demo'
			width='100%'
			height='600px'
			style={{ border: 'none', borderRadius: '5px' }}
			title='Embedded Page'
			loading='lazy'
		></iframe>
	</div>
)
