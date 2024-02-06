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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
    
  </React.StrictMode>,
)
