import React from 'react'
import Menu from './Menu'
import Filter from './Filter'
import Table from './Table'
import { StarIcon, CircleIcon, DropArrow, SquareIcon } from '../resources/svg'

const name = `John Doe`
const currentAgentOption = `Book of NBA Players`
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='menu__left'>
        <Menu />
      </div>
      <div className='content__right'>
        <div className='header'>
          <span>
            <StarIcon />
          </span>
          <span className='header--user'>
            <CircleIcon />
            {name}
            <DropArrow />
          </span>
        </div>
        <div className='container'>
        <div className='currentOption'>
            <div>
            <SquareIcon/>
            {currentAgentOption}
            </div>
        </div>
        <div className='filter'>
            <Filter/>
        </div>
        <div className='table'>
            <Table/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
