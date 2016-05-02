import React, { Component } from 'react'

import AppBar from 'material-ui/lib/app-bar'
import MainSection from '../components/MainSection'

const Root = () => {
	return (
		<div>
			<AppBar
			    title="Chat Room"
			    showMenuIconButton={false}
			    iconElementLeft={null}
				iconElementRight={null}
			/>

			<MainSection />

		</div>
	)
}

export default Root