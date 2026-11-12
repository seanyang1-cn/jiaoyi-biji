import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { SiteLayout } from "@/components/site-layout"
import { ArticlePage } from "@/pages/article-page"
import { HomePage } from "@/pages/home-page"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/2026-10" element={<HomePage />} />
          <Route path="/case-study/:slug" element={<ArticlePage />} />
          <Route path="/mindset/:slug" element={<ArticlePage />} />
          <Route path="/process/:slug" element={<ArticlePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
