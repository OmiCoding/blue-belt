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
import RegisterProvider from "../../shared/context/registerContext/RegisterProvider"
import AccProvider from "../../client/context/accContext/AccProvider"

import template from "../config/template"

export const workerDashboard = (req, res, next) => {
  try {
    console.log(req.user)
    const cache = createCache()

    // const webStats = "/web/loadable-stats.json"

    // const webExtractor = new ChunkExtractor({ statsFile: webStats })

    const webStats =
      process.env.ENV === "production"
        ? "/home/node/app/build/web/loadable-stats.json"
        : path.resolve("build/web/loadable-stats.json")

    const webExtractor = new ChunkExtractor({
      statsFile: "/home/node/app/build/web/loadable-stats.json",
      publicPath: "/web/",
      outputPath: "/home/node/app/build/web",
    })

    // const context = {
    //   authenticated: req.user.authenticated,
    //   role: req.user.role,
    // }
    const context = {}

    const { extractCritical } = createEmotionServer(cache)

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

    const html = renderToString(jsx)

    let { css, ids } = extractCritical(renderToString(app))

    const linkTags = webExtractor.getLinkTags()
    const scriptTags = webExtractor.getScriptTags()

    const helmet = Helmet.renderStatic()
    return res.status(200).send(
      template({
        html,
        helmet,
        css,
        ids,
        context,
        scriptTags,
        linkTags,
      })
    )
  } catch (err) {
    return next(err)
  }
}
