import React from 'react'

function  SingleImage({ name, ...restProps }) {
  return (
    <img {...restProps} />
  )
}

export default  SingleImage