import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { BranchPage } from './pages/BranchPage'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unidades/:branchId" element={<BranchPage />} />
      </Routes>
    </div>
  )
}

export default App