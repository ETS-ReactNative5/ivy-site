import React from 'react'
import styled from 'styled-components'

const PhotoGrid = styled.div`
	background: antiquewhite;

	display: flex;
	flex-wrap: wrap;
	padding: 0 5px;
`

const Column = styled.div`
	flex: 33.33%;
	max-width: 33.33%;
	padding: 0 5px;
	& img {
		margin-bottom: 3px;
	}
	@media (max-width: 500px) {
		flex: 100%;
		max-width: 100%;
	}
`

const ImgWrapper = styled.div`
	background: ghostwhite;
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