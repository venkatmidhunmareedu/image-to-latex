import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Middle from './components/Middle'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <Middle toast={notify} />
      <Footer />
    </>
  )
}

export default App
