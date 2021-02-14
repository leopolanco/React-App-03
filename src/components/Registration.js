import React, { useState } from 'react'
import { SquareIcon, CircleIcon } from '../resources/svg'
import RegistrationForm from '../components/RegistrationForm'
import RegistrationForm2 from '../components/RegistrationForm2'
import RegistrationFinal from '../components/RegistrationFinal'

const Registration = () => {
  const [currPage, setCurrPage] = useState(1)
  const [freeNavigation, setFreeNavigation] = useState(false)
  const [player, setPlayer] = useState({})//need the values in the parent so we can save them for later
  const [teamArray, setTeamArray] = useState([])
  return (
    <div className='reg'>
      <div className='reg__header'>
        <div className='header--title'>
          <SquareIcon />
          Referrals
        </div>
        <div className='header__buttons'>
          <div className='header__buttons--buttonBlue'>
            <SquareIcon />
            Referral Report
          </div>
          <div className='header__buttons--buttonYellow'>
            <SquareIcon />
            New Referral
          </div>
        </div>
      </div>
      <div className='reg__content'>
        <div className='reg__content__left'>
          <div className='reg__id'>
            <span>
              <CircleIcon />
            </span>
            <span>John Doe</span>
            <span>#12345678</span>
          </div>
        </div>
        <div className='reg__content__right'>
          {freeNavigation && (
            <div className='freeNavigation__buttons'>
              <div
                className={`freeNavigation--button ${
                  currPage === 1 && `button--active`
                }`}
                onClick={() => setCurrPage(1)}
              >
                Datos de jugador
              </div>
              <div
                className={`freeNavigation--button ${
                  currPage === 2 && `button--active`
                }`}
                onClick={() => setCurrPage(2)}
              >
                Datos de equipos
              </div>
              <div
                className={`freeNavigation--button ${
                  currPage === 3 && `button--active`
                }`}
                onClick={() => setCurrPage(3)}
              >
                Finalizacion
              </div>
            </div>
          )}

          <div className='section--indicator'>
            <div
              className={`section--description ${
                currPage === 1 && `section--active`
              }`}
            >
              <span className='section--number'>1</span>
              <span className='section--text'>Datos del jugador</span>
            </div>
            <div
              className={`section--description ${
                currPage === 2 && `section--active`
              }`}
            >
              <span className='section--number'>2</span>
              <span className='section--text'>Datos de equipos</span>
            </div>
            <div
              className={`section--description ${
                currPage === 3 && `section--active`
              }`}
            >
              <span className='section--number'>3</span>
              <span className='section--text'>Finalizacion</span>
            </div>
          </div>

          {currPage === 1 ? (
            <RegistrationForm onPageDone={step => setCurrPage(step)} onFormSubmit={data => setPlayer(data)} player={player}/>
          ) : currPage === 2 ? (
            <RegistrationForm2
              onPageDone={step => setCurrPage(step)}
              onFreeNavigation={permission => setFreeNavigation(permission)}
              onFormSubmit={data => setTeamArray(data)}
              teamArray={teamArray}
            />
          ) : currPage === 3 ? (
            <RegistrationFinal />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default Registration
