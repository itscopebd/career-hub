import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';
import JobDetails from './components/JobDetails/JobDetails';
import ApplyedJobs from './components/ApplyedJobs/ApplyedJobs';
const router= createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },{
        path:"/jobdetails/:id",
        element:<JobDetails></JobDetails>,
        loader:({params})=>fetch(`/jobs.json`)
      },
      {
        path:"/applyedJobs",
        element:<ApplyedJobs/>,
        loader:()=>fetch("/jobs.json")
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
