import React from 'react'

const Loading = ({msg}) => {
  return (
    <div className="d-flex align-items-center p-4">
    <strong>{msg}</strong>
    <div className="spinner-border ml-auto" role="status" aria-hidden="true" />
  </div>
  )
}


export default Loading
