import React, { useState, useEffect } from 'react'
import moment from 'moment'
const RegistrationForm = ({onPageDone, onFormSubmit, player}) => {
  const [positionAditionalForm, setPositionAditionalForm] = useState(false)
  const [BDay, setBDay] = useState('')
  const [position, setPosition] = useState('')
  const [playerData, setPlayerData] = useState({
    //If theres an old value, use the old value, if not, use default
    nombre: player ? player.nombre : '',
    apellido: player ? player.apellido : '',
    alturaPulgadas: player ? player.alturaPulgadas : 0,
    alturaPies: player ? player.alturaPies : 0,
    peso: player ? player.peso : 0,
    position: player ? player.position : position,
    age:player ? player.age : 0
  })

  const { nombre, apellido, alturaPulgadas, alturaPies, peso, age } = playerData
  //destructuring

  const handleNombre = e => {
    if (!e.target.value || e.target.value.match(/[a-zA-Z]+/)) {
      setPlayerData({ ...playerData, [e.target.name]: e.target.value.toUpperCase() })
    }
  }
  const handleNumero = e => {
    if (!e.target.value || e.target.value.match(/^\d{1,}(,\d{0,2})?$/)) {
      //this regex allows  2 numbers after decimals
      setPlayerData({ ...playerData, [e.target.name]: e.target.value })
    }
  }

  const handleExtraPosition = e => {
    e.target.checked //When it is checked insert the position
      ? setPosition(`${e.target.value}-${position}`)
      : setPosition(position.split(`${e.target.value}-`).join('')) //When it is unchecked, take the position out
  }
  const handleSubmit = e => {
    e.preventDefault()
    onFormSubmit({...playerData})//save the player data
    onPageDone(2)//go to the next page
  }
  useEffect(() => {
    //set age
    const now = moment().format('YYYY-MM-DD')
    const birthday = moment(BDay) //need to relation both values to moment before doing a diff
    const actualAge = Math.abs(birthday.diff(now, 'years'))
    setPlayerData({ ...playerData, age:actualAge})
  }, [BDay])
  return (
    <>
      <form onSubmit={handleSubmit} method='GET'>
        <div className='section__form'>
          <input
            type='text'
            placeholder='Primer nombre *'
            minLength='3'
            maxLength='20'
            name='nombre'
            value={nombre}
            onChange={handleNombre}
            required
          />
          <input
            type='text'
            placeholder='Apellido *'
            minLength='3'
            maxLength='20'
            name='apellido'
            value={apellido}
            onChange={handleNombre}
            required
          />
          <input
            type='text'
            placeholder='Altura (pulgadas)'
            maxLength='20'
            name='alturaPulgadas'
            value={alturaPulgadas ? alturaPulgadas : ''}
            onChange={handleNumero}
          />
          <input
            type='text'
            placeholder='Altura (pies)'
            name='alturaPies'
            maxLength='20'
            value={alturaPies ? alturaPies : ''}
            onChange={handleNumero}
          />
          <input
            type='text'
            placeholder='Peso '
            maxLength='20'
            name='peso'
            value={peso ? peso : ''}
            onChange={handleNumero}
          />
          <select
            type='text'
            defaultValue=''
            onChange={e => {
              setPositionAditionalForm(true)
              setPosition(e.target.value)
            }}
            required
          >
            <option value='' disabled hidden>
              {/* Set this position for the first time */}
              Positions *
            </option>
            <option value='A'>A</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
            <option value='D'>D</option>
            <option value='E'>E</option>
          </select>

          {positionAditionalForm && (
            <div>
              <input type='text' placeholder='Comentarios ' />
              <input type='text' placeholder='Años en la posicion ' />
              <span className='additionalPositions'>
                Otras posiciones:
                <input
                  type='checkbox'
                  name='A'
                  value='A'
                  onChange={handleExtraPosition}
                  checked={position.indexOf('A') > -1}
                  //This checks if there's an A in the positions
                />
                <label htmlFor='A'> A</label>
                <input
                  type='checkbox'
                  name='B'
                  value='B'
                  onChange={handleExtraPosition}
                  checked={position.indexOf('B') > -1}
                />
                <label htmlFor='B'> B</label>
                <input
                  type='checkbox'
                  name='C'
                  value='C'
                  onChange={handleExtraPosition}
                  checked={position.indexOf('C') > -1}
                />
                <label htmlFor='C'> C</label>
                <input
                  type='checkbox'
                  name='D'
                  value='D'
                  onChange={handleExtraPosition}
                  checked={position.indexOf('D') > -1}
                />
                <label htmlFor='D'> D</label>
                <input
                  type='checkbox'
                  name='E'
                  value='E'
                  onChange={handleExtraPosition}
                  checked={position.indexOf('E') > -1}
                />
                <label htmlFor='E'> E</label>
              </span>
            </div>
          )}

          <input
            type='date'
            onChange={e => setBDay(e.target.value)}
            placeholder='Fecha de nacimiento *'
            required
          />
          <input
            type='text'
            placeholder='Edad'
            value={age >= 0 ? `Edad: ${age} años` : ''}
            readOnly={true}
          />
        </div>
        <button className='section__form--button' type='submit'>
          Siguiente
        </button>
      </form>
    </>
  )
}

export default RegistrationForm
