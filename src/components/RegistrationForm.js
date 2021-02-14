import React, { useState, useEffect } from 'react'
import moment from 'moment'
const RegistrationForm = () => {
  const [positionAditionalForm, setPositionAditionalForm] = useState(false)
  const [age, setAge] = useState(0)
  const [BDay, setBDay] = useState('')
  const [position, setPosition] = useState('')
  
  useEffect(() => {
    //set age
    const now = moment().format('YYYY-MM-DD')
    const birthday = moment(BDay) //need to relation both values to moment before doing a diff
    setAge(Math.abs(birthday.diff(now, 'years')))
  }, [BDay])

  const handleExtraPosition = e => {
    e.target.checked //When it is checked insert the position
      ? setPosition(`${e.target.value}-${position}`)
      : setPosition(position.split(`${e.target.value}-`).join('')) //When it is unchecked, take the position out
  }
  return (
    <>
      <form>
        <div className='section__form'>
          <input type='text' placeholder='Primer nombre *' required />
          <input type='text' placeholder='Apellido *' required />
          <input type='text' placeholder='Altura (pulgadas)' />
          <input type='text' placeholder='Altura (pies)' />
          <input type='text' placeholder='Peso ' />
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
            defaultValue={age ? `Edad: ${age} años` : '-'}
          />
        </div>
        <button className='section__form--button' type='submit'>
          Next
        </button>
      </form>
    </>
  )
}

export default RegistrationForm
