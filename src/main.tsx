import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProviders from './contexts/ContextProviders.tsx'
import CategoriesContext from './contexts/CategoriesContext.tsx'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ContextProviders>
                <CategoriesContext>
                    <ToastContainer
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme='light'
                    />
                    <App />
                </CategoriesContext>
            </ContextProviders>
        </BrowserRouter>
    </React.StrictMode>
)
