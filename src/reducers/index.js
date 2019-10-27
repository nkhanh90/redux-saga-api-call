const users = (state = null, action) => {
  console.log(action)
  switch (action.type) {
    case 'GET_USERS_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export default users
