import React from 'react'
import ReactDOM from 'react-dom/client'
import { Menu } from './componets/menu'
import { GloabalStyle } from './stylle/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GloabalStyle />
    <Menu />
  </React.StrictMode>
)
