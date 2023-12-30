import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Middle from './components/Middle'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import History from './pages/History'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {
  const notify = (type, message) => {
    switch (type) {
      case "error":
        toast.error(message, {
          position: "top-center",
          autoClose: 3500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        break
      case "success":
        toast.success(message, {
          position: "top-center",
          autoClose: 3500, 
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        break
      default:
        toast.info(message, {
          position: "top-center",
          autoClose: 3500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        break
    }
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home toast={notify} />,
    },
    {
      path: "/history",
      element: <History />
    },
    {
      path : "*",
      element : <div> Page you are searching for is not found</div>
    }
  ]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
