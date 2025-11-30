"use client"

import { useState, useEffect } from "react"

export function useTypingAnimation(text: string, speed = 50, startDelay = 0) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Wait for startDelay before beginning animation
    const delayTimer = setTimeout(() => {
      let currentIndex = 0

      const typingTimer = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          setIsComplete(true)
          clearInterval(typingTimer)
        }
      }, speed)

      return () => clearInterval(typingTimer)
    }, startDelay)

    return () => clearTimeout(delayTimer)
  }, [text, speed, startDelay])

  return { displayedText, isComplete }
}
