import { lazy, Suspense, useEffect, useState } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import useFondoAnimado from './hooks/useFondoAnimado'
import HomePage from './pages/HomePage'
import ConsolaPage from './pages/ConsolaPage'

// Se carga solo si se va a usar, así el celular no descarga three.js
const Silk = lazy(() => import('./components/Silk'))

const fondoPlano = {
  background: 'linear-gradient(135deg, #2b2bd6 0%, #0000a3 50%, #00004d 100%)',
}

function App() {
  const [datos, setDatos] = useState(null)
  const animado = useFondoAnimado()

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}modificaciones.json`)
      .then((res) => res.json())
      .then((data) => setDatos(data))
      .catch((err) => console.error('No se pudo cargar modificaciones.json', err))
  }, [])

  return (
    <div className="relative min-h-svh text-white font-mono">
      <div className="fixed inset-0 -z-10" style={fondoPlano}>
        {animado && (
          <Suspense fallback={null}>
            <Silk speed={5} scale={0.6} color="#0000a3" noiseIntensity={5} rotation={42} />
          </Suspense>
        )}
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
