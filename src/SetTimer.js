import React from 'react'

function SetTimer({handleTimeChange}) {
  return (
    <form>
    <label htmlFor="start-time">Set Timer value in seconds: </label>
    <input
      placeholder="00s"
      type="number"
      id="start-time"
      pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
      onChange={handleTimeChange}
    />
  </form>
  )
}

export default SetTimer