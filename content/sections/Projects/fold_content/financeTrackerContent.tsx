import {
	FinanceTracker1Anim,
	FinanceTracker1Image,
	FinanceTracker2Anim,
	FinanceTracker2Image,
	FinanceTracker3Anim,
	GitHubIcon,
	LinkIcon,
	NextIcon,
	ReactIcon,
	SQLIcon,
	SassIcon,
	SupabaseIcon,
	TypeScriptIcon,
} from '@/assets'
import urls from '@/assets/image_urls'
import { TextWithIcon } from '@/components'
import { IFrameTriggerable } from '@/components/IFrameTriggerable/IFrameTriggerable'

export const financeTrackerContent = (
	<div className='fold finance-tracker'>
		<div className='col'>
			<div className='links'>
				<h3>Links</h3>
				<TextWithIcon
					Icon={LinkIcon}
					href='https://finances.silveo.us/login'
					newWindow
				>
					Deployment
				</TextWithIcon>
				<TextWithIcon
					Icon={GitHubIcon}
					href='https://github.com/JoshSilveous/finance-tracker'
					newWindow
				>
					GitHub
				</TextWithIcon>
			</div>
			<div className='tech'>
				<h3>Technologies</h3>
				<TextWithIcon Icon={NextIcon}>Next</TextWithIcon>
				<TextWithIcon Icon={TypeScriptIcon}>TypeScript</TextWithIcon>
				<TextWithIcon Icon={ReactIcon}>React</TextWithIcon>
				<TextWithIcon Icon={SassIcon}>Sass</TextWithIcon>
				<TextWithIcon Icon={SQLIcon}>SQL</TextWithIcon>
				<TextWithIcon Icon={SupabaseIcon}>Supabase</TextWithIcon>
			</div>
		</div>
		<div className='description'>
			<p>This is my proudest accomplishment in web development.</p>
			<p>
				If you look at my other projects, you can see that I'm <i>slightly</i>{' '}
				obsessed with creating tools to help people track their finances. This, right
				here, is the real deal version of all of that.
			</p>
			<p>
				Complete will a fully customizable dashboard, OAuth, tutorial system, and a
				PostgreSQL database, this thing looks beautiful and has a pretty complex
				database. I've put a ton of thought and effort into this (27,000 lines
				non-boilerplate code!), and I've learned a ton about React throughout the
				process.
			</p>
			<p>
				I think this project speaks for itself. I've included some images and
				description below, but I'd advise checking it out hands-on. You can create a
				temporary account, and use the application fully without entering any
				personal information, by using the "Sign in with Temporary Account" feature{' '}
				<TextWithIcon
					Icon={LinkIcon}
					href='https://finances.silveo.us/demo-login'
					inline
					newWindow
				>
					here
				</TextWithIcon>
				.{' '}
				<span className='dont_show_on_mobile'>
					Or, you check check out this demo below. Try dragging things around and
					clicking stuff!
				</span>
			</p>
			<IFrameTriggerable style={{ width: '900px', height: '600px' }}>
				<iframe
					className='dont_show_on_mobile'
					src='/finance-tracker-demo'
					width='900px'
					height='600px'
					style={{ border: 'none', borderRadius: '5px' }}
					title='Embedded example of my Finance Tracker website'
					loading='lazy'
				/>
			</IFrameTriggerable>
			<p className='dont_show_on_mobile' style={{ marginTop: '0', fontSize: '14px' }}>
				Note: this demo is a roughly cloned version of the real site, using
				pre-loaded data instead of a database. You may run into issues, and this is
				likely out-of-date. Once again I will plug the{' '}
				<TextWithIcon
					Icon={LinkIcon}
					href='https://finances.silveo.us/demo-login'
					inline
					newWindow
				>
					Full Site
				</TextWithIcon>{' '}
				if you haven't checked it out yet.
			</p>
			<h3>The Design / UI Features</h3>
			<p>
				I think I really nailed the design here. I tried to keep it simple, sleek,
				and modern. A good example of that is the tutorial/walkthrough that plays
				when you create your account, to help the user get familiar with the UI:
			</p>

			<div
				className='iframe-wrapper'
				style={{ maxWidth: '500px', margin: '20px auto' }}
			>
				<iframe
					loading='lazy'
					src='https://www.youtube.com/embed/IccSqE9kjvY'
					title='Finance Tracker Tutorial Demonstration'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
				/>
			</div>
			<p>
				When I'm designing the UI, I try to think of ways to break things as I go.
				Usually that ends with me spending hours on something that I thought would
				take 20 minutes, but the price is worth it (most of the time). I strive to
				make things flawless.
			</p>
			<p>
				It's all in the small details for me. If the interface you're using looks
				like a grid, you should be able to navigate vertically using Enter and Shift
				+ Enter, instead of just tab. If there's a popup, your keyboard focus should
				be moved to the popup, and the first and last focusable elements should exist
				in a loop. If there's a way to drag something into a different position, it
				should <i>feel</i> like you're actually grabbing and dragging the thing.
			</p>
			<div
				className='two_image_container'
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
					flexWrap: 'wrap',
					gap: '20px',
				}}
			>
				<FinanceTracker1Anim style={{ maxWidth: '500px' }} />
				<FinanceTracker2Anim style={{ maxWidth: '325px' }} />
			</div>
			<h3>Robust Saving System</h3>
			<p>
				Since I'm using Supabase's free tier for this project (and also because it's
				good UX), I created a clean way to collect changes that the user makes in the
				dashboard, and apply them once the user hits save.
			</p>
			<p>
				Unsaved changes are indicated by the{' '}
				<span style={{ color: '#83ff89' }}>green color</span>, which applies to value
				changes, sort order changes, and also when a user moves/resizes a tile or
				changes it's settings. Also, notice in the graphic below that the tiles
				showing account balances and category totals on the left are changing with
				the data as well.
			</p>
			<FinanceTracker3Anim style={{ width: '500px', margin: '0 auto' }} />
			<h3>Customizability</h3>
			<p>
				The main goal for this project is to create something that is{' '}
				<strong>as customizable</strong> as an Excel spreadsheet, but without all of
				the jankiness of Excel. That is quite an ambitious goal, and it takes a lot
				of hard thinking for me to come up with the features to accomplish that.
			</p>
			<p>
				The dashboard is fully customizable, and the user can add tiles and configure
				them however they'd like. Right now, the only tile (besides the transaction
				manager) is one called the <strong>Simple Values</strong> tile, which shows
				current values for your categories or accounts. With these, you can exclude
				specific categories and accounts, as well as select the date period you would
				like the data to pull from.
			</p>
			<p>
				For example, the configuration below will show me how much money I'm spending
				on each category since my last paycheck, excluding rent and car payments:
			</p>
			<div
				className='two_image_container'
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
					flexWrap: 'wrap',
					gap: '20px',
				}}
			>
				<FinanceTracker1Image style={{ maxWidth: '300px' }} />
				<FinanceTracker2Image style={{ maxWidth: '325px' }} />
			</div>
			<p>
				The logic for this tile was a bit of a mental challenge, because there is a
				two-week limit on how far into the past transactions will be loaded on the
				client (unless the user intentionally loads more). Because of this, the tile
				fetches the values from the database, then subtracts the "default" values
				that the client has loaded, and adds the "current" values back. This way, the
				tile will always be accurate, and can reflect when the user's actions in the
				transaction manager changes those values.
			</p>
			<h3>The Client Directly Queries the Database</h3>
			<p>WHAAATT??</p>
			<p>
				See, I really wanted to make this app very "modern". In my previous version
				of this idea, I built a fully functional backend myself, complete with a
				local SQL instance, type-checking middleware for API routes, and proper HTTP
				status codes. And while I recognize that a lot of companies like to keep
				reliable standards in place (which I don't mind), since this project is
				entirely new, I wanted to give bleeding-edge technology a try.
			</p>
			<p>
				As for the backend, I decided to use a relatively new service called{' '}
				<TextWithIcon Icon={LinkIcon} href='https://supabase.com/' inline newWindow>
					Supabase
				</TextWithIcon>
				. Supabase uses PostgreSQL (also referred to as Postgres) as it's database
				language, and provides it's own OAuth integrations to make setting it up a
				breeze. Now here's the part that I think is crazy: Supabase and PostgreSQL
				are designed to be queried from the <strong>Front End</strong>. That sentence
				alone might send shivers down an InfoSec pro's spine.
			</p>
			<p>
				See, PostgreSQL has a built in feature called{' '}
				<strong>Row-Level Security</strong>, which allows you to define policies on
				what actions a user can do in a database, and restrict the data that the user
				is returned. You can also implement triggers that check the type of data a
				table is receiving, and either accept or deny it based on some condition. You
				can define custom data types, check the structure of a JSON column input, you
				can even implement a system that allows users to share their data with
				eachother easily. If you set up your Postgres tables to strictly enforce
				access and schema validate all of your inputs, you take away the need for a
				server to exist between the client and the database.
			</p>
			<p>
				Maybe this idea isn't that crazy or new, but I find it pretty exciting. Even
				if a bad actor digs around into the frontend code and wants to do some
				damage, they can't. Everything is enforced by the database, and since there's
				no middleman, submitting and fetching data is a lightning fast process.
			</p>
			<h3>Plans for this project going forward</h3>
			<p>
				What I have here is really cool, but there is still a lot of features that
				I'm working on implementing and refining.
			</p>
			<p>
				For example, right now there is a custom history system in place that
				overrides the browser's default undo/redo process (Control+Z and
				Control+Alt+Z). This system keeps track of all of the changes you make within
				the transaction manager, meaning that you can undo/redo sort order changes,
				creating items, deleting items, as well as changing values. However, right
				now it is <i>slightly</i> janky. You can break it if you really try, by
				deleting/creating items and adjusting the values within them. I would like to
				fix that and expand this system to capture history for every interaction on
				the dashboard, including moving/resizing tiles.
			</p>
			<p>
				I'm also going to add different types of tiles the users can customize, such
				as graphs/charts that show whatever data you'd like, budgeting tools, and
				even maybe a little AI tile that gives you tips on how to cut back spending.
			</p>
			<p>
				And of course, I'd like to refactor some of the code. A lot of the stateful
				data and logic is abstracted into custom hooks, which is great, but those
				hooks are packed with a lot of somewhat confusing code that I'd like to
				organize.
			</p>
			<p>
				I would also like to add formal JSDoc descriptions to all of the parts of
				each hook that can be interacted with from the components. That would provide
				helpful tooltips when hovering over objects and functions while working with
				my code, which helps other developers (and future me) understand what the
				code is doing.
			</p>
		</div>
	</div>
)
