import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { BranchSelector } from './pages/BranchSelector'
import { BranchPage } from './pages/BranchPage'

function App() {
  const location = useLocation()
  const isSelectorPage = location.pathname === '/'

  return (
    <div className="min-h-screen bg-white">
      {!isSelectorPage && <Header />}
      <Routes>
        <Route path="/" element={<BranchSelector />} />
        <Route path="/unidades/:branchId" element={<BranchPage />} />
      </Routes>
    </div>
  )
}

export default App