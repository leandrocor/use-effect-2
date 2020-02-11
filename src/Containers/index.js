import React, { useState, useEffect } from "react"

export const Empleados = ({ personas, handleClick }) => {
  const [cargo, setCargo] = useState(personas)
  const [count, setCount] = useState(0)
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  console.log("1 - Leo el estado.")

  //UseEffect modo ComponentDidUpdate (Actualizar estado, fetch de data)
  useEffect(() => {
    console.log(
      "3(Efectos secundarios) - Solo me ejecuto personas(prop) cambia su valor.)"
    )
    setCargo(personas)
  }, [personas])

  //UseEffect modo ComponentDidMount (Consultas al DOM, fetch de data)
  useEffect(() => {
    console.log(
      "3(Efectos secundarios) - Solo me ejecuto una vez (Cuando el componente se monta por primera vez. No en cada re-render.)"
    )
  }, [])

  //UseEffect modo ComponentWillUnmount (Remover eventos y listeners)
  useEffect(() => {
    console.log(
      "3(Efectos secundarios) - Solo me ejecuto cuando windowSize cambia su valor. Cuando el componente se desmanta limpio eventos y listeners."
    )

    const size = () => {
      setWindowSize(window.innerWidth)
      console.log(windowSize)
    }

    window.addEventListener("resize", size)

    return () => {
      window.removeEventListener("resize", size)
    }
  }, [windowSize])

  return (
    <>
      {console.log("2 - Estoy llamando al metodo render.")}
      <h1>{cargo}</h1>
      <br />
      <button onClick={e => handleClick(e)} data-rol="devs">
        ver devs
      </button>
      <button onClick={e => handleClick(e)} data-rol="lideres">
        ver lideres
      </button>
      <button onClick={e => handleClick(e)} data-rol="disenadores">
        ver diseñadores
      </button>
      <p>ESTADO de mi componente: {cargo}</p>
      <p>La PROP que me está llegando: {personas}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>Aumentar count</button>
      <span>{count}</span>
    </>
  )
}
