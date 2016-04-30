import React, { Component } from 'react'

export default class SubmitForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			input: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleChange(e) {
		this.setState({
			input: e.target.value
		})
	}

	handleClick(input, owner) {
		const { EMIT_MSG } = this.props
		EMIT_MSG(input, owner)
		this.setState({
			input: ''
		})
	}

	render() {
		const { owner } = this.props
		return (
			<form onSubmit={e => e.preventDefault()}>
				<input
					type='text'
					value={this.state.input}
					onChange={this.handleChange}
				/>
				<button
					onClick={this.handleClick.bind(null, this.state.input, owner)}
				>
					send
				</button>
			</form>
		)
	}
}