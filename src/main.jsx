import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/childrens/Home.jsx'
import Nitro from './components/childrens/Nitro.jsx'
import Support from './components/childrens/Support.jsx'
import Safety from './components/childrens/Safety.jsx'
import Quest from './components/childrens/Quest.jsx'
import Download from './components/childrens/Download.jsx'
import Discover from './components/childrens/Discover.jsx'
import Careers from './components/childrens/Careers.jsx'
import Blog from './components/childrens/Blog.jsx'
import Developer from './components/childrens/Developer.jsx'

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
