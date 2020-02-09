import React, { useState, useEffect } from "react"

export const Empleados = ({ personas, handleClick }) => {
  const [cargo, setCargo] = useState(personas)
  const [count, setCount] = useState(0)

  console.log("1 - Leo el estado")

  return (
    <>
      {console.log("2 - Me estoy montando")}
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

// UseEffect modo ComponentDidUpdate
// useEffect(() => {
//   console.log("3 - Solo me ejecuto cuando peronas cambia su valor")
//   setCargo(personas)
// }, [personas])

// useEffect(() => {
//   console.log("3 - Solo me ejecuto una vez")
// }, [])

// UseEffect modo ComponentDidUpdate
// useEffect(() => {
//   setCargo(personas)
// }, [personas])

// const [windowSize, setWindowSize] = useState(window.innerWidth)

// UseEffect modo ComponentWillUnmount. Con saneamiento de eventos.
// useEffect(() => {
//   const size = () => {
//     setWindowSize(window.innerWidth)
//     console.log(windowSize)
//   }

//   window.addEventListener("resize", size)

//   return () => {
//     window.removeEventListener("resize", size)
//   }
// }, [windowSize])
