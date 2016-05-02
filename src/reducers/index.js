export const chats = ( state = [], action) => {
	switch(action.type) {
		case 'LOAD_CHATS':
			return action.chats
		default:
			return state
	}
}

const initialOwner = {
	'contained': false,
	name: null
}
export const owner = ( state = initialOwner, action ) => {
	switch(action.type) {
		case 'INIT_OWNER':
			return Object.assign({},
				{
					'contained': true,
					name: action.name
				});
		default:
			return state;
	}
}