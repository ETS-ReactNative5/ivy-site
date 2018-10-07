import React from 'react'
import styled from 'styled-components'
import logo from '../images/ivylogo.png'

const StyledHeader = styled.div`
	width: 100vw;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	background: #f4efec;
	align-items: center;
	justify-items: center;
`

const Logo = styled.div`
	width: 100%;
	height: 100px;
	margin-top: 15px;
	margin-bottom: 15px;
	cursor: pointer;
	background-image: url(${logo});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
`

const Header = () => (
	<StyledHeader>
		<Logo/>
	</StyledHeader>
)

export default Header
