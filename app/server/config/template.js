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
    ${linkTags}
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    <script>
      window.__INIT_DATA__=${serialize(context)}
    </script>
    <style data-emotion-css="${ids.join(" ")}">${css}</style>
    <meta charset="utf-8"/>
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    <div id="root">${html}</div>
    ${scriptTags}
  </body>
  </html>
`

export default template
