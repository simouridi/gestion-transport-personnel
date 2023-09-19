import {Routes, Route } from 'react-router-dom'
import ProtectedLayout from './components/layouts/ProtectedLayout';
import PublicLayout from './components/layouts/PublicLayout';
import Dashboard from './components/pages/protected/Dashboard';
import Client from './components/pages/protected/Client';
import Login from './components/pages/public/Login';
import Register from './components/pages/public/Register';
import ForgotPassword from './components/pages/public/ForgotPassword';
import RecoverPassword from './components/pages/public/RecoverPassword';

function App() {
  return (
    <Routes>
      <Route path='/protected'  element={<ProtectedLayout />}>
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path='client' element={<Client />}/>
      </Route>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<Login />}/>
        <Route path='register' element={<Register />}/>
        <Route path='forgot-password' element={<ForgotPassword />}/>
        <Route path='recover-password' element={<RecoverPassword />}/>
      </Route>
    </Routes>
  );
}

export default App;
