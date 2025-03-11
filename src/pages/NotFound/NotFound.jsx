import React from 'react'
import Error from '../../assets/images/Error.png'

export const NotFound = () => {
  return (
    <>
      <img src={Error} alt="Error 404" className="w-full h-full" />
    </>
  )
}
