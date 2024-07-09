
import { Route,Routes } from "react-router-dom"
import { Nav } from "./routes/components/Nav"
import { HomeScreen } from "./routes/HomeScreen"
import { AboutScreen } from "./routes/AboutScreen"
import { ContactScreen } from "./routes/ContactScreen"
import { UsuarioProvider } from "./routes/context/UsuarioProvider"
import {Contador} from './pruebas/Contador'

export const App = () => {
  return (

    // llamammos al componente contador
    <Contador></Contador>
    // <UsuarioProvider>
    //    <Nav></Nav>
    //           <Routes>
    //             <Route path="/" element = {<HomeScreen></HomeScreen>} ></Route>
    //             <Route path="/about" element = { <AboutScreen></AboutScreen>} ></Route>
    //             <Route path="/contact" element = { <ContactScreen></ContactScreen>} ></Route>
    //           </Routes>
    // </UsuarioProvider>
       
    
  )
}
