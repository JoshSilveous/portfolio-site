// This allows me to abstract 'src' logic from the the pages. The developer can just import an image as a component, and not worry about managing image sources.

import React from 'react'
import { ReactComponent as HDIcon } from './hd.svg'
import './genImageComponent.scss'

/**
 * Generates a re-usable <img> component. Created to allow abstraction of the `src` and `alt` tags from the page developer.
 * @param srcCompressed The file path to the compressed image (such as `"/src/assets/images/image.jpg"`)
 * @param srcFull The file path to the uncompressed image
 * @param alt The alternative text for screenreaders
 * @param title The title of the image, displays on hover
 * @returns A JSX component that can be implemented like this:
 *
 * ```jsx
 * <BrochureComponent style={{width: '100%'}} />
 * ```
 */
export function genImageComponent(
	srcCompressed: string,
	srcFull: string,
	alt: string,
	title: string
) {
	return function (
		props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
	) {
		return (
			<div className='image-component' {...props}>
				<img loading='lazy' title={title} src={srcCompressed} alt={alt} />
				<div
					className='fullscreen-button'
					onClick={() => {
						window.open(srcFull, '_blank')
					}}
				>
					<HDIcon />
				</div>
			</div>
		)
	}
}
