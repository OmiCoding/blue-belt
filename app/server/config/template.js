import serialize from "serialize-javascript"

const template = ({
  html,
  helmet,
  ids,
  css,
  context,
  scriptTags,
  linkTags,
}) => `
  <!DOCTYPE html>
  <html ${helmet.htmlAttributes.toString()}>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset="UTF-8" />
    ${linkTags}
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    <script>
      window.__INIT_DATA__=${serialize(context)}
    </script>
    <style data-emotion-css="${ids.join(" ")}">${css}</style>
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    <div id="root">${html}</div>
    ${scriptTags}
  </body>
  </html>
`

export default template
