import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextProviders from './contexts/ContextProviders.tsx'
import CategoriesContext from './contexts/CategoriesContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ContextProviders>
                <CategoriesContext>
                    <App />
                </CategoriesContext>
            </ContextProviders>
        </BrowserRouter>
    </React.StrictMode>
)
