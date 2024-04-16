import React from 'react'
import { useBackgroundContext } from '../Context/BackgroundSelection'
function Points() {
  const {background} =  useBackgroundContext()
  const {points} = background
  return (
    <div>Your Store Credit: ${points} </div>
  )
}

export default Points