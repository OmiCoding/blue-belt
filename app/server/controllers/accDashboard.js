import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { Helmet } from "react-helmet"
import { CacheProvider } from "@emotion/core"
import createEmotionServer from "create-emotion-server"
import createCache from "@emotion/cache"

import App from "../../shared/components/App"
import AppProvider from "../../shared/context/globalContext/AppProvider"

import template from "../config/template"

export const accDashboard = (req, res, next) => {
  try {
    const cache = createCache()

    const context = { ...req.user }

    const { extractCritical } = createEmotionServer(cache)

    const app = (
      <CacheProvider value={cache}>
        <AppProvider>
          <StaticRouter location={req.originalUrl}>
            <App />
          </StaticRouter>
        </AppProvider>
      </CacheProvider>
    )

    let { html, css, ids } = extractCritical(renderToString(app))

    const helmet = Helmet.renderStatic()
    return res.status(200).send(
      template({
        html,
        helmet,
        css,
        ids,
        context,
      })
    )
  } catch (err) {
    return next(err)
  }
}
