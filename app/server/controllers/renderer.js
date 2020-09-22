import React from "react"
import * as path from "path"
import { ChunkExtractor } from "@loadable/server"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { Helmet } from "react-helmet"
import { CacheProvider } from "@emotion/core"
import createEmotionServer from "create-emotion-server"
import createCache from "@emotion/cache"

import AppProvider from "../../shared/context/globalContext/AppProvider"
import App from "../../client/ssr"
import template from "../config/template"
import RegisterProvider from "../../shared/context/registerContext/RegisterProvider"
import AccProvider from "../../client/context/accContext/AccProvider"

export const renderer = (req, res, next) => {
  try {
    const cache = createCache()

    const webStats = path.resolve("build/web/loadable-stats.json")

    // "/build/web/"
    // "/home/omi/blue-belt/app/build/web"

    const webExtractor = new ChunkExtractor({
      statsFile: webStats,
      publicPath: "/web/",
      outputPath: path.resolve("build/web"),
    })

    const app = (
      <CacheProvider value={cache}>
        <AppProvider>
          <RegisterProvider>
            <AccProvider>
              <StaticRouter location={req.originalUrl}>
                <App />
              </StaticRouter>
            </AccProvider>
          </RegisterProvider>
        </AppProvider>
      </CacheProvider>
    )

    const jsx = webExtractor.collectChunks(app)

    const { extractCritical } = createEmotionServer(cache)

    const html = renderToString(jsx)

    let { css, ids } = extractCritical(renderToString(app))

    const linkTags = webExtractor.getLinkTags()
    const scriptTags = webExtractor.getScriptTags()

    const helmet = Helmet.renderStatic()
    return res.status(200).send(
      template({
        html,
        helmet,
        ids,
        css,
        scriptTags,
        linkTags,
      })
    )
  } catch (err) {
    return next(err)
  }
}

// const activeRoutes =
//   routes.find((route) => {
//     return matchPath(req.url, route)
//   }) || {}

// const routeData = activeRoutes.fetchInitialData
//   ? activeRoutes.fetchInitialData(req)
//   : Promise.resolve()

// routeData
//   .then((data) => {
//     const context = data === undefined ? null : data

// })
// .catch((err) => {
//   console.log(err)
//   res.status(500).send("Something has gone wrong...")
// })
