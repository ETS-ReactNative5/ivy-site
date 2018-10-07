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
	grid-template: 1fr / 1fr;
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

const Img = styled.div`
	width: 100px;
	height: 100px;
	background-color: gold;
	background-image: url(${ props => props.src});
`

export default class Popup extends React.Component {
	render() {
		const {
			imageIndex
		} = this.props
		console.log('index', imageIndex, photos[imageIndex])
		return(
			<Bg>
				<PhotoColumn>
					{ <img src={photos[imageIndex].url}/> }
				</PhotoColumn>
			</Bg>
		)
	}
}