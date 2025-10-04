import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'
import FormFuncionario from './routes/FormFuncionarios/index.tsx'
import ListaFuncionario from './routes/ListaFuncionario/index.tsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/lista",element:<ListaFuncionario/>},
      {path:"/incluir",element:<FormFuncionario/>},
      {path:"/editar/:id",element:<FormFuncionario/>}
    
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)