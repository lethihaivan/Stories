import React from 'react'
import { Switch } from 'react-router-dom'

import { ChapterNew, ChapterView, } from '.'
import { PrivateRoute } from '../components'
import ChapterEdit from './ChapterEdit'

function ChapterRouter({ match }) {
  return (
    <Switch>
      <PrivateRoute path={`${match.path}`} exact component={ChapterView} />
      <PrivateRoute path={`${match.path}/new`} exact component={ChapterNew} />
      <PrivateRoute path={`${match.path}/edit/:id`} exact component={ChapterEdit} />

    </Switch>
  )
}

export default ChapterRouter