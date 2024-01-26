'use client'
import { genImageComponent } from './ImageComponent/genImageComponent'
import urls from './image_urls'

export { default as AboutMeIcon } from '@/public/navbar_icons/about-me.svg'
export { default as SkillsIcon } from '@/public/navbar_icons/skills.svg'
export { default as ProjectsIcon } from '@/public/navbar_icons/projects.svg'
export { default as ExperienceIcon } from '@/public/navbar_icons/experience.svg'
export { default as ContactInfoIcon } from '@/public/navbar_icons/contact-info.svg'

export { default as CSSIcon } from '@/public/skills_icons/css.svg'
export { default as HTMLIcon } from '@/public/skills_icons/html.svg'
export { default as JavaScriptIcon } from '@/public/skills_icons/javascript.svg'
export { default as ReactRouterIcon } from '@/public/skills_icons/react_router.svg'
export { default as ReactIcon } from '@/public/skills_icons/react.svg'
export { default as SassIcon } from '@/public/skills_icons/sass.svg'
export { default as TypeScriptIcon } from '@/public/skills_icons/typescript.svg'
export { default as LottieIcon } from '@/public/skills_icons/lottie.svg'
export { default as NextIcon } from '@/public/skills_icons/next.svg'

export { default as NodeIcon } from '@/public/skills_icons/node.svg'
export { default as ExpressIcon } from '@/public/skills_icons/express.svg'
export { default as SQLIcon } from '@/public/skills_icons/sql.svg'
export { default as ElectronIcon } from '@/public/skills_icons/electron.svg'
export { default as PHPIcon } from '@/public/skills_icons/php.svg'
export { default as JestIcon } from '@/public/skills_icons/jest.svg'
export { default as JoiIcon } from '@/public/skills_icons/joi.svg'

export { default as PhotoshopIcon } from '@/public/skills_icons/photoshop.svg'
export { default as AfterEffectsIcon } from '@/public/skills_icons/after_effects.svg'
export { default as IllustratorIcon } from '@/public/skills_icons/illustrator.svg'
export { default as BlenderIcon } from '@/public/skills_icons/blender.svg'
export { default as VBAIcon } from '@/public/skills_icons/vba.svg'
export { default as OfficeIcon } from '@/public/skills_icons/office.svg'

export { default as FoldIcon } from '@/public/misc/fold.svg'
export { default as LinkIcon } from '@/public/misc/link.svg'
export { default as PDFIcon } from '@/public/misc/pdf.svg'
export { default as ImageIcon } from '@/public/misc/image.svg'
export { default as FullscreenIcon } from '@/public/misc/fullscreen.svg'
export { default as LoadingAnim } from '@/public/misc/loading_anim.svg'

export { default as BikeIcon } from '@/public/hobbies_icons/bike.svg'
export { default as ControllerIcon } from '@/public/hobbies_icons/controller.svg'
export { default as ExerciseIcon } from '@/public/hobbies_icons/exercise.svg'
export { default as GeocachingIcon } from '@/public/hobbies_icons/geocaching.svg'
export { default as HikingIcon } from '@/public/hobbies_icons/hiking.svg'
export { default as MusicIcon } from '@/public/hobbies_icons/music.svg'
export { default as NutritionIcon } from '@/public/hobbies_icons/nutrition.svg'

export { default as GitHubIcon } from '@/public/contact_icons/github.svg'
export { default as LinkedInIcon } from '@/public/contact_icons/linkedin.svg'
export { default as EmailIcon } from '@/public/contact_icons/email.svg'
export { default as PhoneIcon } from '@/public/contact_icons/phone.svg'

