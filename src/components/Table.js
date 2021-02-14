import React, { useState, useEffect } from 'react'
import nba from '../api/nba'
import {
  RedCircle,
  GreenCircle,
  BlueCircle,
  SidewayArrow
} from '../resources/svg'

const Table = () => {
  const [result, setResult] = useState({})
  const [players, setPlayers] = useState([])
  const [meta, setMeta] = useState({})
  const [showTeam, setShowTeam] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(25) //25 es default desde la api
  const searchApi = async (page, perPage) => {
    try {
      const response = await nba.get(`/players/`, {
        params: {
          page,
          per_page: perPage
        }
      })
      setResult(response.data) //data in a variable so we can split it later
    } catch (err) {
      setErrorMsg('There was an error')
    }
  }
  useEffect(() => {
    //when page changes, search the api.
    if (page) {
      searchApi(page, perPage)
    }
  }, [page, perPage])

  useEffect(() => {
    //when result is changed, record the data and the meta
    if (result) {
      setPlayers(result.data)
      setMeta(result.meta)
    }
  }, [result])

  return (
    <div>
      <div className='table__content'>
        {/* Seguimos el dise;o grafico de la prueba
        donde este header aparece siempre */}
        <div className='team__header'>
          <div>Nombre equipo</div>
          <div>Conferencia</div>
          <div>Abreviatura</div>
          <div>Nombre completo </div>
          <div>División </div>
          <div>Ciudad</div>
        </div>
        {showTeam ? (
          <>
            <div onClick={() => setShowTeam(0)} className='team__info'>
              <div>{players[showTeam - 1].team.full_name}</div>
              <div>{players[showTeam - 1].team.conference}</div>
              <div>{players[showTeam - 1].team.abbreviation}</div>
              <div>{players[showTeam - 1].team.division}</div>
              <div>{players[showTeam - 1].team.name}</div>
              <div>{players[showTeam - 1].team.city}</div>
            </div>
            <div className='team__player'>{`Equipo de ${
              players[showTeam - 1].first_name
            } ${players[showTeam - 1].last_name}`}</div>
          </>
        ) : null}
        {errorMsg && <span>{errorMsg}</span>}
        <div className='table__header'>
          <div>ID</div>
          <div>Primer nombre</div>
          <div>Apellido</div>
          <div>Altura (pulgadas)</div>
          <div>Altura (pies)</div>
          <div>Peso</div>
          <div>Posicion</div>
        </div>
        {players &&
          players.map((player, index) => (
            <div
              //   js is interpreting the 0 as false instead of a number
              //so we send a n+1 here and in the display we substract 1
              onClick={() => setShowTeam(index + 1)}
              className='playerInfo'
              key={`${player} ${index}`}
            >
              <div>{player.id || '-'}</div>
              <div>{player.first_name || '-'}</div>
              <div>{player.last_name || '-'}</div>
              <div>{player.height_inches || '-'}</div>
              <div>{player.height_feet || '-'}</div>
              <div>{player.weight_pounds || '-'}</div>
              {/* this can be done better but im in a rush */}
              <div>
                {player.position === 'C' ? (
                  <RedCircle />
                ) : player.position === 'G' ? (
                  <GreenCircle />
                ) : player.position === 'F' ? (
                  <BlueCircle />
                ) : player.position === 'C-F' ? (
                  <>
                    <RedCircle /> <BlueCircle />
                  </>
                ) : player.position === 'F-C' ? (
                  <>
                    <BlueCircle /> <RedCircle />
                  </>
                ) : player.position === 'G-F' ? (
                  <>
                    <GreenCircle /> <BlueCircle />
                  </>
                ) : (
                  null || '-'
                )}
              </div>
            </div>
          ))}
      </div>
      <div className='pagination'>
        {meta && (
          <div className='pagination__info'>
            <div className='pagination__totals'>
              <div>Jugadores Totales: {meta.total_count}</div>
            </div>
            <div className='pagination__perPage'>
              Jugadores por pagina:
              <select
                name='per_page'
                onChange={e => setPerPage(e.target.value)}
              >
                <option value='25' defaultValue>
                  25
                </option>
                <option value='50'>50</option>
                <option value='100'>100</option>
              </select>
            </div>

            <div className='pagination__pages'>
              <div className='pagination__pages--text'>
                {meta.current_page} of {meta.total_pages}
              </div>
              <span
                className='pagination__pages--backIcon'
                onClick={() => setPage(Math.abs(page - 1))}
              >
                <SidewayArrow />
              </span>
              <span
                className='pagination__pages--nextIcon'
                onClick={() => setPage(page + 1)}
              >
                <SidewayArrow />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Table
