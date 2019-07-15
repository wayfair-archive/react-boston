import { useState, useEffect } from "react"

// From @mhamlin - https://github.com/hamlim/components/blob/master/packages/components/src/UseMedia.js
export default function useMedia({
  query,
  defaultMatches = false,
  matchMedia = typeof window !== "undefined" && window.matchMedia,
}) {
  let [matches, setMatches] = useState(defaultMatches)

  useEffect(() => {
    let mql = matchMedia(query)
    setMatches(mql.matches)
    function listener({ matches }) {
      setMatches(matches)
    }
    mql.addListener(listener)
    return () => mql.removeListener(listener)
  }, [query])
  return matches
}
