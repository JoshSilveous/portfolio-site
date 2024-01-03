import { NodeIcon } from './assets'
/**
 * SVGR is an extension used in this project that allows SVGs to be imported as components, and rendered on the page (instead of using `<img>` tags).
 *
 * However, SVGR does NOT create unique IDs for IDs used within a SVG. This leads to an issue where, if IDs are used in a SVG element (for example, gradients and clipping masks), the **first** instance of the gradient/mask will be referenced for **every** render. If the first instance is *hidden*, every other instance of the SVG will also be hidden.
 *
 * This issue is being worked on... @link https://github.com/gregberge/svgr/issues/322
 *
 * For now, pre-rendering these SVGs at the top of the page in a hidden container (via `height: 0` and `overflow: hidden`, NOT `display: none`) will fix this.
 * @returns
 */
export function IconPreload() {
	return (
		<div style={{ height: '0px', overflow: 'hidden' }}>
			<NodeIcon />
		</div>
	)
}
