import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tratores from './pages/Tratores'
import TractorDetail from './pages/TractorDetail'
import SobreNos from './pages/SobreNos'
import Contacto from './pages/Contacto'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tratores" element={<Tratores />} />
        <Route path="/tratores/:id" element={<TractorDetail />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Layout>
  )
}

export default App
