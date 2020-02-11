import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Empleados } from "./Containers"

const App = () => {
  const devs = ["Charly ", "Angi ", "Maribal ", "Lean "]
  const lideres = ["Daniel ", "Gabriel ", "Oradis "]
  const disenadores = ["Bruno ", "Paula "]
  const roles = [devs, lideres, disenadores]

  const [personas, setPersonas] = useState(roles[0])
  const [showEmpleados, setShowEmpleados] = useState(true)

  function cambioCargo(key) {
    switch (key) {
      case "devs":
        return setPersonas(roles[0])
      case "lideres":
        return setPersonas(roles[1])
      case "disenadores":
        return setPersonas(roles[2])
      default:
        console.log("nada")
    }
  }

  const handleSetRol = e => {
    cambioCargo(e.target.getAttribute("data-rol"))
  }

  return (
    <>
      {showEmpleados ? (
        <Empleados personas={personas} handleClick={handleSetRol} />
      ) : (
        <p>Se desmontó Empleados</p>
      )}
      <button onClick={() => setShowEmpleados(!showEmpleados)}>
        Montar / Desmantar Empleados
      </button>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
