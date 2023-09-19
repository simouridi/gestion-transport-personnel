import React from 'react'
import { Outlet } from 'react-router-dom'

function ContentBody() {
  return (
    <section className="content">
      <div className="container-fluid">
        <Outlet />
      </div>
    </section>
  )
}

export default ContentBody