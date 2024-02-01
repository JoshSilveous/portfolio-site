import {
	Excel1Image,
	Excel2Image,
	Excel3Image,
	Excel4Image,
	Excel5Image,
	Excel6Image,
	GitHubIcon,
	ImageIcon,
	OfficeIcon,
	VBAIcon,
} from '@/assets'
import urls from '@/assets/image_urls'
import { TextWithIcon } from '@/components'

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
			<p>
				For years now, I've been keeping track of my finances with excel. I use it to track
				my checking and savings accounts, as well as my credit card, so that I can make sure
				I'm being responsible with my money.
			</p>
			<p>
				One day, I discovered that Excel had <i>scripting</i>, using VBA (Visual Basic for
				Applications), and decided to automate all of the stuff I was doing manually, such
				as creating/removing different categories, displaying that data with graphs,
				creating new pages for each pay period, etc. I also wanted to make this "product"
				very customizable and user friendly, so that I could send this template to other
				people for their own usage.
				<br />
				<br />
				<strong>All of the forms and code used in this project is custom.</strong>
			</p>
			<h3>Usage</h3>
			<p>
				When you launch my template file, you will be given a form to fill out, which allows
				you to customize how you want to track your finances.
			</p>
			<p>
				First you select the interval length you would like to use, usually depending on how
				often you get paid, as well as the first date you would like to begin tracking.
			</p>
			<div
				style={{
					display: 'flex',
					gap: '20px',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
				}}
			>
				<div style={{ maxWidth: 'calc(50% - 10px)', minWidth: '350px' }}>
					<Excel1Image style={{ maxWidth: '400px' }} />
				</div>
				<div style={{ maxWidth: 'calc(50% - 10px)', minWidth: '350px' }}>
					<Excel2Image style={{ maxWidth: '300px' }} />
				</div>
			</div>
			<br />
			<br />
			<p>
				Then, you enter the <strong>Categories</strong> you would like to track, as well as
				the different <strong>Accounts</strong> you'd like to keep track of. Both of these
				can be easily changed later.
			</p>
			<div
				style={{
					display: 'flex',
					gap: '20px',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
				}}
			>
				<div style={{ maxWidth: 'calc(50% - 10px)', minWidth: '350px' }}>
					<Excel3Image />
				</div>
				<div style={{ maxWidth: 'calc(50% - 10px)', minWidth: '350px' }}>
					<Excel4Image />
				</div>
			</div>
			<br />
			<br />
			<p>
				That's it! Now you can track your finances as you please. Each of the{' '}
				<strong>Date</strong>, <strong>Category</strong>, and <strong>Account</strong> cells
				have built-in autocomplete and drop-down menus, which makes entering information a
				breeze. You can also generate next interval's page with the click of a button, and
				see graphs showing where your money is going.
			</p>
			<Excel5Image />
			<br />
			<br />
			<p>
				There is also a <strong>Control</strong> page, which can be used to edit Categories
				and Accounts. Any changes made will ripple through the spreadsheet automatically,
				you won't ever have to edit any formulas yourself.
				<br />
				You can also edit the <strong>theme</strong> of the page here, with some presets
				available, selected by myself.
			</p>
			<Excel6Image />
			<br />
			<br />
			<p>
				Finally, there is also an Overview page, which graphs your data throughout the
				entire sheet, giving you a better glimpse of your overall money trends.{' '}
				<TextWithIcon
					Icon={ImageIcon}
					href={urls.excel_7 as unknown as string}
					inline
					newWindow
				>
					Here is an image of the overview page
				</TextWithIcon>
				, it's too large to reasonably fit here.
			</p>
			<h3>Wrapping up</h3>
			<p>
				Overall, this project was a ton of work. This took me 2-3 months of fairly
				consistent work to create, as I had never used VBA before. This language has a ton
				of quirks and odd behavior I had to work around, I don't think it was meant for a
				project of this scale.
			</p>
			<p>
				It took <strong>a lot</strong> of code to implement all of the features I wanted
				(and circumvent all of the strange VBA bugs I encountered), but I ended up
				succeeding with this project. You can use it to create a custom excel experience,
				complete with graphs and dropdown menus. It is extremely easy to edit things like
				categories and accounts, and you can see those changes apply to the entire sheet.
				And you can do it all, <i>without entering a single formula</i>.
			</p>
			<p>
				Is VBA a useful skill to have? <strong>Probably not</strong>.<br />
				<br /> Microsoft just implemented Python scripting into Excel, so I have a feeling
				VBA's dwindling relevance will disappear soon enough. Still, it was a neat learning
				experience, and many of my friends use this "product" themselves, which makes me
				happy.
			</p>
		</div>
	</div>
)
