import React from 'react'
import styled from 'styled-components'

const PhotoGrid = styled.div`
	background: green;

	display: flex;
	flex-wrap: wrap;
	padding: 0 5px;
`

const Column = styled.div`
	flex: 32%;
	max-width: 32%;
	padding: 0 5px;
	& img {
		margin-bottom: 3px;
		max-width: 100%;
	}
	@media (max-width: 500px) {
		flex: 100%;
		max-width: 100%;
	}
`

const ImgWrapper = styled.div`
	background: black;
	margin: 3px;
	cursor: pointer;
`

export default class Grid extends React.Component {
	render() {
		return(
			<PhotoGrid>
				<Column>
				{
					this.props.compressed.filter((_,i) => i % 3 === 0).map(img => 
						<ImgWrapper onClick={() => this.props.triggerPopup(img.id)}><img src={img.url}/></ImgWrapper>
					)
				}
				</Column>
				<Column>
				{
					this.props.compressed.slice(1).filter((_,i) => i % 3 === 0).map(img => 
						<ImgWrapper onClick={() => this.props.triggerPopup(img.id)}><img src={img.url}/></ImgWrapper>
					)
				}
				</Column>
				<Column>
				{
					this.props.compressed.slice(2).filter((_,i) => i % 3 === 0).map(img => 
						<ImgWrapper onClick={() => this.props.triggerPopup(img.id)}><img src={img.url}/></ImgWrapper>
					)
				}
				</Column>
			</PhotoGrid>
		)
	}
}