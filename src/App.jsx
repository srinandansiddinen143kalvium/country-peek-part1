import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import CountryPage from './pages/CountryPage'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryPage />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
