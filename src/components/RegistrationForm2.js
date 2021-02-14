import React, { useState, useEffect } from 'react'
import nba from '../api/nba'
const RegistrationForm2 = ({
  onPageDone,
  onFreeNavigation,
  onFormSubmit,
  teamArray
}) => {
  const [results, setResults] = useState({})
  const [cities, setCities] = useState([])
  const [teams, setTeams] = useState({
    abreviatura: '',
    nombre: '',
    conferencia: '',
    ciudad: '',
    comentarios: ''
  })
  //if theres an old array, use that, if not, a clean one
  const [allTeams, setAllTeams] = useState(teamArray ? teamArray : [])
  const searchApi = async () => {
    try {
      const response = await nba.get(`/teams`, {})
      setResults(response.data.data) //data in a variable so we can split it later
    } catch (err) {
      console.error(err.message)
    }
  }

  const handleAbreviatura = e => {
    if (e.target.value.match(/^[a-zA-Z]{0,3}$/)) {
      //regex for 3 letters only
      setTeams({ ...teams, abreviatura: e.target.value.toUpperCase() })
    }
  }
  const handleNombre = e => {
    if (e.target.value.length <= 20) {
      setTeams({ ...teams, nombre: e.target.value })
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    setAllTeams(allTeams => [...allTeams, teams])
    setTeams({
      //set everything back to default
      abreviatura: '',
      nombre: '',
      conferencia: '',
      ciudad: '',
      comentarios: ''
    })
  }
  const handleNextButton = () => {
    onPageDone(3)
    onFreeNavigation(true)
    onFormSubmit(allTeams)
  }

  useEffect(() => {
    searchApi()
  }, []) //search api on page load
  useEffect(() => {
    if (results.length > 0) {
      results.map(i =>
        setCities(cities => [...cities, i.city])
        //take the old cities, insert a new city
        //this repeats as long as results.length
      )
    }
  }, [results])
console.log(allTeams)
  return (
    <>
      <form onSubmit={handleSubmit} method='GET'>
        <div className='section__form'>
          <input
            type='text'
            placeholder='Abreviatura '
            value={teams.abreviatura}
            onChange={handleAbreviatura}
            required
          />
          <select
            type='text'
            defaultValue=''
            onChange={e => {
              setTeams({ ...teams, conferencia: e.target.value })
            }}
            required
          >
            <option value='' disabled hidden>
              {/* Set this position for the first time */}
              Conferencia
            </option>
            {/* Aunque solo hay 2 conferencias, colocamos las 4 que indica la guia */}
            <option value='Este'>Este</option>
            <option value='Oeste'>Oeste</option>
            <option value='Norte'>Norte</option>
            <option value='Sur'>Sur</option>
          </select>
          <textarea
            type='text'
            placeholder='Comentarios '
            value={teams.comentarios}
            onChange={e => {
              setTeams({ ...teams, comentarios: e.target.value })
            }}
            required
          />
          <input
            type='text'
            placeholder='Nombre Equipo'
            value={teams.nombre}
            onChange={handleNombre}
            required
          />
          <select
            type='text'
            defaultValue=''
            onChange={e => {
              setTeams({ ...teams, ciudad: e.target.value })
            }}
            required
          >
            <option value='' disabled hidden>
              Ciudad
            </option>
            {cities.map((i, index) => (
              <option key={`${i}${index}`} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <button className='section__form--button' type='submit'>
          Agregar
        </button>
      </form>
      {allTeams.length > 0 && (
        <button className='section__form--button' onClick={handleNextButton}>
          Siguiente
        </button>
      )}
      <div className='team__table'>
        {allTeams.length > 0 && (
          <>
            <div className='team__table--header'>
              <div>Abreviatura</div>
              <div>Nombre equipo</div>
              <div>Conferencia</div>
              <div>Ciudad</div>
              <div>Comentarios</div>
            </div>
            {allTeams.map((team, index) => (
              <div
                className='team__table--body'
                key={`${team}${index}`}
                onClick={() => setAllTeams(allTeams.filter(i=>i!==allTeams[index]))}
                //that onclick takes out the clicked team
              >
                <div>{team.abreviatura}</div>
                <div>{team.nombre}</div>
                <div>{team.conferencia}</div>
                <div>{team.ciudad}</div>
                <div>{team.comentarios}</div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default RegistrationForm2
