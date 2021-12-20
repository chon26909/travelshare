import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//component 
import ProtectedRoute from "./auth/ProtectedRoute";
import LoadingPage from './components/LoadingPage';
import LoginPage from './pages/LoginPage';
import AdminLayout from './layouts/AdminLayout';

//pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Setting = React.lazy(() => import('./pages/Setting'));

const App = () => {
  return (
    <React.Suspense fallback={<LoadingPage/>}>
      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage/>} />
          </Route>

          <Route element={<ProtectedRoute />}>

            <Route path="me">
              <Route index element={<Profile />} />
              <Route path="setting" element={<Setting />} />
            </Route>

            <Route path='admin' element={ <AdminLayout/ >}>
              <Route index element={ <Profile/>} />
            </Route>

          </Route>

          

        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
