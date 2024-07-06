import { useContext } from "react"
import { usuarioContext } from "./context/UsuarioContext"

// El useContex nos sirve para consumir información que nos provee una capa externa
export const HomeScreen = () => {

  const {usuario} = useContext(usuarioContext)

  return (
    <div className="container">
      <table className="table table-bordered">
          <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Tecnología</th>
                <th scope="col">Email</th>
                <th scope="col">Instagram</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{usuario.nombre}</th>
              <td>{usuario.tecnologia}</td>
              <td>{usuario.mail}</td>
              <td>{usuario.ig}</td>
            </tr>
          </tbody>
    </table>

    </div>
  )
}
