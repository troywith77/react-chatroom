import React, { Component } from 'react'
import * as Actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SubmitForm from '../components/submit-form'
import AppBar from 'material-ui/lib/app-bar'

class Root extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { actions } = this.props
		actions.INIT_OWNER(prompt('what\'s your name?'))
		actions.GET_CHATS()
	}

	render() {
		const { actions, owner, chats } = this.props
		let arr = []
		for(var i in chats) {
			arr.push(chats[i])
		}
		return (
			<div>
				<AppBar
				    title="Chat Room"
				    showMenuIconButton={false}
				    iconElementLeft={null}
    				iconElementRight={null}
				/>
				<SubmitForm
					owner={owner}
					{...actions}
				/>
				{
					arr.map(( chat, index ) => {
						return (
							<li key={index}>
								{chat.text}
								<br />
								{chat.belongTo}
							</li>
						)
					})
				}
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
)(Root)