import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

function PublicLayout() {
  useEffect(() => {
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add('hold-transition', 'login-page');
  }, []);
  return (
    <Outlet />
  )
}

export default PublicLayout