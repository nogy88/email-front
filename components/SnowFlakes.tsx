'use client'
import React, { FunctionComponent, useEffect, useState } from 'react'

const SnowFlakes: FunctionComponent = () => {
  const [snowflakes, setSnowflakes] = useState(50)

  useEffect(() => {
    // Adjust the number of snowflakes based on the screen size
    if (window.innerWidth < 768) {
      setSnowflakes(40) // Fewer snowflakes for mobile
    }
  }, [])

  return (
    <div className='w-full h-full min-h-screen z-50 fixed left-0 top-0'>
      {Array.from({ length: snowflakes }).map((_, index) => (
        <div
          key={index}
          className='snowflake'
          style={{
            left: `${Math.random() * 100}vw`, // Random horizontal position
            animationDuration: `${Math.random() * 5 + 5}s`, // Random animation duration
            animationDelay: `${Math.random() * 5}s`, // Random delay
            width: `${Math.random() * 5 + 5}px`, // Random size
            height: `${Math.random() * 5 + 5}px` // Random size
          }}
        />
      ))}
    </div>
  )
}

export default SnowFlakes
