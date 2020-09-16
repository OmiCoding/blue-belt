import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { loadableReady } from "@loadable/component"
import { CacheProvider } from "@emotion/core"
import createCache from "@emotion/cache"

import AppProvider from "../shared/context/globalContext/AppProvider"
import App from "../shared/components/App"

import RegisterProvider from "../shared/context/registerContext/RegisterProvider"
import AccProvider from "./context/accContext/AccProvider"

let context
const cache = createCache()

if (window.__INIT_DATA__) {
  context = window.__INIT_DATA__
  delete window.__INIT_DATA__
}

loadableReady(() => {
  const root = document.getElementById("root")
  hydrate(
    <CacheProvider value={cache}>
      <AppProvider context={context}>
        <RegisterProvider>
          <AccProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AccProvider>
        </RegisterProvider>
      </AppProvider>
    </CacheProvider>,
    root
  )
})
