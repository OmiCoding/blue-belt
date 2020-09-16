import React from "react"
import * as path from "path"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { ChunkExtractor } from "@loadable/server"
import Helmet from "react-helmet"

import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/core"
import createEmotionServer from "create-emotion-server"

import App from "../../client/ssr"
import AppProvider from "../../shared/context/globalContext/AppProvider"
import RegisterProvider from "../../shared/context/registerContext/RegisterProvider"
import AccProvider from "../../client/context/accContext/AccProvider"

import template from "../config/template"

export const jobCard = (req, res, next) => {
  try {
    let context

    if (req.user.role === "worker") {
      context = {
        id: req.params._id,
      }
    }

    const cache = createCache()

    const webStats = path.resolve("../build/web/loadable-stats.json")

    const webExtractor = new ChunkExtractor({ statsFile: webStats })

    const app = (
      <CacheProvider value={cache}>
        <AppProvider>
          <RegisterProvider>
            <AccProvider>
              <StaticRouter value={req.originalUrl}>
                <App />
              </StaticRouter>
            </AccProvider>
          </RegisterProvider>
        </AppProvider>
      </CacheProvider>
    )

    const jsx = webExtractor.collectChunks(app)

    const html = renderToString(jsx)

    const { extractCritical } = createEmotionServer(cache)

    let { css, ids } = extractCritical(renderToString(app))

    let scriptTags = webExtractor.getScriptTags()

    let linkTags = webExtractor.getLinkTags()

    const helmet = Helmet.renderStatic()

    return res.status(200).send(
      template({
        html,
        css,
        ids,
        helmet,
        scriptTags,
        linkTags,
        context,
      })
    )
  } catch (err) {
    return next(err)
  }
}
