import React from 'react'

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const colors = ['#ef9a9a','#e57373','#c62828','#b71c1c','#f48fb1','#f06292','#880e4f','#ba68c8','#ab47bc','#3f51b5','#3949ab','#4fc3f7','#29b6f6','#4dd0e1','#26c6da','#26a69a','#009688','#66bb6a','#4caf50','#8bc34a','#7cb342','#a1887f','#8d6e63','#795548','#6d4c41','#5d4037','#4e342e','#90a4ae','#78909c','#607d8b','#546e7a']

const styles = {
	width: '100%',
	maxHeight: 'calc(100vh - 112px - 50px)',
	overflowY: 'scroll'
}

class ChatList extends React.Component {
	scrollToBottom() {
		const list = this.refs.list
		list.scrollTop = list.scrollHeight + 1000
	}

	render() {
		const { chats } = this.props

		if(Object.getOwnPropertyNames(chats).length > 1) {
			setTimeout(() => {
				this.scrollToBottom()
			}, 100)
		}


		let arr = []
		for(var i in chats) {
			arr.push(chats[i])
		}


		let chatslist = arr.map(( chat, index ) => {
			return (
				<li key={index}>
					<ListItem
			          leftAvatar={
			          	<Avatar
			          		/*color={'#fff'}
	          				backgroundColor={colors[Math.floor(Math.random() * colors.length)]}*/
			          	>
			          		{chat.belongTo.substr(0,1)}
			          	</Avatar>
			          }
			          primaryText={
			          	<p>
			          		{chat.belongTo}
			          		<span
			          			style={{fontSize: '80%', float: 'right', color: '#777'}}
			          		>
			          			{chat.date}
			          		</span>
			          	</p>
			          }
			          secondaryText={chat.text}
			        />
			        <Divider inset={true} />
				</li>
			)
		})

		return (
			<ul
			id='ul'
			style={styles}
			ref='list'>
				{chatslist}
			</ul>
		)
	}
}

export default ChatList