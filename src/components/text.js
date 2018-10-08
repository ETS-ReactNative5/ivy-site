import styled from 'styled-components'

const Text = styled.p`
	font-size: ${props => props.sz};
	text-align: ${props => props.center && 'center'};
`

export default Text