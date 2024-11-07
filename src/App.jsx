import { useState } from 'react'
import Card from './components/Card'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

// import './App.css'

const App = (props) => {

  const user = "Shiro"





  return (
    <>
      {/* <Navbar />
      <Footer /> */}

      <Card dog={user} />
      <Card dog="hero" />



    </>

  )
}

export default App
