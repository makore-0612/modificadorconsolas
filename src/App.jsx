import { useEffect, useState } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Silk from './components/Silk'
import HomePage from './pages/HomePage'
import ConsolaPage from './pages/ConsolaPage'

function App() {
  const [datos, setDatos] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}modificaciones.json`)
      .then((res) => res.json())
      .then((data) => setDatos(data))
      .catch((err) => console.error('No se pudo cargar modificaciones.json', err))
  }, [])

  return (
    <div className="relative min-h-svh text-white font-mono">
      <div className="fixed inset-0 -z-10">
        <Silk speed={5} scale={0.6} color="#0000a3" noiseIntensity={5} rotation={42} />
      </div>

      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage datos={datos} />} />
          <Route path="/franquicia/:fSlug/consola/:cSlug" element={<ConsolaPage datos={datos} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
