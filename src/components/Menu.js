import React from 'react'
import { SquareIcon, HambIcon } from '../resources/svg'
import {Link} from 'react-router-dom'
const Menu = () => {
  console.log(process.env)
  return (
    <div className='menu'>
      <div className='menu__header'>
        <div className='menu__header--icon'>A</div>
        <div className='menu__header--text'>
          <span>Welcome</span>
          <span>Agent resource center</span>
        </div>
        <div className='menu__header--hamb'>
          <HambIcon />
        </div>
      </div>
      <div className='menu__options'>
        <div className='menu__options--title'> agent options</div>
        <Link  to='/forms'>
        <div className='menu__options--option'>
          <div>
            
            <SquareIcon />
            Click here to go to Forms
          </div>
          
        </div>
        </Link>
        <Link  to='/'>
        
        <div className='menu__options--option'>
          <div>
            <SquareIcon />
            Click here to go to Login

          </div>
        </div>
        </Link>
        <Link  to='/forms'>
        <div className='menu__options--option'>
          <div>
            <SquareIcon />
            Book of business
          </div>
        </div>
        </Link>
        <Link  to='/forms'>
        <div className='menu__options--option'>
          <div>
            <SquareIcon />
            Referrals
          </div>
        </div>
        </Link>
        <Link  to='/forms'>
        <div className='menu__options--option'>
          <div>
            <SquareIcon />
            Reports
          </div>
        </div>
        </Link>
        <Link  to='/forms'>
        <div className='menu__options--option'>
          <div>
            <SquareIcon />
            Reconciliations
          </div>
        </div>
        </Link>
        <Link  to='/forms'>
        <div className='menu__options--option'>
          <div>
            <SquareIcon />
            Referrals Life
          </div>
        </div>
        </Link>
        <Link  to='/forms'>
        <div className='menu__options--option'>
          <div>
            <SquareIcon />
            Documents and Resources
          </div>
        </div>
        </Link>

      </div>
    </div>
  )
}

export default Menu
