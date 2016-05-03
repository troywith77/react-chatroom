import React, { Component } from 'react'
import * as Actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AppBar from 'material-ui/lib/app-bar'
import MainSection from '../components/MainSection'

require('./Root.css')

const Root = ({
	actions,
	owner,
	chats
}) => {
	return (
		<div>
			<AppBar
			    title="Chat Room"
			    showMenuIconButton={false}
			    iconElementLeft={null}
				iconElementRight={null}
			/>

			<MainSection
				actions={actions}
				owner={owner}
				chats={chats}
			/>

		</div>
	)
}

const mapStateToProps = ( state ) => {
	return {
		owner: state.owner,
		chats: state.chats
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Root)
