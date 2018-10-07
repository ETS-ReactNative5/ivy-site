import React from 'react';
import './App.css';

import {photos, compressedPhotos} from './images/portfolio'

import Header from './components/header'
import Grid from './components/grid'
import Popup from './components/popup'

import styled from 'styled-components'

const Wrapper = styled.div`
	width: calc(100vw - 20%);
	max-width: 100vw;
	padding-left: 10%;
	padding-right: 10%;
	background: palevioletred;
`

const GridWrapper = styled.div`
	width: 100%;
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
    	return (
			<div>
			{
				this.state.popupImage !== null && <Popup imageIndex={this.state.popupImage} {...gridProps}/>
			}
			<Header/>
			<Wrapper>
				<GridWrapper>
					<Grid photos={photos} compressed={compressedPhotos} {...gridProps} />
				</GridWrapper>
			</Wrapper>
			</div>
    	)
  	}
}

export default App;
