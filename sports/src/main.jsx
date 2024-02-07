import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MatchScore from './components/MatchScore/MatchScore.jsx';
import MatchDetails from './components/MatchDetails/MatchDetails.jsx';
import AuthProvider from './components/Auth/AuthProvider/AuthProvider.jsx';
import OfficeRegister from './components/AccessControl/Register/OfficeRegister.jsx';
import OfficeLogin from './components/AccessControl/Login/OfficeLogin.jsx';
import PrivateRoute from './components/Route/PrivateRoute.jsx';
import Admin from './components/Admin/Admin.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <MatchScore></MatchScore>,
        loader: () =>  fetch('http://localhost:3000/matchscore') 
      },
      {
        path: "/matchdetails/:id",
        element: <MatchDetails></MatchDetails>,
        loader: ({ params }) => fetch(`http://localhost:3000/matchdetails/${params.id}`)
      },
      {
        path: "/register",
        element: <OfficeRegister></OfficeRegister>,
      },
      {
        path: "/login",
        element: <OfficeLogin></OfficeLogin>,
      },
      {
        path: "/admin",
        element: <PrivateRoute><Admin></Admin></PrivateRoute>,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
