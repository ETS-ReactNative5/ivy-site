import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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
	background: green;
	margin-top: 15px;
	margin-bottom: 15px;
	cursor: pointer;
`

const Header = ({ siteTitle }) => (
	<StyledHeader>
		<Link to='/'>
			<Logo/>
		</Link>
	</StyledHeader>
)

export default Header
