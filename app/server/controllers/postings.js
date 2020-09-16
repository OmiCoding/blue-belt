import React from "react"
import * as path from "path"

import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"

import { ChunkExtractor } from "@loadable/server"
import { Helmet } from "react-helmet"

import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/core"
import createEmotionServer from "create-emotion-server"

import App from "../../client/ssr"
import AppProvider from "../../shared/context/globalContext/AppProvider"
import AccProvider from "../../client/context/accContext/AccProvider"
import RegisterProvider from "../../shared/context/registerContext/RegisterProvider"

import template from "../config/template"

export const postings = (req, res, next) => {
  try {
    console.log(req.params)
    const cache = createCache()

    const webStats = "web/loadable-stats.json"

    const webExtractor = new ChunkExtractor({ statsFile: webStats })

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

    const { extractCritical } = createEmotionServer(cache)

    let { css, ids } = extractCritical(renderToString(app))

    const scriptTags = webExtractor.getScriptTags()
    const linkTags = webExtractor.getLinkTags()

    const helmet = Helmet.renderStatic()

    return res.status(200).send(
      template({
        html,
        css,
        ids,
        helmet,
        scriptTags,
        linkTags,
      })
    )
  } catch (err) {
    return next(err)
  }
}

export default postings
