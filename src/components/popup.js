import React from 'react'
import styled from 'styled-components'

import { photos } from '../images/portfolio'

const Bg = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 10;
	background: rgba(0,0,0,0.7);
	display: grid;
	grid-template-columns: 100px 1fr 100px;
	grid-template-rows: 1fr;
	align-items: center;
	justify-items: center;
`

const PhotoColumn = styled.div`
	max-width: 80vw;
	background: rebeccapurple;
	& img {
		max-height: 90vh;
		max-width: 80vw;
	}
`

const ArrowContainer = styled.div`
	width: 100%;
	height: 100%;
	background: red;
`

const LeftArrowContainer = styled(ArrowContainer)`
	display: grid;
	grid-template: 1fr / 1fr;
	align-items: center;
	justify-items: center;
`

const RightArrowContainer = styled(ArrowContainer)`
	display: grid;
	grid-template: 50px auto / 1fr;
	align-items: center;
	justify-items: center;
`

export default class Popup extends React.Component {
	getPreviousPhoto = (current) => {
		if(current - 1 < 0) return current 
		else return current - 1
	}
	getNextPhoto = (current) => {
		if(current + 1 >= photos.length) return current
		else return current + 1
	}
	render() {
		const {
			imageIndex,
			triggerPopup,
			removePopup
		} = this.props

		console.log('RENDER')
		return(
			<Bg>
				<LeftArrowContainer>
					<button onClick={() => triggerPopup(this.getPreviousPhoto(imageIndex))}>back</button>
				</LeftArrowContainer>
				<PhotoColumn>
					{ <img src={photos[imageIndex].url}/> }
				</PhotoColumn>
				<RightArrowContainer>
					<button onClick={removePopup}>exit</button>
					<button onClick={() => triggerPopup(this.getNextPhoto(imageIndex))}>forward</button>
				</RightArrowContainer>
			</Bg>
		)
	}
}