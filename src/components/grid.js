import React from 'react'
import styled from 'styled-components'
import Image from "react-graceful-image";

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

export default class Grid extends React.Component {
	render() {
		return(
			<PhotoGrid>
				<Column>
				{
					this.props.compressed.filter((_,i) => i % 3 === 0).map(img => 
						<img src={img.url}/>
					)
				}
				</Column>
				<Column>
				{
					this.props.compressed.slice(1).filter((_,i) => i % 3 === 0).map(img => 
						<img src={img.url}/>
					)
				}
				</Column>
				<Column>
				{
					this.props.compressed.slice(2).filter((_,i) => i % 3 === 0).map(img => 
						<img src={img.url}/>
					)
				}
				</Column>
			</PhotoGrid>
		)
	}
}