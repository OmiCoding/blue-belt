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
import template from "../config/template"

export const registerRender = (req, res, next) => {
  try {
    const webStats = "/web/loadable-stats.json"

    const webExtractor = new ChunkExtractor({ statsFile: webStats })

    const cache = createCache()

    const { extractCritical } = createEmotionServer(cache)

    const app = (
      <CacheProvider value={cache}>
        <AppProvider>
          <RegisterProvider>
            <StaticRouter location={req.originalUrl}>
              <App />
            </StaticRouter>
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
