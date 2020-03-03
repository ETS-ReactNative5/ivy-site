import { useState, useEffect } from "react"
import throttle from "src/utils/throttle"

const getSizeFromWidth = width => {
  if (width <= 320) {
    return "xs"
  } else if (width > 320 && width < 768) {
    return "sm"
  } else if (width >= 768 && width < 1024) {
    return "md"
  } else if (width >= 1024 && width <= 1280) {
    return "lg"
  } else if (width > 1280) {
    return "xl"
  }
}

export default () => {
  const [size, setSize] = useState(
    getSizeFromWidth(typeof window !== `undefined` ? window.innerWidth : 321)
  )
  useEffect(() => {
    setSize(
      getSizeFromWidth(typeof window !== `undefined` && window.innerWidth)
    )
    const calcSize = throttle(() => {
      setSize(
        getSizeFromWidth(typeof window !== `undefined` && window.innerWidth)
      )
    })
    typeof window !== `undefined` && window.addEventListener("resize", calcSize)
    return () => {
      typeof window !== `undefined` &&
        window.removeEventListener("resize", calcSize)
    }
  }, [])
  return { breakpoint: size }
}
