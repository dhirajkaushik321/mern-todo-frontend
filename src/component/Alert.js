import React from 'react'

const Alert = ({type,message}) => {
    return (
      <div className={`alert alert-${type} alert-dismissible fade show p-4 `} role="alert">
      {message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>

    )
}

export default Alert
