import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from '../pages/Form'
import Register from '../pages/Register'
import Welcome from '../pages/Welcome'
import React from 'react'





function App() {
  const [user, setUser] = React.useState({ firstName: "" });

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route setUser={setUser} path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />
          <Route path="/formulario" element={<Form />} />

          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App
