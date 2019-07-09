import React from "react"

const escape = svg =>
  svg
    .replace(/#/g, "%23")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")

const headerCorner = escape(
  `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='50' height='50'><path fill='#fff' d='M 0 50 L50 50 A 50 50 0 0 1 0 0 z'/></svg>")`
)

export default headerCorner
