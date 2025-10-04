import { Outlet } from "react-router-dom";
import './App.css'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Menu from "./components/Menu";
function App(){

  return(
    <>
      <Cabecalho/>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App