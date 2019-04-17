import React, { useState, useEffect, useRef } from "react"
import Card from "./card"
import { Box } from "./layout-components"
import styled from "@emotion/styled"

const Wrap = styled(Box)`
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 80px 80px 80px 80px;
  grid-gap: 16px;
`

const END_TIME = "September 21 2019 09:00:00 EST"

const ONE_SECOND_IN_MS = 1000
const ONE_MINUTE_IN_MS = 60000
const ONE_HOUR_IN_MS = 3600000
const ONE_DAY_IN_MS = 86400000

const SECONDS_IN_ONE_MINUTE = 60
const MINUTES_IN_ONE_HOUR = 60
const HOURS_IN_ONE_DAY = 24

const TimeRemaining = Date.parse(END_TIME) - Date.parse(new Date())

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
  // using useInterval from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
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
    <Wrap textAlign="center">
      <Box fontWeight="semibold">
        <Card>{days}</Card>
        <Box mt="3" fontSize="0">
          Days
        </Box>
      </Box>
      <Box fontWeight="semibold">
        <Card>{hours}</Card>
        <Box mt="3" fontSize="0">
          Hours
        </Box>
      </Box>
      <Box fontWeight="semibold">
        <Card>{minutes}</Card>
        <Box mt="3" fontSize="0">
          Minutes
        </Box>
      </Box>
      <Box fontWeight="semibold">
        <Card>{seconds}</Card>
        <Box mt="3" fontSize="0">
          Seconds
        </Box>
      </Box>
    </Wrap>
  )
}
export default Counter
