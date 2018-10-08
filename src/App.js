import React from 'react';
import './App.css';

import {compressedPhotos} from './images/portfolio'

import Header from './components/header'
import Grid from './components/grid'
import Popup from './components/popup'
import Text from './components/text'

import styled from 'styled-components'

const Wrapper = styled.div`
	width: calc(100vw - 20%);
	max-width: 100vw;
	padding-left: 10%;
	padding-right: 10%;
	background: #f4efec;
	min-height: 100vh; 
`

const GridWrapper = styled.div`
	width: 100%;
`

const AboutWrapper = styled.div`
	width: calc(100vw - 50%);
	max-width: 100vw;
	padding-left: 25%;
	padding-right: 25%;
	display: grid;
	grid-template: 1fr / 1fr;
	align-items: center;
	justify-items: center;
	margin-bottom: 50px;
`

class App extends React.Component {
	state = {
		popupImage: null
	}

	triggerPopup = (imageIndex) => this.setState({popupImage: imageIndex}, console.log('state', this.state))
	removePopup = () => this.setState({popupImage: null})

  	render() {
		const gridProps = {
			triggerPopup: this.triggerPopup,
			removePopup: this.removePopup
		}
		const pSize = '12px'
    	return (
			<div>
			{
				this.state.popupImage !== null && <Popup imageIndex={this.state.popupImage} {...gridProps}/>
			}
			<Header/>
			<Wrapper>
				<GridWrapper>
					<Grid compressed={compressedPhotos} {...gridProps} />
				</GridWrapper>
			</Wrapper>
			<AboutWrapper>
				<div>
					<Text center sz='15px' style={{letterSpacing: '5px'}}>
						<strong>ABOUT</strong>
					</Text>
					<Text center sz={pSize}>
						I began my interest in photography in 2004. Since then, I was involved in various opportunities (freelance and yearbook) and was self taught in photography and Adobe Creative Suites. I took on small freelance jobs which includes wedding, concerts, events, portraiture, and engagement.
					</Text>
					<Text center sz={pSize}>
						In 2016, I have worked at the California Museum of Photography, where I have demonstrated an understanding of conservation techniques, use of materials in preparation, and care of works on paper and photographic materials. In conjunction to that position, I was the Marketing Chairperson for the University program board where I was lead photographer for all the events held on our campus.
					</Text>
					<Text center sz={pSize}>
						In 2017, my photograph of the Orion nebula was published as the front cover for the University of California, Riverside Undergraduate Research Journal.
					</Text>
					<Text center sz={pSize}>
					In June of 2018, I graduated from the University of California, Riverside with a B.A. of Art History and currently work as the Volunteer Coordinator and Production Assistant at the non-profit art biennial, Desert X.
					</Text>
				</div>
			</AboutWrapper>
			</div>
    	)
  	}
}

export default App;
