import React, { useState } from "react";
import ChapterRouter from "./chapter/ChapterRoute"
import { Header, HeaderSignOut, PrivateRoute } from './components'

import '../../styles/AdminPage.css'

const AdminPage = ({ match, history }) => {
  console.log("match", match)
  console.log("history", history)
  return (
    <div className="dasboard-style">
      <Header history={history} />
      <div className="wrapper">
        <HeaderSignOut history={history} />
        <div className="main-style">
          <PrivateRoute path={`${match.path}/chapters`} component={ChapterRouter} />
          {/* <PrivateRoute path={`${match.path}/users`} component={UsersPage} />
          <PrivateRoute path={`${match.path}/places`} component={PlacesPage} />
          <PrivateRoute path={`${match.path}/requests`} component={RequestsPage} />
          <PrivateRoute path={`${match.path}/reports`} component={ReportsPage} />
          <PrivateRoute path={`${match.path}/restaurants`} component={RestaurantsRoute} />
          <PrivateRoute path={`${match.path}/transportations`} component={TransportationsRoute} />
          <PrivateRoute path={`${match.path}/attractions`} component={AttractionsRoute} />
          <PrivateRoute path={`${match.path}/hotels`} component={HotelsRoute} /> */}
        </div>
      </div>
    </div>
  )
}

export default AdminPage;