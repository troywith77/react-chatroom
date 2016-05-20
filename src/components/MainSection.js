import React, { Component } from 'react'

import SubmitForm from './submit-form'
import ChatList from './chat-list'
import UserNameDialog from './dialog-username'

const style = {
	maxWidth: '700px',
	margin: '0 auto'
}

export default class MainSection extends Component {
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
			<div style={style}>

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

