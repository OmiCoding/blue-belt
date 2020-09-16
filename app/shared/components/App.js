import React from "react"
import { Route, Switch } from "react-router-dom"
import routes from "../routes/routes"
import NoMatch from "../../shared/components/NoMatch"
import { Helmet } from "react-helmet"

const App = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Blubelt - Professional digital network for blue collar workers
        </title>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&family=MuseoModerno:wght@900&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
        />
      </Helmet>
      <Switch>
        {routes.map(({ path, exact, component: Component, ...rest }) => {
          return (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => <Component {...props} {...rest} />}
            />
          )
        })}
        <Route render={(props) => <NoMatch {...props} />} />
      </Switch>
    </>
  )
}

export default App
