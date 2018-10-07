import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
	width: 100vw;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	background: red;
	align-items: center;
	justify-items: center;
`

const Logo = styled.div`
	width: 100px;
	height: 50px;
	background: black;
	margin-top: 15px;
	margin-bottom: 15px;
	cursor: pointer;
`

const Header = () => (
	<StyledHeader>
		<Logo/>
	</StyledHeader>
)

export default Header
