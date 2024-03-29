import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import './styling/alignment.css'
import './styling/size.css'
import './styling/form-element.css'
import './styling/theme.css'
import './styling/custom.css'
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './pages/Admin';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
                            <ProtectedRoute>
                            <Home/>
                            </ProtectedRoute>
        }/>
        <Route path='admin' element={
                            <ProtectedRoute>
                            <Admin/>
                            </ProtectedRoute>
        }/>
        <Route path='/profile' element={
                            <ProtectedRoute>
                            <Profile/>
                            </ProtectedRoute>
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
