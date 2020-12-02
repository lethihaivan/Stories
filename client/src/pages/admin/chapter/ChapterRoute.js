import React from 'react'
import { ChapterNew, ChapterView, ChapterForm } from '.'
import { PrivateRoute } from '../components'
import { Switch } from 'react-router-dom'

function ChapterRouter({ match }) {
  return (
    <div>
      <Switch>
        <PrivateRoute path={`${match.path}`} exact component={ChapterView} />
        <PrivateRoute path={`${match.path}/new`} exact component={ChapterNew} />
      </Switch>
    </div>
  )
}

export default ChapterRouter