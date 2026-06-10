import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import HomeView from './views/HomeView'
import MapView from './views/MapView'

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/map" element={<MapView />} />
      </Routes>
    </PageLayout>
  )
}

export default App
