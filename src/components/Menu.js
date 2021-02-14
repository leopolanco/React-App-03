import React from 'react'
import { SquareIcon, HambIcon } from '../resources/svg'
import {Link} from 'react-router-dom'
const Menu = () => {
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
        <Link  to='/registration'>
        <div className='menu__options--option'>
          <div>
            
            <SquareIcon />
            Summary - BOB Agent
          </div>
          
        </div>
        </Link>
        <Link  to='/registration'>
        
        <div className='menu__options--option'>
          <div>
            <SquareIcon />
            Commissions
          </div>
        </div>
        </Link>
        <Link  to='/registration'>
        <div className='menu__options--option'>
          <div>
            <SquareIcon />
            Book of business
          </div>
        </div>
        </Link>
        <Link  to='/registration'>
        <div className='menu__options--option'>
          <div>
            <SquareIcon />
            Referrals
          </div>
        </div>
        </Link>
        <Link  to='/registration'>
        <div className='menu__options--option'>
          <div>
            <SquareIcon />
            Reports
          </div>
        </div>
        </Link>
        <Link  to='/registration'>
        <div className='menu__options--option'>
          <div>
            <SquareIcon />
            Reconciliations
          </div>
        </div>
        </Link>
        <Link  to='/registration'>
        <div className='menu__options--option'>
          <div>
            <SquareIcon />
            Referrals Life
          </div>
        </div>
        </Link>
        <Link  to='/registration'>
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
