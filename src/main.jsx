import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';
import JobDetails from './components/JobDetails/JobDetails';
import ApplyedJobs from './components/ApplyedJobs/ApplyedJobs';
import MarkChart from './components/Chart/MarkChart';
import ErrorPages from './components/ErrorPages';
import Blog from './components/Blog/Blog';
const router= createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },{
        path:"/jobdetails/:id",
        element:<JobDetails title="Job Details"></JobDetails>,
        loader:({params})=>fetch(`/jobs.json`)
      },
      {
        path:"/applyedJobs",
        element:<ApplyedJobs title="Applied Jobs"/>,
        // loader:()=>fetch("/jobs.json")
      },
      {
        path:"/statistics",
        element:<MarkChart/>
      },
      {
        path:"/blog",
        element:<Blog title="Blog"></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
