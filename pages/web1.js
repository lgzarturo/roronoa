/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

export default function Web1(props) {
  const { account } = props
  const [url, setUrl] = useState('')

  useEffect(() => {
    console.log(window.location.origin)
    setUrl(window.location.origin)
  }, [])
  return (
    <h1>
      Web1 {account} - {url}
    </h1>
  )
}
