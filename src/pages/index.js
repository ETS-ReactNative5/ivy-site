import React from 'react'

import Layout from '../components/layout'

import Grid from '../components/grid'
import { photos, compressedPhotos } from '../images/portfolio'

const IndexPage = () => (
  	<Layout>
		<Grid photos={photos} compressed={compressedPhotos}/>
  	</Layout>
)

export default IndexPage
