import { createPopup } from '../createPopup/createPopup'

export function promptError(
	context: string,
	errorMsg: string,
	instructions: string,
	onClose?: () => void
) {
	createPopup(
		<div>
			<h2>{context}</h2>
			<h4>{errorMsg.toUpperCase()}</h4>
			<hr />
			<p>{instructions}</p>
		</div>,
		'error',
		onClose
	).trigger()
}
