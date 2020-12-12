import React, { useState } from "react";

import ChapterRouter from "./chapter/ChapterRoute"
import StoryRoute from "./story/StoryRoute"
import { Header, HeaderSignOut, PrivateRoute } from './components'

import '../../styles/AdminPage.css'

const AdminPage = ({ match, history }) => {
  return (
    <div className="dasboard-style">
      <Header history={history} />
      <div className="wrapper">
        <HeaderSignOut history={history} />
        <div className="main-style">
          <PrivateRoute path={`${match.path}/chapters`} component={ChapterRouter} />
          <PrivateRoute path={`${match.path}/stories`} component={StoryRoute} />
        </div>
      </div>
    </div>
  )
}

export default AdminPage;