import { useEffect } from 'react'
import './LottieViewerIntegration.scss'
/*
    NOTE
    This is a poor integration of my old code used in my original advanced-lottie-viewer project, created many years ago. This code doesn't follow the React format or standards. I don't really have the time currently to update this code so that it's properly integrated into React.
*/

export function LottieViewerIntegration() {
	let jsonPath = 'https://assets8.lottiefiles.com/packages/lf20_qkv8saqk.json'
	let segments = [
		[0, 15, 0],
		[15, 90, 15, 0],
	]
	let loopAt = 1

	useEffect(() => {
		function lottieNonlinearHover(container, anim, timeframeArray, loopStart) {
			let inLoop = false
			let exitframe
			let exitStart

			container.addEventListener('mouseenter', () => {
				let isFirst = false
				for (let i = 0; i < timeframeArray.length; i++) {
					if (i == loopStart) {
						anim.loop = true
					}

					if (i == 0) {
						isFirst = true
					} else {
						isFirst = false
					}

					anim.playSegments([timeframeArray[i][0], timeframeArray[i][1]], isFirst)
				}
			})

			container.addEventListener('mouseleave', (e) => {
				anim.loop = false

				exitframe = Math.round(anim.currentFrame + anim.firstFrame)

				for (let i = 0; i < timeframeArray.length; i++) {
					if (exitframe > timeframeArray[i][0] && exitframe < timeframeArray[i][1]) {
						if (timeframeArray[i].length == 4) {
							exitStart = timeframeArray[i][2]
						} else {
							exitStart = exitframe
						}

						anim.playSegments(
							[exitStart, timeframeArray[i][timeframeArray[i].length - 1]],
							true
						)
					}
				}
			})
		}

		function render(jsonPath, segments, loopAt) {
			let container = document.querySelector('.lottie')

			let anim = bodymovin.loadAnimation({
				container: document.querySelector('.lottie'),
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: jsonPath,
			})

			lottieNonlinearHover(container, anim, segments, loopAt)

			let thisFrame
			let frameCount
			let currentSegment = 0

			let formSpeed = document.querySelector('#speed')

			formSpeed.addEventListener('input', (e) => {
				anim.setSpeed(formSpeed.value)
			})

			anim.addEventListener('data_ready', (e) => {
				frameCount = anim.totalFrames

				//Load bars for each segment
				let segmentHTML = ''
				for (let i = 0; i < segments.length; i++) {
					// Adds segment Entry bar
					segmentHTML =
						segmentHTML +
						'<span>Segment ' +
						i +
						'</span><div class="segprogbar" id="segment' +
						i +
						'"><span class="segmentprogbarcomplete" id="opengapprogsegment' +
						i +
						'"></span><span class="segmentprogbarcomplete" id="startgapprogsegment' +
						i +
						'"></span><span class="segmentprogbarcomplete" id="endgapprogsegment' +
						i +
						'"></span></div>'

					// Adds segment Exit bar
					segmentHTML =
						segmentHTML +
						'<div class="segprogbar" id="segmentexit' +
						i +
						'"><span class="segmentprogbarcomplete" id="opengapprogsegmentexit' +
						i +
						'"></span><span class="segmentprogbarcomplete" id="startgapprogsegmentexit' +
						i +
						'"></span><span class="segmentprogbarcomplete" id="endgapprogsegmentexit' +
						i +
						'"></span></div><div class="gapbar"></div> <div class="progbar" id="total"><span class="progbarcomplete" id="progtotal" style="margin-top:-30px;"></span></div>'
				}
				document.querySelector('#segmentprog').innerHTML = segmentHTML
				for (let i = 0; i < segments.length; i++) {
					// Styles segment entry bar
					let startPct = (segments[i][0] / frameCount) * 100
					let endPct = (segments[i][1] / frameCount) * 100
					document.querySelector('#opengapprogsegment' + i).style =
						'background-color: #d1d1d5; width:' + startPct + '%;'
					document.querySelector('#startgapprogsegment' + i).style =
						'background-color: #4896c0; width:' + (endPct - startPct) + '%;'
					document.querySelector('#endgapprogsegment' + i).style =
						'background-color: #d1d1d5; width:' + (100 - endPct) + '%;'

					// Styles segment exit bar
					let startPctExit = (segments[i][2] / frameCount) * 100
					let endPctExit = (segments[i][3] / frameCount) * 100

					if (segments[i].length < 4) {
						startPctExit = (segments[i][0] / frameCount) * 100
						endPctExit = (segments[i][1] / frameCount) * 100
					}
					document.querySelector('#opengapprogsegmentexit' + i).style =
						'background-color: #d1d1d5; width:' + startPctExit + '%;'
					document.querySelector('#startgapprogsegmentexit' + i).style =
						'background-color: #e55274; width:' + (endPctExit - startPctExit) + '%;'
					document.querySelector('#endgapprogsegmentexit' + i).style =
						'background-color: #d1d1d5; width:' + (100 - endPctExit) + '%;'
				}
			})

			anim.addEventListener('enterFrame', (e) => {
				thisFrame = Math.round(anim.currentFrame + anim.firstFrame)
				document.querySelector('#curFrame').innerHTML = thisFrame
				document.querySelector('#totFrame').innerHTML = frameCount

				//document.querySelector('#progtotal').style.width = ((thisFrame/frameCount)*100) + "%";
				for (let i = 0; i < segments.length; i++) {
					if (thisFrame >= segments[i][0] && thisFrame < segments[i][1]) {
						document.querySelector('#curSegment').innerHTML = i
						currentSegment = i
					}
				}

				let progBarList = document.querySelectorAll('#progtotal')
				for (let i = 0; i < progBarList.length; i++) {
					progBarList[i].style.width = (thisFrame / frameCount) * 100 + '%'
				}
			})

			container.addEventListener('mouseenter', (e) => {})
			container.addEventListener('mouseleave', (e) => {})
		}
		function renderRocketAnim() {
			document.getElementById('lottie').innerHTML = ''
			document.getElementById('monitor-link').style.visibility = ''
			document.getElementById('rocket-link').style.visibility = 'hidden'

			render(
				'https://assets1.lottiefiles.com/packages/lf20_kxhwi5ie.json',
				[
					[0, 65, 0],
					[65, 81, 179, 191],
					[81, 133, 172, 191],
					[133, 172, 172, 191],
				],
				3
			)
		}

		renderRocketAnim()
	}, [])

	return (
		<div
			className='lottie-viewer-integration'
			style={{ fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }}
		>
			<div class='anim-title' style={{ display: 'none' }}>
				<div id='rocket-link'></div>
				<div className='current-title' id='current-title'>
					<p>Try hovering your mouse over the image</p>
				</div>
				<div id='monitor-link'></div>
			</div>
			<div className='lottie' id='lottie'></div>

			<h3 style={{ display: 'none' }}>
				<label htmlFor='speed'>Playback Speed:</label>
				<input
					type='number'
					id='speed'
					name='speed'
					step='.1'
					min='.1'
					max='10'
					value='1'
					style={{
						fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;',
					}}
				/>
			</h3>

			<h3>
				Frame <span id='curFrame'></span> out of <span id='totFrame'></span>, Segment
				<span id='curSegment'></span>
			</h3>
			<div className='progbar' id='total'>
				<span className='progbarcomplete' id='progtotal'></span>
			</div>
			<div className='color-guide'>
				<div className='entry'>Blue: Animation Entry</div>
				<div className='exit'>Red: Animation Exit</div>
			</div>
			<span id='segmentprog'></span>
		</div>
	)
}
