import React from "react"
import * as path from "path"
import { CacheProvider } from "@emotion/core"
import createEmotionServer from "create-emotion-server"
import createCache from "@emotion/cache"
import { renderToString } from "react-dom/server"
import { ChunkExtractor } from "@loadable/server"
import { StaticRouter } from "react-router-dom"
import { Helmet } from "react-helmet"

import App from "../../client/ssr"
import AppProvider from "../../shared/context/globalContext/AppProvider"
import RegisterProvider from "../../shared/context/registerContext/RegisterProvider"
import AccProvider from "../../client/context/accContext/AccProvider"
import template from "../config/template"

export const jobSearch = async (req, res, next) => {
  try {
    let context = { ...req.query }
    const cache = createCache()

    const { extractCritical } = createEmotionServer(cache)

    // const webStats = "/web/loadable-stats.json"

    // const webExtractor = new ChunkExtractor({ statsFile: webStats })

    const webStats =
      process.env.ENV === "production"
        ? "/home/node/app/build/web/loadable-stats.json"
        : path.resolve("build/web/loadable-stats.json")

    // "/build/web/"
    // "/home/omi/blue-belt/app/build/web"

    const webExtractor = new ChunkExtractor({
      statsFile: "/home/node/app/build/web/loadable-stats.json",
      publicPath: "/web/",
      outputPath: "/home/node/app/build/web",
    })

    const app = renderToString(
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

    let scriptTags = webExtractor.getScriptTags()
    let linkTags = webExtractor.getLinkTags()

    let { css, ids } = extractCritical(renderToString(app))

    const helmet = Helmet.renderStatic()
    return res.status(200).send(
      template({
        html,
        helmet,
        css,
        context,
        ids,
        scriptTags,
        linkTags,
      })
    )
  } catch (err) {
    return next(err)
  }
}
