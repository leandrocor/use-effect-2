import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Empleados } from "./Containers"

const App = () => {
  const devs = ["Charly ", "Angi ", "Maribal ", "Lean "]
  const lideres = ["Daniel ", "Gabriel ", "Oradis "]
  const disenadores = ["Bruno ", "Paula "]
  const roles = [devs, lideres, disenadores]

  const [personas, setPersonas] = useState(roles[0])

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

  return <Empleados personas={personas} handleClick={handleSetRol} />
}

ReactDOM.render(<App />, document.getElementById("root"))

// const [showEmpleados, setShowEmpleados] = useState(true)

// setTimeout(() => {
//   setShowEmpleados(false)
// }, 5000)
