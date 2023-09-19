import React, { useEffect } from 'react'
import Sidebar from './shared/Sidebar'
import Footer from './shared/Footer'
import Content from './shared/Content'
import Navbar from './shared/Navbar'

function ProtectedLayout() {
  useEffect(() => {
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add('hold-transition', 'sidebar-mini', 'layout-fixed');
  }, []);
  return (
    <div className="wrapper">
        <div className="preloader flex-column justify-content-center align-items-center">
            <img className="animation__shake" src="/assets/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" />
        </div>
        
        <Navbar />
        <Sidebar />
        <Content />
        <Footer />
        <aside className="control-sidebar control-sidebar-dark"></aside>
    </div>
    
  )
}

export default ProtectedLayout