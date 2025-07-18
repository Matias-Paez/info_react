import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import SongDetail from './pages/SongDetail.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/song/:id" element={<SongDetail />} />
          <Route path="*" element={<NotFound/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
