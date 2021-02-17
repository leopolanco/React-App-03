import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { SwitchIcons } from '../resources/svg'
const LoginPage = () => {
  const [redirect, setRedirect] = useState(false)
  const [user, setUser] = useState('')

  const handleUser = e => {
    if (!e.target.value || e.target.value.match(/[a-zA-Z]+/)) {
    setUser(e.target.value)
    }
  }
  const onSubmitHandler = () => {
    setRedirect(true)
  }
  return (
    <div className='container'>
      <div className='login__container'>
        <div className='switchVersion'>
          <Link to='/dashboard'>
            <span className='switchVersion--icon'>A</span>
            <SwitchIcons />
            Click here to go to the next page
          </Link>
        </div>
        <div className='login__container--left'>
          <span>ARC</span>
        </div>
        <div className='login__container--right'>
          <div className='form__container'>
            <div className='form--greetings'>
              <span>Sign in</span>
              <span>Welcome!</span>
            </div>
            <form className='form' onSubmit={onSubmitHandler} method='GET'>
              <label className='input--label' htmlFor='userInput'>
                User
                <input
                  type='text'
                  className='input--field'
                  name='userInput'
                  pattern='[a-z]+'
                  value={user}
                  onChange={handleUser}
                  title="No numbers, caps nor special characters"
                  required
                />
              </label>
              <label className='input--label' htmlFor='passwordInput'>
                Password
                <input
                  type='password'
                  className='input--field'
                  name='passwordInput'
                  required
                  minLength='8'
                  pattern='.{,8}'
                  title="Password must be 8 characters long"
                />
              </label>
              <div className='form__help'>
                <span className='form__help--remember'>
                  Remember me
                  <input type='checkbox' />
                </span>
                <a href='#passwordRecovery'>Forgot password?</a>
              </div>
              <div className='form__termsandconds'>
                <input type='checkbox' required />
                <span>
                  Do you accept our
                  <a href='#termsAndConditions'> terms and conditions</a>?
                </span>
              </div>
              {/* Seguimos las indicaciones de la prueba y colocamos un boton obligatorio para aceptar terminos y condiciones */}
              <button type='submit' className='form--button'>
                Sign in
              </button>
              {redirect ? <Redirect push to='/dashboard' /> : null}
              {/* Si la form se llena correctamente nos envia a la siguiente pagina, esto no es funcionamiento real, solo para la prueba,
                aqui deberia tomar la data ingresada y enviarla a la db para verificar si es correcta, esto es solo para la prueba. */}
            </form>
          </div>
        </div>
        <div className='signup'>
          Don't have an account?
          <a href='#signUp'> sign up</a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
