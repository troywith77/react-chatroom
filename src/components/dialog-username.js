import React, { Component } from 'react'
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

class UserNameDialog extends Component {
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

 	handleKeyup(e) {
 		if(e.which === 13) {
 			this.props.INIT_OWNER(this.state.input)
 		}
 	}

 	handleClose() {
 		this.props.INIT_OWNER(this.state.input)
 	}

	render() {
		return (
        	<Dialog
	        	title="Tell Us Your Name"
	        	open={!this.props.owner.contained}
        	>
        		<TextField
			      	hintText="What is Your name?"
				  	value={this.state.input}
			      	onChange={this.handleChange.bind(this)}
			      	onKeyUp={this.handleKeyup.bind(this)}
			      	autoFocus
			      	fullWidth
			    />
        	</Dialog>
	    );
	}
}

export default UserNameDialog