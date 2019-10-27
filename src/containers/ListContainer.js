import { connect } from 'react-redux'

import List from '../components/List'

const mapStateToProps = state => ({ users: state })

const mapDispatchToProps = dispatch => ({
  getUsers() {
    dispatch({ type: 'GET_USERS_REQUEST' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
