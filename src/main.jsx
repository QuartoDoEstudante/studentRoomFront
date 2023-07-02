import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import  theme  from './styles/theme'
import GlobalStyle from './styles/global'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { CreateAdFirst } from './pages/CreateAdFirst'
import { CreateAdSecond } from './pages/CreateAdSecond'
import { CreateAdSummary } from './pages/CreateAdSummary'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home/>
    </ThemeProvider>
  </React.StrictMode>,
)
