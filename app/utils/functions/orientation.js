function orent(mode = "") {
  if (mode === "portriat") {
    return ` and (orientation: portrait)`
  } else if (mode === "landscape") {
    return ` and (orientation: landscape)`
  } else if (mode === "") {
    return ""
  }
}

export default orent
