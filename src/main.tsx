import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductsContext from './contexts/ProductsContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ProductsContext>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </ProductsContext>
)
