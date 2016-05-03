import moment from 'moment'

const ref = new Wilddog("https://wild-sheep-53630.wilddogio.com/");

export const EMIT_MSG = ( message, belongTo ) => {
	return dispatch => {
		const chats = ref.child('chats')
		chats.push({
			belongTo: belongTo,
			text: message,
			date: moment(new Date()).format('YYYY-MM-DD HH:MM:SS')
		})
	}
}

export const GET_CHATS = () => {
	return dispatch => {
		ref.child('chats').on('value', chat => {
			dispatch(LOAD_CHATS(chat.val()))
		})
	}
}

export const LOAD_CHATS = ( chats ) => {
	return {
		type: 'LOAD_CHATS',
		chats
	}
}

export const INIT_OWNER = (name) => {
	return {
		type: 'INIT_OWNER',
		name
	}
}

export const SCROLL_TO_BOTTOM = (node) => {
	node.scrollTop = node.scrollHeight
}