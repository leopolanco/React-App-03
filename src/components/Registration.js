import React, { useState } from 'react'
import { SquareIcon, CircleIcon } from '../resources/svg'
import RegistrationForm from '../components/RegistrationForm'

// ^\d{1,}(\,\d{0,2})?$  = 123123123,12

const Registration = () => {
  

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
          <div className='section--indicator'>
            <div className='section--description section--active'>
              <span className='section--number'>1</span>
              <span className='section--text'>Datos del jugador</span>
            </div>
            <div className='section--description'>
              <span className='section--number'>2</span>
              <span className='section--text'>Datos de equipos</span>
            </div>
            <div className='section--description'>
              <span className='section--number'>3</span>
              <span className='section--text'>Finalizacion</span>
            </div>
          </div>
          <RegistrationForm/>
        </div>
      </div>
    </div>
  )
}

export default Registration
