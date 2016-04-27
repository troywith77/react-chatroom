import React, { Component } from 'react'

// import Wilddog from 'wilddog'

var ref = new Wilddog("https://wild-sheep-53630.wilddogio.com/");

class Root extends Component {
	componentDidMount() {
		console.log('done')
		ref.child("owner").on("value", function(datasnapshot) {
		  console.log(datasnapshot.val());   // 结果会在 console 中打印出 "beijing"
		});
		ref.set({
			"owner": "唐锐"
		})
	}
	render() {
		return (
			<h1>Hello World</h1>
		)
	}
}

export default Root