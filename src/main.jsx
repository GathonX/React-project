import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'

const elementJsx = <App/>
ReactDom.createRoot(document.getElementById('root')).render(elementJsx)
