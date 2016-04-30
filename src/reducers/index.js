export const chats = ( state = [], action) => {
	switch(action.type) {
		case 'LOAD_CHATS':
			return action.chats
		default:
			return state
	}
}

export const owner = ( state = '', action ) => {
	switch(action.type) {
		case 'INIT_OWNER':
			return action.name;
		default:
			return state;
	}
}