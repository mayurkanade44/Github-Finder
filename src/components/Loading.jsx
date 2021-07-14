import React from 'react'

const Loading = () => {
    return (
      <div className='d-flex justify-content-center mt-5'>
        <div className="spinner-border" style={{width:100, height:100}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
}

export default Loading
