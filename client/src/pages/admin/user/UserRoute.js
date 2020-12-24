import React from 'react'
import { Switch } from 'react-router-dom'

import { UserNew, UserView, } from '.'
import { PrivateRoute } from '../components'
import UserEdit from './UserEdit'

function UserRoute({ match }) {
  return (
    <Switch>
      <PrivateRoute path={`${match.path}`} exact component={UserView} />
      {/* <PrivateRoute path={`${match.path}/new`} exact component={UserNew} /> */}
      {/* <PrivateRoute path={`${match.path}/edit/:id`} exact component={UserEdit} /> */}
    </Switch>
  )
}

export default UserRoute