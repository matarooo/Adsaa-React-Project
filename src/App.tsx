import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from "./Pages/MainLayout"
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"
import PostDetails from "./Pages/PostDetails"
const routes = createBrowserRouter([
  {
    path: '/', 
    element: <MainLayout />, 
    children: [
      { index: true, element: <Home /> },
      { path: 'blog', element: <Blog /> },         
      { path: 'blog/:slug', element: <PostDetails /> } 
    ]
  }
], {
  basename: "/Adsaa-React-Project" 
});

function App() {

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
