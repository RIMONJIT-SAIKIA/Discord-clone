import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Pages/Home.jsx'
import Nitro from './components/Pages/Nitro.jsx'
import Support from './components/Pages/Support.jsx'
import Safety from './components/Pages/Safety.js'
import Quest from './components/Pages/Quest.js'
import Download from './components/Pages/Download.jsx'
import Discover from './components/Pages/Discover.jsx'
import Careers from './components/Pages/Careers.jsx'
import Blog from './components/Pages/Blog.js'
import Developer from './components/Pages/Developer.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },{
      path:'/nitro',
        element: <Nitro/>
      },{
      path:'/developer',
        element: <Developer/>
      },{
      path:'/blog',
        element: <Blog/>
      },{
      path:'/careers',
        element: <Careers/>
      },{
      path:'/discover',
        element: <Discover/>
      },{
      path:'/download',
        element: <Download/>
      },{
      path:'/quest',
        element: <Quest/>
      },{
      path:'/safety',
        element: <Safety/>
      },{
      path:'/support',
        element: <Support/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