export const BrochureFrontImage = genImageComponent(
	urls.brochure_front_cmpr,
	urls.brochure_front_full,
	'An image of the front of my brochure design.',
	'Front of Brochure'
)
export const BrochureBackImage = genImageComponent(
	urls.brochure_back_cmpr,
	urls.brochure_back_full,
	'An image of the back of my brochure design.',
	'Back of Brochure'
)
export const PosterboardImage = genImageComponent(
	urls.posterboard_cmpr,
	urls.posterboard_full,
	'An image of my posterboard design for my group.',
	'Posterboard'
)
export const ColaImage = genImageComponent(
	urls.cola_cmpr,
	urls.cola_full,
	'An artistic rendering of Nuka-Cola bottles from the Fallout universe, with dramatic lighting and effects.',
	'Fallout Nuka-Cola Bottles'
)
export const VaseImage = genImageComponent(
	urls.vases_cmpr,
	urls.vases_full,
	'A CGI rendering couple of vases filled with colorful liquids, with a natural lighting peeking in from a window.',
	'Vases'
)

export const FretboardVis1Image = genImageComponent(
	urls.fretboard_vis_1_cmpr,
	urls.fretboard_vis_1_full,
	'A screenshot of my first fretboard visualizer. It looks amateurish, with wacky colors and default HTML styles',
	'First Iteration of Fretboard Visualizer'
)
export const FretboardVis2Image = genImageComponent(
	urls.fretboard_vis_2_cmpr,
	urls.fretboard_vis_2_full,
	'A screenshot of my second fretboard visualizer.',
	'Second Iteration of Fretboard Visualizer'
)
export const FretboardVis3Image = genImageComponent(
	urls.fretboard_vis_3_cmpr,
	urls.fretboard_vis_3_full,
	'A screenshot of my third fretboard visualizer.',
	'Third Iteration of Fretboard Visualizer'
)
export const GradingAppUI1Image = genImageComponent(
	urls.grading_app_ui_1_cmpr,
	urls.grading_app_ui_1_full,
	"A screenshot of the UI for my Grading Application, featuring a table-oriented layout showing a class, it's students, and their grades.",
	'Grading Application Main Class UI'
)
export const GradingAppUI2Image = genImageComponent(
	urls.grading_app_ui_2_cmpr,
	urls.grading_app_ui_2_full,
	'A screenshot of the UI for my Grading Application, featuring a form for creating new assignments. The form contains the name, description, type, extra credit, and max points fields.',
	'Grading Application New Assignment UI'
)
export const GradingAppUI3Image = genImageComponent(
	urls.grading_app_ui_3_cmpr,
	urls.grading_app_ui_3_full,
	'A screenshot of the UI for my Grading Application, featuring a menu for adding a student to a class.',
	'Grading Application Add Student UI'
)

export const Excel1Image = genImageComponent(
	urls.excel_1,
	urls.excel_1,
	'A screenshot of my custom excel tracker form, prompting the user to select "Weekly", "Biweekly", or "Monthly"',
	'Custom Excel Finance Tracker'
)

export const Excel2Image = genImageComponent(
	urls.excel_2,
	urls.excel_2,
	'A screenshot of my custom excel tracker form, prompting the user to select a date using a custom calendar widget',
	'Custom Excel Finance Tracker'
)
export const Excel3Image = genImageComponent(
	urls.excel_3,
	urls.excel_3,
	'A screenshot of my custom excel tracker form, prompting the user to enter categories',
	'Custom Excel Finance Tracker'
)
export const Excel4Image = genImageComponent(
	urls.excel_4,
	urls.excel_4,
	'A screenshot of my custom excel tracker form, prompting the user to enter accounts and their starting values',
	'Custom Excel Finance Tracker'
)
export const Excel5Image = genImageComponent(
	urls.excel_5_cmpr,
	urls.excel_5_full,
	'A screenshot of my custom excel trackers page, with an interface allowing you to enter data.',
	'Custom Excel Finance Tracker'
)

export const Excel6Image = genImageComponent(
	urls.excel_6_cmpr,
	urls.excel_6_full,
	'A screenshot of my custom excel trackers page, with an interface allowing you to change categories, accounts, and theme.',
	'Custom Excel Finance Tracker'
)

export const AboutMe1Image = genImageComponent(
	urls.about_me_1_cmpr,
	urls.about_me_1_full,
	'A picture of myself.',
	'About Me'
)
