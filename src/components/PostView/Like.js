import React, { useState } from "react"

export const LikeBtn = ({ like, onClick }) => {
  const [src, setSrc] = useState("")

  if ({ like }) {
    setSrc("./images/heartfilled.png")
  } else {
    setSrc("./images/heart.png")
  }

  return <img src={src} onClick={onClick} />
}
