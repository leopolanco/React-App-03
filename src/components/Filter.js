// this page is unfinished

//should be replaced by a selector who
//sorts the array 


import React, { useState} from 'react'
// import nba from '../api/nba'
import {SearchIcon} from '../resources/svg'
const Filter = () => {

  const [searchNombre, setSearchNombre] = useState('')
  const [searchApellido, setSearchApellido] = useState('')
  // const [result, setResult] = useState({})

  // const apiLastName = async lastname => {
  //   try {
  //     const response = await nba.get(`/players/firstName/${lastname}`)
  //     setResult(response.data)
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }
  // const apiFirstName = async firstname => {
  //   try {
  //     const response = await nba.get(`/players/firstName/${firstname}`)
  //     setResult(response.data)
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }
  const handleSearch = e => {
    if (!e.target.value || e.target.value.match(/[a-zA-Z]+/)) {
      if (e.target.name === 'nombre') {
        setSearchNombre(e.target.value)
      } else if (e.target.name === 'apellido') {
        setSearchApellido(e.target.value)
      }
    }
  }
  // useEffect(() => {
  //   if (searchNombre.length>0) {
  //     apiFirstName(searchNombre)
  //   }
  // }, [searchNombre])

  // useEffect(() => {
  //   if (searchApellido.length>0) {
  //     apiLastName(searchApellido)
  //   }
  // }, [searchApellido])
  return (
    <div className='filter'>
      <span><SearchIcon/></span>
      <input
        type='text'
        placeholder='Nombre'
        name='nombre'
        value={searchNombre}
        onChange={handleSearch}
        onFocus={()=>setSearchNombre('')}
      //clean the field when focused
      />
      <input
        type='text'
        placeholder='Apellido'
        name='apellido'
        value={searchApellido}
        onChange={handleSearch}
        onFocus={()=>setSearchApellido('')}
      />
    </div>
  )
}

export default Filter
