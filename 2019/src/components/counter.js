import React, { useState, useEffect, useRef, Fragment } from "react"
import Card from "./Card"
import { Box } from "./layout-components"
import styled from "@emotion/styled"

const Wrap = styled(Box)`
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  width: 100%;
  @media screen and (min-width: 60em) {
    grid-gap: 16px;
  }
  & > div {
    width: 100%;
  }
`

const END_TIME = "September 21 2019 09:00:00 GMT-0400"

const ONE_SECOND_IN_MS = 1000
const ONE_MINUTE_IN_MS = 60000
const ONE_HOUR_IN_MS = 3600000
const ONE_DAY_IN_MS = 86400000

const SECONDS_IN_ONE_MINUTE = 60
const MINUTES_IN_ONE_HOUR = 60
const HOURS_IN_ONE_DAY = 24

const TimeRemaining = Date.parse(END_TIME) - Date.parse(new Date())

// using useInterval from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

function getCountdownTimes(countDownTimeRemaining, timeUnit, time) {
  return Math.floor((countDownTimeRemaining / timeUnit) % time)
    .toString()
    .padStart(2, "0")
}

function Counter() {
  let [count, setCount] = useState(TimeRemaining)
  useInterval(() => {
    setCount(count - ONE_SECOND_IN_MS)
  }, ONE_SECOND_IN_MS)

  const days = Math.floor(count / ONE_DAY_IN_MS)
  const hours = getCountdownTimes(count, ONE_HOUR_IN_MS, HOURS_IN_ONE_DAY)
  const minutes = getCountdownTimes(
    count,
    ONE_MINUTE_IN_MS,
    MINUTES_IN_ONE_HOUR
  )
  const seconds = getCountdownTimes(
    count,
    ONE_SECOND_IN_MS,
    SECONDS_IN_ONE_MINUTE
  )

  return (
    <Fragment>
      {TimeRemaining <= 0 ? (
        <Box textAlign="center" as="p" fontSize={[5, null, null, 7]}>
          See you next year!
        </Box>
      ) : (
        <Wrap textAlign="center">
          <Box fontWeight="bold">
            <Card>{days}</Card>
            <Box mt="3" fontSize="0">
              Days
            </Box>
          </Box>
          <Box fontWeight="bold">
            <Card>{hours}</Card>
            <Box as="abbr" title="hours" mt="3" fontSize="0">
              Hrs
            </Box>
          </Box>
          <Box fontWeight="bold">
            <Card>{minutes}</Card>
            <Box as="abbr" title="minutes" mt="3" fontSize="0">
              Mins
            </Box>
          </Box>
          <Box fontWeight="bold">
            <Card>{seconds}</Card>
            <Box as="abbr" title="seconds" mt="3" fontSize="0">
              Secs
            </Box>
          </Box>
        </Wrap>
      )}
    </Fragment>
  )
}
export default Counter
