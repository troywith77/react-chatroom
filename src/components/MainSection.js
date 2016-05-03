import React, { Component } from 'react'
import * as Actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SubmitForm from './submit-form'
import ChatList from './chat-list'
import UserNameDialog from './dialog-username'

class MainSection extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { actions } = this.props
		actions.GET_CHATS()
	}

	render() {
		const { actions, owner, chats } = this.props

		return (
			<div style={{maxWidth: '700px',margin: '0 auto'}}>

				<ChatList
					chats={chats}
				/>

				<SubmitForm
					owner={owner}
					{...actions}
				/>

				<UserNameDialog
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