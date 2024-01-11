import { GitHubIcon, LinkIcon, OfficeIcon, VBAIcon } from '../../../../../assets'
import { TextWithIcon } from '../../../../../components'

export const excellentFinanceTrackerContent = (
	<div className='fold advanced-lottie-viewer'>
		<div className='col'>
			<div className='links'>
				<h3>Links</h3>
				<TextWithIcon
					Icon={GitHubIcon}
					href='https://github.com/JoshSilveous/excellent-finance-tracker/'
					newWindow
				>
					GitHub
				</TextWithIcon>
			</div>
			<div className='tech'>
				<h3>Technologies</h3>
				<TextWithIcon Icon={OfficeIcon}>Office</TextWithIcon>
				<TextWithIcon Icon={VBAIcon}>VBA</TextWithIcon>
			</div>
		</div>
		<div className='description'>
			<p>text</p>
		</div>
	</div>
)
