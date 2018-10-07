import React from 'react'

import Layout from '../components/layout'

import Grid from '../components/grid'
import { photos, compressedPhotos } from '../images/portfolio'
import Popup from '../components/popup'

export default class IndexPage extends React.Component {
	state = {
		popupImage: null
	}

	triggerPopup = (imageIndex) => this.setState({popupImage: imageIndex})
	removePopup = () => this.this.setState({popupImage: null})

	render() {
		const gridProps = {
			triggerPopup: this.triggerPopup,
			removePopup: this.removePopup
		}
		return(
			<Layout>
				{
					this.state.popupImage && <Popup imageIndex={this.state.popupImage} {...gridProps}/>
				}
				<Grid photos={photos} compressed={compressedPhotos} {...gridProps}/>
			</Layout>
		)
	}
}
