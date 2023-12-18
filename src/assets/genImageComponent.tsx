// This allows me to abstract 'src' logic from the the pages. The developer can just import an image as a component, and not worry about managing image sources.

import React from 'react'

/**
 * Generates a re-usable <img> component. Created to allow abstraction of the `src` and `alt` tags from the page developer.
 * @param src The file path to the image (such as `"/src/assets/images/image.jpg"`)
 * @param alt The alternative text for screenreaders
 * @param title The title of the image, displays on hover
 * @returns A JSX component that can be implemented like this:
 *
 * ```jsx
 * <BrochureComponent style={{width: '100%'}} />
 * ```
 */
export function genImageComponent(src: string, alt: string, title: string) {
	return function (
		props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
	) {
		return <img loading='lazy' title={title} src={src} alt={alt} {...props} />
	}
}
