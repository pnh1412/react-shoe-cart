import React from 'react'

function Typhography({ text, className }) {
  return (
    <div className={`typhography ${className}`}>{text}</div>
  )
}

export default Typhography