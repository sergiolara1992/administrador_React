import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from '../pages/Form'




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Form />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App
