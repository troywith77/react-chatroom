import React, { Component } from 'react'

import Styles from './submit-form.css'

import TextField from 'material-ui/lib/text-field'

export default class SubmitForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			input: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({
			input: e.target.value
		})
	}

	handleSubmit(e) {
		const { EMIT_MSG, owner } = this.props

		e.preventDefault()
		EMIT_MSG(this.state.input, owner.name)
		this.setState({
			input: ''
		})
	}

	render() {
		return (
			<form
			onSubmit={this.handleSubmit.bind(this)}
			className={Styles.root}>
				<TextField
			      hintText="What do you wanna say?"
				  value={this.state.input}
			      onChange={this.handleChange}
			      className={Styles.input}
			    />
			</form>
		)
	}
}