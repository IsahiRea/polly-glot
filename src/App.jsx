import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Translation from './pages/Translation'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/translation">Translation</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translation" element={<Translation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
