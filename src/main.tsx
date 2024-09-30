import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import { Login } from '@mui/icons-material'

const theme = extendTheme({
  "colorSchemes": {
    "light": {
      "palette": {
        "primary": {
          "50": "#fff7ed",
          "100": "#ffedd5",
          "200": "#fed7aa",
          "300": "#fdba74",
          "400": "#fb923c",
          "500": "#f97316",
          "600": "#ea580c",
          "700": "#c2410c",
          "800": "#9a3412",
          "900": "#7c2d12"
        }
      }
    },
    "dark": {
      "palette": {}
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </CssVarsProvider>

  </React.StrictMode>,
)
