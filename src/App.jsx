import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import DynamicPage from './pages/DynamicPage.jsx'
import DemoPage from './pages/DemoPage.jsx'
import PreviewPage from './pages/PreviewPage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/preview" element={<PreviewPage />} />
      <Route path="/:slug" element={<DynamicPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
