import React from 'react'

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

let colors = []
for(var i in Colors) {
	colors.push(i)
}

console.log(Math.floor(Math.random() * colors.length), colors)

const ChatList = ({
	chats
}) => {
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
		          		color={Colors[colors[Math.floor(Math.random() * colors.length)]]}
          				backgroundColor={Colors[colors[Math.floor(Math.random() * colors.length)]]}
		          	>{chat.belongTo.substr(0,1)}</Avatar>
		          }
		          primaryText={chat.belongTo}
		          secondaryText={chat.text}
		          secondaryTextLines={2}
		        />
		        <Divider inset={true} />
			</li>
		)
	})

	return (
		<ul>
			{chatslist}
		</ul>
	)
}

export default ChatList