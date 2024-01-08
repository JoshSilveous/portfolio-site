import { genImageComponent } from '../functions/ImageComponent/genImageComponent'
import urls from './images/urls'

export { ReactComponent as AboutMeIcon } from './navbar_icons/about-me.svg'
export { ReactComponent as SkillsIcon } from './navbar_icons/skills.svg'
export { ReactComponent as ProjectsIcon } from './navbar_icons/projects.svg'
export { ReactComponent as ExperienceIcon } from './navbar_icons/experience.svg'
export { ReactComponent as ContactInfoIcon } from './navbar_icons/contact-info.svg'

export { ReactComponent as CSSIcon } from './skills_icons/css.svg'
export { ReactComponent as HTMLIcon } from './skills_icons/html.svg'
export { ReactComponent as JavaScriptIcon } from './skills_icons/javascript.svg'
export { ReactComponent as ReactRouterIcon } from './skills_icons/react_router.svg'
export { ReactComponent as ReactIcon } from './skills_icons/react.svg'
export { ReactComponent as SassIcon } from './skills_icons/sass.svg'
export { ReactComponent as TypeScriptIcon } from './skills_icons/typescript.svg'
export { ReactComponent as LottieIcon } from './skills_icons/lottie.svg'

export { ReactComponent as NodeIcon } from './skills_icons/node.svg'
export { ReactComponent as ExpressIcon } from './skills_icons/express.svg'
export { ReactComponent as SQLIcon } from './skills_icons/sql.svg'
export { ReactComponent as ElectronIcon } from './skills_icons/electron.svg'
export { ReactComponent as PHPIcon } from './skills_icons/php.svg'
export { ReactComponent as JestIcon } from './skills_icons/jest.svg'

export { ReactComponent as PhotoshopIcon } from './skills_icons/photoshop.svg'
export { ReactComponent as AfterEffectsIcon } from './skills_icons/after_effects.svg'
export { ReactComponent as IllustratorIcon } from './skills_icons/illustrator.svg'
export { ReactComponent as BlenderIcon } from './skills_icons/blender.svg'
export { ReactComponent as VBAIcon } from './skills_icons/vba.svg'
export { ReactComponent as OfficeIcon } from './skills_icons/office.svg'

export { ReactComponent as FoldIcon } from './misc/fold.svg'
export { ReactComponent as GitHubIcon } from './misc/github.svg'
export { ReactComponent as LinkIcon } from './misc/link.svg'
export { ReactComponent as PDFIcon } from './misc/pdf.svg'

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
