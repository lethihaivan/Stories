import React from 'react'
import { Switch } from 'react-router-dom'

import { StoryEdit, StoryView, StoryNew, } from '.'
import { PrivateRoute } from '../components'


function StoryRoute({ match }) {
  return (
    <Switch>
      <PrivateRoute path={`${match.path}`} exact component={StoryView} />
      <PrivateRoute path={`${match.path}/new`} exact component={StoryNew} />
      <PrivateRoute path={`${match.path}/edit/:id`} exact component={StoryEdit} />
    </Switch>
  )
}

export default StoryRoute
