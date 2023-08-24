import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from '../pages/Form'
import Register from '../pages/Register'




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/formulario" element={<Form />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App
