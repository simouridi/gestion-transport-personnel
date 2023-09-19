import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const history = useHistory();


  useEffect(()=>{
      const unlisten = history.listen(() => {
        window.location.reload();
      });
      return () => {
        unlisten();
      };
    //window.location.reload();
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add('hold-transition', 'sidebar-mini', 'layout-fixed');
  }, [])

  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard