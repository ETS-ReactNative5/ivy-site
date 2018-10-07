import React from 'react'
import styled from 'styled-components'
import TrackVisibility from 'react-on-screen'

const PhotoGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 0 5px;
`

const Column = styled.div`
	flex: 32%;
	max-width: 32%;
	padding: 0 5px;
	& img {
		margin-bottom: 9px;
		max-width: 100%;
	}
	@media (max-width: 950px) {
		flex: 31%;
		max-width: 31%;	
	}
	@media (max-width: 547px) {
		flex: 30%;
		max-width: 30%;
	}
	@media (max-width: 500px) {
		flex: 100%;
		max-width: 100%;
	}
`

const ImgWrapper = styled.div`
	margin: 3px;
	cursor: pointer;

	opacity: ${ props => props.visible ? '1' : '0'};
	transition: opacity 1s ease;
`

export default class Grid extends React.Component {
	render() {
		return(
			<PhotoGrid>
				<Column>
				{
					this.props.compressed.filter((_,i) => i % 3 === 0).map(img => 
						<TrackVisibility once>
						{
							({isVisible}) => <ImgWrapper visible={isVisible} onClick={() => this.props.triggerPopup(img.id)}><img src={img.url}/></ImgWrapper>
						}
						</TrackVisibility>
					)
				}
				</Column>
				<Column>
				{
					this.props.compressed.slice(1).filter((_,i) => i % 3 === 0).map(img => 
						<TrackVisibility once>
						{
							({isVisible}) => <ImgWrapper visible={isVisible} onClick={() => this.props.triggerPopup(img.id)}><img src={img.url}/></ImgWrapper>
						}
						</TrackVisibility>
					)
				}
				</Column>
				<Column>
				{
					this.props.compressed.slice(2).filter((_,i) => i % 3 === 0).map(img => 
						<TrackVisibility once>
						{
							({isVisible}) => <ImgWrapper visible={isVisible} onClick={() => this.props.triggerPopup(img.id)}><img src={img.url}/></ImgWrapper>
						}
						</TrackVisibility>
					)
				}
				</Column>
			</PhotoGrid>
		)
	}
}