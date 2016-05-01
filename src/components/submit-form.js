import React, { Component } from 'react'

import TextField from 'material-ui/lib/text-field'

export default class SubmitForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			input: ''
		}
	}

	handleChange(e) {
		this.setState({
			input: e.target.value
		})
	}

	handleSubmit(e) {
		const { EMIT_MSG, owner } = this.props

		e.preventDefault()
		EMIT_MSG(this.state.input, owner)
		this.setState({
			input: ''
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<TextField
			      hintText="What do you wanna say?"
				  value={this.state.input}
			      onChange={this.handleChange}
			      style={{width: '100%'}}
			    />
			</form>
		)
	}
}