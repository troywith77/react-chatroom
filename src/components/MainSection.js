import React, { Component } from 'react'
import * as Actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SubmitForm from './submit-form'
import ChatList from './chat-list'

class MainSection extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { actions } = this.props
		// actions.INIT_OWNER(prompt('what\'s your name?'))
		actions.GET_CHATS()
	}

	render() {
		const { actions, owner, chats } = this.props

		return (
			<div>

				<ChatList
					chats={chats}
				/>

				<SubmitForm
					owner={owner}
					{...actions}
				/>
			</div>
		)
	}
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
)(MainSection)