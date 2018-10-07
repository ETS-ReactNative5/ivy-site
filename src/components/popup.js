import React from 'react'
import styled from 'styled-components'

import { photos } from '../images/portfolio'

import closeIcon from '../images/close.png'

const Bg = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 10;
	background: rgba(0,0,0,0.80);
	display: grid;
	grid-template-columns: 10vw 1fr 10vw;
	grid-template-rows: 1fr;
	align-items: center;
	justify-items: center;
`

const PhotoColumn = styled.div`
	max-width: 80vw;
	& img {
		max-height: 90vh;
		max-width: 80vw;
	}
`

const ArrowContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template: 50px auto / 1fr;
	align-items: center;
	justify-items: center;
`

const Arrow = styled.div`
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
	padding: 7%;
	cursor: pointer;
`

const RightArrow = styled(Arrow)`
	transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
`

const LeftArrow = styled(Arrow)`
	transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`

const CloseButton = styled.div`
	width: 25px;
	height: 25px;
	background-image: url(${closeIcon});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	cursor: pointer;
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

		return(
			<Bg>
				<ArrowContainer>
					<div/>
					<LeftArrow onClick={() => triggerPopup(this.getPreviousPhoto(imageIndex))}/>
				</ArrowContainer>
				<PhotoColumn>
					{ <img src={photos[imageIndex].url}/> }
				</PhotoColumn>
				<ArrowContainer>
					<CloseButton onClick={removePopup}/>
					<RightArrow onClick={() => triggerPopup(this.getNextPhoto(imageIndex))}/>
				</ArrowContainer>
			</Bg>
		)
	}
}